import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <header className="backdrop-blur-lg bg-[var(--navy)]/70 fixed top-0 w-full z-50 px-6 md:px-[50px] shadow-sm">
      <nav className="h-[80px] container mx-auto flex justify-between items-center font-semibold text-s/7">
        
       
        <a href="#home">
          <img
            src="/page_logo.png"
            alt="website logo"
            className="w-20 h-20 md:w-16 md:h-16 object-contain"
          />
        </a>

        
        <ul className="hidden md:flex items-center text-left space-x-4">
          <li><a href="#about" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5">_About</a></li>
          <li><a href="#experience" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5">_Experience</a></li>
          <li><a href="#projects" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5">_Projects</a></li>
          <li><a href="#contact" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5">_Contact</a></li>
          <button
            type="button"
            className="text-[var(--green)] bg-[var(--navy)] hover:text-[var(--white)] border border-[var(--green)] focus:ring-[var(--green)] focus:outline-none hover:shadow-lg hover:shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-3.5"
          >_Resume</button>
        </ul>

       
        <button 
          className="sm:block md:hidden text-[var(--lightest-slate)] text-3xl" 
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>

       
        <div 
          className={`fixed top-0 left-0 w-screen h-screen bg-[var(--navy)] flex flex-col items-center justify-center gap-6 text-xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          
          <button 
            className="absolute top-6 right-6 text-[var(--lightest-slate)] text-4xl"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>

          <a href="#about" onClick={() => setMenuOpen(false)} className="text-[var(--lightest-slate)] hover:text-[var(--green)]">_About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)} className="text-[var(--lightest-slate)] hover:text-[var(--green)]">_Experience</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-[var(--lightest-slate)] hover:text-[var(--green)]">_Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-[var(--lightest-slate)] hover:text-[var(--green)]">_Contact</a>
          <button 
            type="button"
            onClick={() => setMenuOpen(false)}
            className="text-[var(--green)] bg-[var(--navy)] border border-[var(--green)] focus:outline-none hover:shadow-lg hover:shadow-green-500/50 font-medium rounded-lg text-lg px-6 py-3"
          >_Resume</button>
        </div>
      </nav>
    </header>
  );
}
