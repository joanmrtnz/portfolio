export default function Hero() { 
  return (
    <section
      id="home"
      className="relative z-10 w-full pt-40 md:pt-34 flex flex-col items-center justify-center text-left px-0 m-auto"
    >
      <div className="hero-readable w-full max-w-[980px] p-6 sm:p-8 md:p-10">
        <p className="type-ui text-[var(--green)] mb-2 md:mb-5">
          Hello, I&apos;m
        </p>

        <h1 className="type-display hero-name mb-5 md:mb-7">
          Joan Martinez.
        </h1>

        <p className="type-statement text-[var(--slate)]">
            I turn ideas into <br />
            <span className="text-[var(--green)]">&gt; shipped products</span>
        </p>

        <p className="type-body mt-5 text-[var(--slate)] mb-9 md:mb-12">
          Full-stack Product Engineer focused on web, mobile, backend, infrastructure, and clear product delivery.
        </p>

        <div className="mb-2">
          <a
            href="#projects"
            className="text-[var(--green)] border border-[var(--green)] px-5 py-3 rounded-lg type-ui underline-offset-4 transition-all duration-300 hover:underline focus-visible:underline focus:outline-none"
          >
            View product work.
          </a>
        </div>
      </div>
    </section>
  );
}
