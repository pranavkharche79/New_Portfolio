import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Associate QA Engineer",
    company: "NetSPI",
    date: "06/2024 - Present",
    location: "Pune",
    points: [
      "Developed a Notification Management REST API using Spring Boot with endpoints for creating notifications, marking individual notifications as read, and bulk mark-all-as-read functionality with ownership validation.",
      "Implemented a Notification Subscription system allowing users to subscribe or unsubscribe from project notifications using an upsert pattern and authorization checks.",
      "Designed Request/Response DTOs using Java Records and Jakarta Bean Validation to enforce input validation and maintain clear separation between API and persistence layers.",
      "Automated end-to-end UI test cases using Playwright and performed manual testing to validate application functionality.",
      "Verified application behavior through SQL queries and participated in defect analysis and root-cause discussions.",
      "Continuously upskilling in Java, Spring Boot, MySQL and PostgreSQL to transition into a backend development role."
    ]
  }
];

const educationData = [
  {
    degree: "Post Graduation (CDAC)",
    institution: "Institute of Emerging Technologies (IET), Pune",
    date: "09/2023 - 02/2024"
  },
  {
    degree: "Bachelor of Engineering",
    institution: "Nagpur University",
    date: "07/2019 - 07/2023"
  }
];

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-light dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-light dark:text-text-dark">
            Experience &{" "}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="mt-4 text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
            My professional journey and academic background.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Experience Column */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="text-primary-500 text-2xl">💼</span>
              <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">Experience</h3>
            </div>
            
            <div className="relative border-l-2 border-primary-500/30 pl-6 ml-3 space-y-10">
              {experienceData.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[35px] top-1.5 h-4 w-4 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(var(--color-primary-500-rgb),0.5)]"></span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold text-text-light dark:text-text-dark">{exp.role}</h4>
                    <span className="text-sm rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-3 py-1 font-medium w-fit mt-2 sm:mt-0">
                      {exp.date}
                    </span>
                  </div>
                  <p className="text-accent-600 dark:text-accent-400 font-medium mb-4">
                    {exp.company} &bull; {exp.location}
                  </p>
                  <ul className="space-y-2 text-text-muted-light dark:text-text-muted-dark leading-relaxed text-sm">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">&rsaquo;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
             <div className="mb-8 flex items-center gap-3">
              <span className="text-accent-500 text-2xl">🎓</span>
              <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">Education</h3>
            </div>
            
            <div className="relative border-l-2 border-accent-500/30 pl-6 ml-3 space-y-10">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[35px] top-1.5 h-4 w-4 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(var(--color-accent-500-rgb),0.5)]"></span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold text-text-light dark:text-text-dark">{edu.degree}</h4>
                    <span className="text-sm rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 px-3 py-1 font-medium w-fit mt-2 sm:mt-0">
                      {edu.date}
                    </span>
                  </div>
                  <p className="text-text-muted-light dark:text-text-muted-dark font-medium leading-relaxed">
                    {edu.institution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
