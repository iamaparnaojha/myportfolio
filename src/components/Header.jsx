import { motion, useReducedMotion } from "framer-motion";
import { profile, profiles, marquee } from "../data/portfolio";
import Magnetic from "./Magnetic";

const socials = profiles.filter((item) => ["GitHub", "LinkedIn", "LeetCode"].includes(item.label));

function RevealLine({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={`block ${className}`}>{children}</span>;

  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Header() {
  const reduce = useReducedMotion();

  return (
    <>
      <section id="top" className="hero">
        <div className="engine-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap relative z-[2] w-full text-center">
          <p className="kicker mb-6">Software engineer · Full-stack · AI systems</p>
          <h1 className="display text-[clamp(4.4rem,13vw,8.6rem)]">
            <RevealLine>Aparna</RevealLine>
            <RevealLine delay={0.08} className="italic text-[color:var(--violet)]">
              Ojha
            </RevealLine>
          </h1>

          <div className="mx-auto mt-8 max-w-3xl">
            <p className="display text-[clamp(1.8rem,3.4vw,2.7rem)] leading-[1.05] text-ivory">
              {profile.headline}
            </p>
            <p className="display mt-1 text-[clamp(1.8rem,3.4vw,2.7rem)] italic leading-[1.05] text-[color:var(--gold)]">
              {profile.subhead}
            </p>
            <p className="muted mx-auto mt-6 max-w-xl text-base md:text-lg">{profile.intro}</p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Magnetic className="btn btn-primary" href="#projects">
                Explore Projects
              </Magnetic>
              <Magnetic className="btn btn-ghost" href="#contact">
                Contact Me
              </Magnetic>
              <Magnetic className="btn btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">
                Resume
              </Magnetic>
            </div>

            <ul className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[color:var(--muted)] underline decoration-transparent underline-offset-4 transition hover:text-ivory hover:decoration-[color:var(--violet)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-[color:var(--muted)]">
              <span className="mb-1 block text-[color:var(--gold)]">Currently</span>
              {profile.availability}
              <span className="mt-3 block">B.Tech IT · JSSATE Noida · Class of 2027</span>
            </p>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden={reduce ? undefined : "true"}>
        {reduce ? (
          <ul className="wrap flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
            {marquee.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <div className="marquee-track">
            {[...marquee, ...marquee].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
