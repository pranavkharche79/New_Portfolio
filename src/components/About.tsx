import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["Java", "TypeScript", "JavaScript", "SQL", "HTML/CSS"] },
  { category: "Backend", items: ["Spring Boot", "Hibernate", "REST APIs", "Node.js"] },
  { category: "Frontend", items: ["React", "TailwindCSS", "Three.js", "Framer Motion"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Cloudinary", "CI/CD"] },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-card-light dark:bg-surface-card-dark"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light dark:text-text-dark">
            About{" "}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-lg">
              I&apos;m a passionate Full-Stack Developer with experience in building scalable web
              applications using Java, Spring Boot, React, and TypeScript. I thrive on solving
              complex problems and delivering polished, user-centered products.
            </p>
            <p className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              My focus areas include RESTful API design, modern frontend architectures, cloud
              deployment, and increasingly, AI-assisted development workflows. I believe in clean
              code, test-driven development, and continuous learning.
            </p>
            <p className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              When I&apos;m not coding, you can find me exploring open-source projects or
              experimenting with new frameworks and tools.
            </p>

            {/* Quick stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { label: "Projects", value: "10+" },
                { label: "Technologies", value: "15+" },
                { label: "Commits", value: "500+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center rounded-xl bg-surface-light dark:bg-surface-dark p-4
                    ring-1 ring-gray-100 dark:ring-white/5"
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {skills.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
              >
                <h3 className="text-sm font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-wider mb-2">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-surface-light dark:bg-surface-dark
                        px-3 py-1.5 text-sm font-medium
                        text-text-light dark:text-text-dark
                        ring-1 ring-gray-100 dark:ring-white/5
                        hover:ring-primary-300 dark:hover:ring-primary-700
                        transition-all hover:-translate-y-0.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
