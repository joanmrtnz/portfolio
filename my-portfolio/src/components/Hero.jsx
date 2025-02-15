export default function Hero() {
    return (
      <section className="h-screen flex flex-col items-center justify-center text-center bg-[var(--navy)]">
        <p className="text-sm  text-[var(--green)]">Hi, my name is</p>
        <h1 className="text-5xl text-[var(--lightest-slate)] font-bold">Joan Martinez.</h1>
        <p className="text-xl mt-4 text-[var(--slate)]">Full Stack Web Developer</p>
        <a href="#projects" 
          className="text-[var(--green)] bg-[var(--navy)] border border-[var(--green)] hover:bg-[var(--green)] hover:text-[var(--navy)] focus:ring-[var(--green)] focus:outline-none font-medium rounded-lg text-sm px-5 py-3.5 m-5"
          >See my works.</a>

      </section>
    );
  }
  