import { useEffect, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { getProjects } from "@/lib/getProjects";
import type { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

type FilterCategory = "All" | "AI" | "Non-AI";

export default function ProjectsGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<FilterCategory>("All");
  const [techFilter, setTechFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // Collect all unique tech tags
  const allTechs = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set).sort()];
  }, [projects]);

  // Filtered projects
  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (category === "AI" && !p.isAI) return false;
      if (category === "Non-AI" && p.isAI) return false;
      if (techFilter !== "All" && !p.tech.includes(techFilter)) return false;
      return true;
    });
  }, [projects, category, techFilter]);

  const handleOpen = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const categoryFilters: FilterCategory[] = ["All", "AI", "Non-AI"];

  if (loading) {
    return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark">
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Loading projects…
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-text-light dark:text-text-dark">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mt-3 text-text-muted-light dark:text-text-muted-dark max-w-lg mx-auto">
              A selection of projects I&apos;ve built — from full-stack apps to
              AI-assisted experiments.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
            {/* Category pills */}
            <div className="flex gap-2" role="group" aria-label="Filter by category">
              {categoryFilters.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                    category === c
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                      : "bg-gray-100 dark:bg-gray-800 text-text-muted-light dark:text-text-muted-dark hover:bg-primary-100 dark:hover:bg-primary-900/30"
                  }`}
                >
                  {c === "AI" ? "AI Projects" : c === "Non-AI" ? "Non-AI Projects" : c}
                </button>
              ))}
            </div>

            {/* Tech dropdown */}
            <select
              value={techFilter}
              onChange={(e) => setTechFilter(e.target.value)}
              aria-label="Filter by technology"
              className="rounded-lg border border-gray-200 dark:border-gray-700
                bg-surface-light dark:bg-surface-card-dark
                px-3 py-1.5 text-sm text-text-light dark:text-text-dark
                focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
            >
              {allTechs.map((t) => (
                <option key={t} value={t}>
                  {t === "All" ? "All Technologies" : t}
                </option>
              ))}
            </select>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} onOpen={handleOpen} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-text-muted-light dark:text-text-muted-dark">
              <p className="text-lg">No projects match the selected filters.</p>
              <button
                onClick={() => {
                  setCategory("All");
                  setTechFilter("All");
                }}
                className="mt-3 text-primary-500 hover:text-primary-600 text-sm font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={handleClose} />
    </>
  );
}
