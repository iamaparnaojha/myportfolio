import { motion, useReducedMotion } from "framer-motion";

export default function SectionHeading({ index, kicker, title, children }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="mb-12 max-w-3xl md:mb-16"
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="kicker mb-4">
        {index} — {kicker}
      </p>
      <h2 className="display text-[clamp(2.7rem,6vw,4.6rem)] text-ivory">{title}</h2>
      {children ? <p className="muted mt-5 max-w-2xl text-base md:text-lg">{children}</p> : null}
    </motion.div>
  );
}
