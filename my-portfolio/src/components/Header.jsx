
export default function Header() {
  return (
    <header className="backdrop-blur-lg bg-[var(--navy)]/70 fixed top-0 w-full z-50 px-[50px] ">
      <nav className="h-[100px] container mx-auto flex justify-between items-center font-semibold text-s/7">
        <a href="#home"><img  src="/page_logo.png" height='80px' width='80px' alt="website logo" /></a>
        <ul className="flex items-center text-left space-x-1">
          <li><a href="#about" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5 me-1 mb-2 ">_About</a></li>
          <li><a href="#experience" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5 me-1 mb-2 ">_Experience</a></li>
          <li><a href="#projects" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5 me-1 mb-2">_Projects</a></li>
          <li><a href="#contact" className="text-[var(--lightest-slate)] hover:text-[var(--green)] px-5 py-2.5 me-1 mb-2">_Contact</a></li>
          <button type="button" 
        className="text-[var(--green)] bg-[var(--navy)] hover:text-[var(--white)] border border-[var(--green)] focus:ring-[var(--green)] focus:outline-none hover:shadow-lg hover:shadow-green-500/50  font-medium rounded-lg text-sm px-5 py-3.5"
        >_Resume</button>

        </ul>
      </nav>
    </header>
  );
}
