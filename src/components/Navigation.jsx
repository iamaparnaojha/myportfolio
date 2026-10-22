import { useEffect, useRef, useState } from "react";
import { nav, profile } from "../data/portfolio";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const wasOpen = useRef(false);
  const closeRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0.15, 0.4, 0.7] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (wasOpen.current && !open) toggleRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap flex w-full items-center justify-between gap-6">
        <a href="#top" className="display text-2xl tracking-normal" aria-label="Aparna Ojha, back to top">
          AO
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          <ul className="flex items-center gap-6">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="nav-link"
                  aria-current={active === item.id ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a className="btn btn-primary hidden sm:inline-flex" href={profile.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            ref={closeRef}
            type="button"
            className="btn btn-ghost absolute right-5 top-4"
            onClick={close}
          >
            Close
          </button>
          <nav aria-label="Mobile">
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={close}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
