import { motion, useReducedMotion } from "framer-motion";
import { experience } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SectionHeading index="02" kicker="Experience" title="Where the work has been.">
          Internships in AI evaluation, full-stack product work, and generative AI, plus campus placement coordination and freelance builds.
        </SectionHeading>

        <ol className="timeline max-w-4xl">
          {experience.map((item, index) => (
            <motion.li
              key={`${item.company}-${item.role}`}
              className={`timeline-item ${item.current ? "is-current" : ""}`}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.5, delay: reduce ? 0 : index * 0.05 }}
            >
              <article className="exp-card panel">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                  <div>
                    <h3 className="text-xl text-ivory md:text-2xl">{item.role}</h3>
                    <p className="text-[color:var(--violet)]">{item.company}</p>
                  </div>
                  <p className="text-sm text-[color:var(--gold)]">{item.period}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[color:var(--muted)] md:text-base">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <li key={skill} className="chip">
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
