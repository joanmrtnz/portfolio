import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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
    localStorage.setItem("darkMode", true);
  }, []);



  return (
    <header className="font-mono font-medium bg-[var(--navy)] bg-opacity-90 sm:backdrop-blur-lg sm:bg-[var(--navy)]/70 fixed top-0 w-full z-50 px-6 md:px-[50px] shadow-sm">
      <nav className="h-[80px] w-full flex items-center justify-between  font-semibold text-s/7">

        <a href="#home">
          <img
            src={darkMode ? "/page-logo-dark.png" : "/page-logo-light.png"}
            alt="website logo"
            className="w-20 h-20 md:w-18 md:h-18 object-contain transition-all duration-300"
          />
        </a>

        <ul className="hidden md:flex items-center space-x-4 ml-auto">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-[var(--lightest-slate)] text-xl p-2 rounded-full transition-colors hover:text-[var(--green)]"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          <li><a href="#about" className="text-[var(--lightest-slate)] hover:text-[var(--green)] hover:underline focus-visible:underline focus:outline-none px-5 py-2.5">About</a></li>
          <li><a href="#experience" className="text-[var(--lightest-slate)] hover:text-[var(--green)] hover:underline focus-visible:underline focus:outline-none px-5 py-2.5">Experience</a></li>
          <li><a href="#projects" className="text-[var(--lightest-slate)] hover:text-[var(--green)] hover:underline focus-visible:underline focus:outline-none px-5 py-2.5">Projects</a></li>
          <li><a href="#contact" className="text-[var(--lightest-slate)] hover:text-[var(--green)] hover:underline focus-visible:underline focus:outline-none px-5 py-2.5">Contact</a></li>
          <li><a href="/joan_martinez_CV.pdf" className="text-[var(--green)] hover:underline focus-visible:underline focus:outline-none px-5 py-2.5">Resume</a></li>
        </ul>

        <button
          className="sm:block md:hidden text-[var(--lightest-slate)] text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>


        <div
          className={`fixed top-0 left-0 w-screen h-[70%] border border-[var(--section-outline)] bg-[var(--navy)] flex flex-col items-end justify-center gap-6 text-xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
        >

          <button
            className="absolute top-6 right-5 text-[var(--lightest-slate)] text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mr-4 text-[var(--lightest-slate)] text-2xl p-2 rounded-full transition-colors duration-300 hover:bg-gray-700"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>


          <a href="#about" onClick={() => setMenuOpen(false)} className="mr-4 border-b border-dashed text-[var(--lightest-slate)] hover:text-[var(--green)]">About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)} className="mr-4 border-b border-dashed text-[var(--lightest-slate)] hover:text-[var(--green)]">Experience</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="mr-4 border-b border-dashed text-[var(--lightest-slate)] hover:text-[var(--green)]">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="mr-4 border-b border-dashed text-[var(--lightest-slate)] hover:text-[var(--green)]">Contact</a>
         <a
           href="/joan_martinez_CV.pdf"
            type="button"
            onClick={() => setMenuOpen(false)}
            className="mr-4 border-b border-dashed text-[var(--green)] bg-[var(--navy)]"
          >Resume</a>
        </div>
      </nav>
    </header>
  );
}
