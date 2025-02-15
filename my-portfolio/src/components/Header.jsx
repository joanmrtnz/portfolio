
export default function Header() {
  return (
    <header className="bg-[var(--navy)] fixed top-0 w-full z-50 ">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <img  src="/vite.svg" alt="website logo" />
        <ul className="flex items-center space-x-3">
          <li><a href="#about" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5 me-1 mb-2 ">_About</a></li>
          <li><a href="#experience" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5 me-1 mb-2 ">_Experience</a></li>
          <li><a href="#projects" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5 me-1 mb-2">_Projects</a></li>
          <li><a href="#contact" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5 me-1 mb-2">_Contact</a></li>
          <button type="button" 
          className="text-[var(--green)] bg-[var(--navy)] border border-[var(--green)] hover:bg-[var(--green)] hover:text-[var(--navy)] focus:ring-[var(--green)] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-1"
          >_Resume</button>

        </ul>
      </nav>
    </header>
  );
}
