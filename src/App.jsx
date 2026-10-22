import Atmosphere from "./components/Atmosphere";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { nav, profile, profiles } from "./data/portfolio";

const footerLinks = profiles.filter((item) => ["GitHub", "LinkedIn", "LeetCode", "Email"].includes(item.label));

function App() {
  return (
    <div className="relative">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Atmosphere />
      <Navigation />
      <main id="content" className="relative z-[1]">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-[color:var(--line)] py-10">
        <div className="wrap flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="display text-4xl">{profile.name}</p>
            <p className="muted mt-2 text-sm">Software engineer · Noida</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {nav.map((item) => (
                <li key={item.id}>
                  <a className="text-sm text-[color:var(--muted)] hover:text-ivory" href={`#${item.id}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="wrap mt-8 flex flex-col gap-3 border-t border-[color:var(--line)] pt-6 text-sm text-[color:var(--faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <ul className="flex flex-wrap gap-4">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-ivory"
                  {...(item.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
