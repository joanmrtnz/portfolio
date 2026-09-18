import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (darkMode) {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
    } else {
      htmlElement.classList.add("light");
      htmlElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    let frameId = 0;

    const updateActiveSection = () => {
      frameId = 0;
      const marker = Math.min(window.innerHeight * 0.35, 240);
      let current = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) current = section.id;
      }
      // The last section may be too short to reach the marker before the page ends.
      const atBottom = window.scrollY > 0 &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = sections.at(-1)?.id || "";
      setActiveSection(current);
    };

    const scheduleUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    const resizeObserver = new ResizeObserver(scheduleUpdate);
    sections.forEach((section) => resizeObserver.observe(section));

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <header className="font-mono font-medium bg-[var(--navy)] bg-opacity-90 sm:backdrop-blur-lg sm:bg-[var(--navy)]/70 fixed top-0 w-full z-50 px-6 md:px-[50px] border-b border-[var(--section-outline)]/80">
      <nav className="h-[80px] w-full flex items-center justify-between  type-ui">

        <a
          href="#home"
          aria-label="Go to home"
          className="flex w-20 h-20 md:w-18 md:h-18 items-center font-mono tracking-tighter text-xl font-semibold text-[var(--green)] transition-colors duration-300 hover:text-[var(--light-green)]"
        >
          mrtnz_
        </a>

        <ul className="hidden md:flex items-center space-x-4 ml-auto">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-[var(--lightest-slate)] text-xl p-2 rounded-full transition-colors hover:text-[var(--green)]"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={activeSection === id ? "location" : undefined}
                className="nav-section-link hover:underline focus-visible:underline focus:outline-none px-5 py-2.5"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="sm:block md:hidden text-[var(--lightest-slate)] text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>


        <div
          className={`fixed top-0 left-0 w-screen h-[70%] border border-[var(--section-outline)] bg-[var(--navy)] flex flex-col items-end justify-center gap-6 type-ui transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
        >

          <button
            className="absolute top-6 right-5 text-[var(--lightest-slate)] text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>

          <button
            onClick={() => {
              setDarkMode((current) => !current);
              setMenuOpen(false);
            }}
            className="mr-4 text-[var(--lightest-slate)] text-2xl p-2 rounded-full transition-colors duration-300 hover:bg-gray-700"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>


          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              aria-current={activeSection === id ? "location" : undefined}
              className="nav-section-link mr-4 border-b border-dashed"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
