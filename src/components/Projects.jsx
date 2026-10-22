import { useEffect, useId, useRef, useState } from "react";
import { projectFilters, projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

function Visual({ project }) {
  return (
    <div className="project-visual" style={{ background: project.wash }}>
      <div className={`absolute inset-0 motif-${project.motif}`} aria-hidden="true" />
      <span className="absolute left-4 top-4 z-[1] text-[10px] uppercase tracking-[0.2em] text-ivory/85">
        {project.category}
      </span>
      {project.featured ? (
        <span className="absolute right-4 top-4 z-[1] text-[10px] uppercase tracking-[0.2em] text-[color:var(--gold)]">
          Featured
        </span>
      ) : null}
      <span className="mark" aria-hidden="true">
        {project.mark}
      </span>
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap gap-4 text-sm">
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.title} on GitHub`}
        className="underline decoration-[color:var(--line)] underline-offset-4 hover:decoration-[color:var(--violet)]"
      >
        GitHub
      </a>
      {project.demo ? (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} live demo`}
          className="underline decoration-[color:var(--line)] underline-offset-4 hover:decoration-[color:var(--violet)]"
        >
          Live Demo
        </a>
      ) : null}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const dialogRef = useRef(null);
  const openerRef = useRef(null);
  const titleId = useId();

  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);
  const featured = visible.filter((project) => project.featured);
  const supporting = visible.filter((project) => !project.featured);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !active) return undefined;
    if (!dialog.open) dialog.showModal();
    const onClose = () => {
      setActive(null);
      openerRef.current?.focus();
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, [active]);

  const openProject = (project, event) => {
    openerRef.current = event.currentTarget;
    setActive(project);
  };

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <SectionHeading index="03" kicker="Projects" title="Selected work.">
          Three featured systems, then the rest of the work — each with its repository, and a live demo where one exists.
        </SectionHeading>

        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {projectFilters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              className={`chip skill-tab ${filter === item ? "" : "hover:border-[color:var(--violet)]"}`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {featured.map((project, index) => (
            <article key={project.slug} className="panel grid overflow-hidden lg:grid-cols-2">
              <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <Visual project={project} />
              </div>
              <div className="flex flex-col p-6 md:p-8">
                <p className="kicker">{project.tagline}</p>
                <h3 className="display mt-3 text-4xl md:text-5xl">
                  {project.title}
                  {project.aka ? <span className="mt-1 block text-xl italic text-[color:var(--muted)]">{project.aka}</span> : null}
                </h3>
                <p className="muted mt-4 flex-1">{project.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 6).map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button type="button" className="btn btn-primary" onClick={(event) => openProject(project, event)}>
                    View project
                  </button>
                  <ProjectLinks project={project} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {supporting.length > 0 ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {supporting.map((project) => (
              <article key={project.slug} className="panel flex flex-col overflow-hidden">
                <Visual project={project} />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl text-ivory">
                    {project.title}
                    {project.aka ? <span className="text-[color:var(--muted)]"> · {project.aka}</span> : null}
                  </h3>
                  <p className="muted mt-2 flex-1 text-sm leading-relaxed">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <button type="button" className="text-sm text-ivory underline underline-offset-4" onClick={(event) => openProject(project, event)}>
                      Details
                    </button>
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : null}

        {visible.length === 0 ? <p className="muted mt-8">Nothing in this category yet.</p> : null}
      </div>

      {active ? (
        <dialog
          ref={dialogRef}
          className="project-dialog"
          aria-labelledby={titleId}
          onClick={(event) => {
            if (event.target === event.currentTarget) event.currentTarget.close();
          }}
        >
          <div className="max-h-[86vh] overflow-y-auto">
            <Visual project={active} />
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="kicker">{active.tagline}</p>
                  <h3 id={titleId} className="display mt-2 text-4xl md:text-5xl">
                    {active.title}
                  </h3>
                  {active.aka ? <p className="mt-1 italic text-[color:var(--muted)]">Also known as {active.aka}</p> : null}
                </div>
                <button type="button" className="btn btn-ghost shrink-0" onClick={() => dialogRef.current?.close()}>
                  Close
                </button>
              </div>
              <p className="muted mt-5">{active.description}</p>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-ivory/90">
                {active.features.map((feature) => (
                  <li key={feature} className="border-t border-[color:var(--line)] pt-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {active.tech.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ProjectLinks project={active} />
              </div>
            </div>
          </div>
        </dialog>
      ) : null}
    </section>
  );
}
