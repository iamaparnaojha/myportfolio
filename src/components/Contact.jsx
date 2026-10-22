import { profile, profiles } from "../data/portfolio";
import Magnetic from "./Magnetic";

export default function Contact() {
  return (
    <section id="contact" className="contact-band section">
      <div className="wrap">
        <p className="kicker mb-4">07 — Contact</p>
        <h2 className="display text-[clamp(3rem,8vw,6.4rem)] leading-[0.92]">
          Tell me what
          <span className="italic"> you’re building.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-[#3f3a33]">
          Recruiters, collaborators, and teams with a real problem — email is the direct line. I read it.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Magnetic className="btn btn-primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </Magnetic>
          <Magnetic className="btn border-[#1c1915] text-[#1c1915] hover:bg-[#1c1915] hover:text-[#efeae2]" href={profile.phoneHref}>
            {profile.phone}
          </Magnetic>
        </div>

        <ul className="mt-10 grid gap-px bg-[#d9d3c8] sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((item) => (
            <li key={item.label} className="bg-[color:var(--paper)]">
              <a
                href={item.href}
                className="flex min-h-24 flex-col justify-between px-4 py-4 transition-colors hover:bg-[#e7e1d8]"
                {...(item.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <span className="text-xs uppercase tracking-[0.18em] text-[#6d675e]">{item.label}</span>
                <span className="mt-3 text-[#16140f]">{item.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
