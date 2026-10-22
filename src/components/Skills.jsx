import { useState } from "react";
import { skillGroups } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);
  const current = skillGroups.find((group) => group.id === active) ?? skillGroups[0];

  const onKeyDown = (event) => {
    const index = skillGroups.findIndex((group) => group.id === active);
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % skillGroups.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + skillGroups.length) % skillGroups.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = skillGroups.length - 1;
    else return;
    event.preventDefault();
    const group = skillGroups[next];
    setActive(group.id);
    document.getElementById(`skill-tab-${group.id}`)?.focus();
  };

  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionHeading index="04" kicker="Skills" title="Tools I actually ship with.">
          Grouped by the work, not by a score. Nothing here is a percentage of mastery.
        </SectionHeading>

        <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <div role="tablist" aria-label="Skill categories" aria-orientation="vertical" className="flex flex-wrap gap-2 lg:flex-col" onKeyDown={onKeyDown}>
            {skillGroups.map((group) => {
              const selected = group.id === current.id;
              return (
                <button
                  key={group.id}
                  id={`skill-tab-${group.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`skill-panel-${group.id}`}
                  tabIndex={selected ? 0 : -1}
                  className="skill-tab chip justify-start text-left"
                  onClick={() => setActive(group.id)}
                >
                  {group.label}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`skill-panel-${current.id}`}
            aria-labelledby={`skill-tab-${current.id}`}
            className="panel min-h-[240px] p-6 md:p-8"
          >
            <p className="kicker">{current.label}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {current.items.map((item) => (
                <li key={item} className="border border-[color:var(--line)] px-3 py-2 text-sm text-ivory md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
