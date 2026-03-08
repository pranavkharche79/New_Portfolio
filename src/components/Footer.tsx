export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 dark:border-white/5 bg-surface-card-light dark:bg-surface-card-dark">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Brand */}
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
            © {currentYear}{" "}
            <span className="font-semibold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Pranav
            </span>
            . All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:pranav@example.com"
              className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary-500 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-text-muted-light/60 dark:text-text-muted-dark/60">
          Built with React, TypeScript, Three.js & TailwindCSS
        </p>
      </div>
    </footer>
  );
}
