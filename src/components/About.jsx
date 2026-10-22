import { motion, useReducedMotion } from "framer-motion";
import { about } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHeading index="01" kicker="About" title="Engineering, with a point of view.">
          A software engineer who likes the hard part to be visible: the system, the interface, and the reason it should exist.
        </SectionHeading>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.55 }}
          >
            <div className="space-y-5 text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <dl className="mt-8 grid gap-px border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2">
              {about.facts.map((fact) => (
                <div key={fact.label} className="bg-[color:var(--ink)] px-4 py-4">
                  <dt className="kicker">{fact.label}</dt>
                  <dd className="mt-2 text-ivory">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.figure
            className="portrait panel mx-auto w-full max-w-[280px] lg:max-w-none"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <img
              src="/photo.jpg"
              alt="Portrait of Aparna Ojha"
              width="1200"
              height="1600"
              loading="lazy"
              decoding="async"
              className="aspect-[3/4]"
            />
            <figcaption className="flex items-center justify-between px-3 py-2 text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
              <span>Aparna Ojha</span>
              <span>Noida</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
