import { certifications, education } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap">
        <SectionHeading index="06" kicker="Education" title="The long study." />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="panel p-6 md:p-8">
            <p className="kicker">Degree</p>
            <h3 className="display mt-4 text-4xl leading-tight md:text-5xl">{education.degree}</h3>
            <p className="mt-4 text-lg text-ivory">{education.school}</p>
            <p className="muted mt-2">
              {education.period}
              <span className="mx-2 text-[color:var(--gold)]">/</span>
              CGPA {education.cgpa}
            </p>
            <ul className="mt-6 space-y-2 text-[color:var(--muted)]">
              {education.notes.map((note) => (
                <li key={note} className="border-t border-[color:var(--line)] pt-2">
                  {note}
                </li>
              ))}
            </ul>
          </article>

          <div>
            <p className="kicker mb-4">Certifications</p>
            <ul className="space-y-4">
              {certifications.map((item) => (
                <li key={item.title} className="panel p-5">
                  <h3 className="text-xl text-ivory">{item.title}</h3>
                  <p className="mt-1 text-sm text-[color:var(--gold)]">{item.issuer}</p>
                  <p className="muted mt-3 text-sm leading-relaxed">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
