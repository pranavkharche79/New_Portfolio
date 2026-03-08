import { lazy, Suspense } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectsGrid from "./components/ProjectsGrid";
import About from "./components/About";
import Contact from "./components/Contact";

import ExperienceEducation from "./components/ExperienceEducation";

// Code-split the heavy 3D scene
const Hero3D = lazy(() => import("./components/Hero3D"));

function HeroFallback() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-surface-light dark:bg-surface-dark pt-16">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark">
          <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Loading 3D scene…
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-surface-dark text-text-dark transition-colors duration-300">
      <Header />

      <main>
        <Suspense fallback={<HeroFallback />}>
          <Hero3D />
        </Suspense>

        <ExperienceEducation />
        <ProjectsGrid />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
