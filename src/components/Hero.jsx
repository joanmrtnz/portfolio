export default function Hero() { 
  return (
    <section
      id="home"
      className="min-h-screen pt-[100px] flex flex-col items-start justify-center text-left px-6 md:px-20 m-auto bg-[var(--navy)]"
    >
      <p className="text-lg md:text-xl text-[var(--green)] mb-3 md:mb-5 opacity-0 animate-fade-in-up delay-100">
        Hi, my name is
      </p>

      <h1 className="text-4xl md:text-7xl text-[var(--lightest-slate)] font-bold mb-3 md:mb-5 opacity-0 animate-fade-in-up delay-200">
        Joan Martinez.
      </h1>

      <h1 className="text-3xl md:text-6xl text-[var(--slate)] font-bold mb-2 md:mb-3 opacity-0 animate-fade-in-up delay-300">
        I create digital solutions for a constantly evolving world.
      </h1>

      <p className="text-lg md:text-xl mt-2 md:mt-4 text-[var(--slate)] mb-3 md:mb-5 opacity-0 animate-fade-in-up delay-400">
        Junior Web Developer
      </p>

      <p className="text-base md:text-xl mt-2 text-[var(--slate)] mb-5 md:mb-8 opacity-0 animate-fade-in-up delay-500">
        Web developer by day, problem solver by passion, crafting engaging digital experiences.
      </p>

      <a
        href="#projects"
        className="text-[var(--green)] bg-[var(--navy)] border border-[var(--green)] transition-all duration-300 
          hover:shadow-[0_0_15px_var(--green)] hover:bg-[var(--green)] hover:text-[var(--navy)] 
          font-medium rounded-lg text-sm md:text-base px-5 py-3 opacity-0 animate-fade-in-up delay-550"
      >
        See all my works.
      </a>
    </section>
  );
}
