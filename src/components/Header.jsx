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


  return (
    <header className="bg-[var(--navy)] bg-opacity-90 sm:backdrop-blur-lg sm:bg-[var(--navy)]/70 fixed top-0 w-full z-50 px-6 md:px-[50px] shadow-sm">
      <nav className="h-[80px] container mx-auto flex justify-between items-center font-semibold text-s/7">

        <a href="#home">
          <img
            src={darkMode ? "/page-logo-dark.png" : "/page-logo-light.png"}
            alt="website logo"
            className="w-20 h-20 md:w-16 md:h-16 object-contain transition-all duration-300"
          />
        </a>



        <ul className="hidden md:flex items-center text-left space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-[var(--lightest-slate)] text-2xl p-2 rounded-full transition-colors duration-300 hover:bg-gray-700"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          <li><a href="#about" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5">About</a></li>
          <li><a href="#experience" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5">Experience</a></li>
          <li><a href="#projects" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5">Projects</a></li>
          <li><a href="#contact" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5">Contact</a></li>
          <button
            type="button"
            className="text-[var(--green)] bg-[var(--navy)] hover:text-[var(--white)] border border-[var(--green)] focus:ring-[var(--green)] focus:outline-none hover:shadow-lg hover:shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-3.5"
          >Resume</button>
        </ul>


        <button
          className="sm:block md:hidden text-[var(--lightest-slate)] text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>


        <div
          className={`fixed top-0 left-0 w-screen h-screen bg-[var(--navy)] flex flex-col items-center justify-center gap-6 text-xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
        >

          <button
            className="absolute top-6 right-6 text-[var(--lightest-slate)] text-4xl"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-[var(--lightest-slate)] text-2xl p-2 rounded-full transition-colors duration-300 hover:bg-gray-700"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>


          <a href="#about" onClick={() => setMenuOpen(false)} className="text-[var(--lightest-slate)] hover:text-[var(--green)]">About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)} className="text-[var(--lightest-slate)] hover:text-[var(--green)]">Experience</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-[var(--lightest-slate)] hover:text-[var(--green)]">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-[var(--lightest-slate)] hover:text-[var(--green)]">Contact</a>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="text-[var(--green)] bg-[var(--navy)] border border-[var(--green)] focus:outline-none hover:shadow-lg hover:shadow-green-500/50 font-medium rounded-lg text-lg px-6 py-3"
          >Resume</button>
        </div>
      </nav>
    </header>
  );
}
