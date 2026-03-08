import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Frontend-only demo — integrate with a service like Formspree or EmailJS
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light dark:text-text-dark">
            Get In{" "}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mt-3 text-text-muted-light dark:text-text-muted-dark max-w-lg mx-auto">
            Have a project in mind, or just want to say hello? Drop me a message.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                label: "Email",
                value: "pranav@example.com",
                href: "mailto:pranav@example.com",
              },
              {
                icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                ),
                label: "GitHub",
                value: "github.com/yourusername",
                href: "https://github.com/yourusername",
              },
              {
                icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
                label: "LinkedIn",
                value: "linkedin.com/in/yourusername",
                href: "https://linkedin.com/in/yourusername",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl p-4
                  bg-surface-card-light dark:bg-surface-card-dark
                  ring-1 ring-gray-100 dark:ring-white/5
                  hover:ring-primary-300 dark:hover:ring-primary-700
                  transition-all hover:-translate-y-0.5 group"
              >
                <div className="flex-shrink-0 rounded-lg bg-primary-100 dark:bg-primary-900/30 p-3 text-primary-600 dark:text-primary-400 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-text-light dark:text-text-dark">
                    {item.label}
                  </p>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-700
                    bg-surface-light dark:bg-surface-dark
                    px-4 py-2.5 text-sm text-text-light dark:text-text-dark
                    placeholder:text-text-muted-light/50 dark:placeholder:text-text-muted-dark/50
                    focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-700
                    bg-surface-light dark:bg-surface-dark
                    px-4 py-2.5 text-sm text-text-light dark:text-text-dark
                    placeholder:text-text-muted-light/50 dark:placeholder:text-text-muted-dark/50
                    focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-700
                    bg-surface-light dark:bg-surface-dark
                    px-4 py-2.5 text-sm text-text-light dark:text-text-dark
                    placeholder:text-text-muted-light/50 dark:placeholder:text-text-muted-dark/50
                    focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                  placeholder="Tell me about your project or just say hi…"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl px-6 py-3 text-sm font-semibold
                  bg-primary-600 text-white hover:bg-primary-700
                  shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40
                  transition-all hover:-translate-y-0.5
                  disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={submitted}
              >
                {submitted ? "Message Sent! ✨" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
