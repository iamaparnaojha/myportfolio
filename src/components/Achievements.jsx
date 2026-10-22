import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { awards, profiles, stats } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

function useCount(target, active) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? target : 0);

  useEffect(() => {
    if (target == null) return undefined;
    if (!active || reduce) {
      setValue(target);
      return undefined;
    }
    const duration = 900;
    const started = performance.now();
    let frame = 0;
    const tick = (now) => {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reduce, target]);

  return value;
}

function Stat({ stat, active }) {
  const counted = useCount(stat.value, active);
  return (
    <div className="border-t border-[color:var(--line)] pt-4">
      <p className="stat-value">
        {stat.display ?? (
          <>
            {stat.prefix}
            {counted}
            {stat.suffix}
          </>
        )}
      </p>
      <p className="muted mt-2 text-sm">{stat.label}</p>
    </div>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const leetcode = profiles.find((item) => item.label === "LeetCode");

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="section">
      <div className="wrap">
        <SectionHeading index="05" kicker="Achievements" title="Proof, not adjectives.">
          Ranks, streaks, and hackathon results.
        </SectionHeading>

        <div ref={ref} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <Stat key={stat.label} stat={stat} active={active} />
          ))}
        </div>

        <div className="mt-12">
          {awards.map((award, index) => (
            <article key={award.title} className="award">
              <p className="kicker pt-1">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h3 className="text-lg text-ivory md:text-xl">{award.title}</h3>
                <p className="muted mt-1 text-sm md:text-base">{award.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <figure className="mt-14">
          <img
            src="/hero.png"
            alt="Saved LeetCode snapshot for iamaparnaojha showing 702 problems solved, a 500-day badge, and contest rating 1,835"
            width="1058"
            height="741"
            loading="lazy"
            decoding="async"
            className="leetcode-shot"
          />
          <figcaption className="muted mt-3 text-sm">
            A snapshot saved with this portfolio, not a live feed.{" "}
            <a className="text-ivory underline underline-offset-4" href={leetcode.href} target="_blank" rel="noreferrer">
              Open the LeetCode profile
            </a>
            .
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
