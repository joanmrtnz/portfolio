export default function Hero() { 
  return (
    <section
      id="home"
      className="relative z-10 pt-40 md:pt-34 pb-30 md:pb-20 md:min-h-screen flex flex-col items-center justify-center text-left px-0 m-auto"
    >
      <div className="hero-readable w-full max-w-[980px] p-6 sm:p-8 md:p-10">
        <p className="font-mono text-lg md:text-xl text-[var(--green)] mb-3 md:mb-5 opacity-0 animate-fade-in-up delay-100">
          Hello, I&apos;m
        </p>

        <h1 className="text-4xl md:text-7xl text-[var(--lightest-slate)] font-bold mb-3 md:mb-5 opacity-0 animate-fade-in-up delay-200">
          Joan Martinez.
        </h1>

        <h1 className="text-3xl md:text-6xl text-[var(--slate)] font-bold mb-2 md:mb-3 opacity-0 animate-fade-in-up delay-300">
          I create digital solutions for a constantly evolving world.
        </h1>

        <p className="font-mono text-base md:text-lg mt-2 text-[var(--slate)] mb-9 md:mb-12 opacity-0 animate-fade-in-up delay-500">
        Modern Web Developer
        </p>

        <div className="mb-2 transition-all opacity-0 animate-fade-in-up delay-550">  
          <a
            href="#projects"
            className="text-[var(--green)] border border-[var(--green)] 
              hover:shadow-[0_0_15px_var(--green)] hover:bg-[var(--green)] hover:text-[var(--navy)]
              font-medium rounded-lg text-sm md:text-base px-5 py-3"
          >
            See all my works.
          </a>
        </div>
      </div>
    </section>
  );
}
