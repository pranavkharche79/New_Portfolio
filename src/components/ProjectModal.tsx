import { lazy, Suspense, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/types/project";

const VideoPlayer = lazy(() => import("./VideoPlayer"));

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);

  // Focus trap & escape handling
  useEffect(() => {
    if (!project) return;
    prevFocusRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
      prevFocusRef.current?.focus();
    };
  }, [project, onClose]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose],
  );

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Details for ${project.title}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6
            bg-black/60 backdrop-blur-sm"
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto
              rounded-2xl bg-surface-light dark:bg-surface-card-dark
              shadow-2xl ring-1 ring-white/10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 rounded-full p-2
                bg-black/20 backdrop-blur-sm text-white
                hover:bg-black/40 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image carousel / hero */}
            {project.images.length > 0 ? (
              <div className="relative aspect-video bg-primary-100 dark:bg-primary-900/20 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover"
                />
                {project.isAI && (
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full
                    bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1
                    text-xs font-semibold text-white shadow-lg">
                    AI-Assisted
                  </span>
                )}
              </div>
            ) : (
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
            )}

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-text-light dark:text-text-dark">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-sm text-text-muted-light dark:text-text-muted-dark">
                    {project.year}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-text-muted-light dark:text-text-muted-dark leading-relaxed whitespace-pre-wrap">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary-100 dark:bg-primary-900/30
                      px-3 py-1 text-xs font-medium
                      text-primary-700 dark:text-primary-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Video */}
              {project.videoUrl && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-text-light dark:text-text-dark mb-3">
                    Demo Video
                  </h3>
                  <div className="rounded-xl overflow-hidden bg-black aspect-video">
                    <Suspense
                      fallback={
                        <div className="flex items-center justify-center h-full text-white/60">
                          Loading player…
                        </div>
                      }
                    >
                      <VideoPlayer url={project.videoUrl} />
                    </Suspense>
                  </div>
                </div>
              )}

              {/* Image gallery (remaining images) */}
              {project.images.length > 1 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-text-light dark:text-text-dark mb-3">
                    Screenshots
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {project.images.slice(1).map((img, i) => (
                      <img
                        key={img}
                        src={img}
                        alt={`${project.title} screenshot ${i + 2}`}
                        className="rounded-lg w-full aspect-video object-cover"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                    bg-gray-900 dark:bg-white text-white dark:text-gray-900
                    hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  View on GitHub
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold
                      border border-primary-300 dark:border-primary-700
                      text-primary-600 dark:text-primary-400
                      hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
