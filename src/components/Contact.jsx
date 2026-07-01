import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.5);

  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32"
    >
      <div
        className={`section-readable group border border-[var(--green)] w-full max-w-[980px] min-h-[360px] sm:min-h-[420px] md:min-h-[480px] p-6 sm:p-8 md:p-10 flex flex-col justify-center transition-all duration-300 hover:shadow-[0_0_20px_5px_var(--green)] 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        <h2
          className={`text-3xl sm:text-5xl font-bold text-[var(--green)] transition-opacity duration-700 
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Let&apos;s Connect_
        </h2>

        <p
          className={`text-md sm:text-lg text-[var(--light-slate)] mt-[20px] sm:mt-[30px] mb-6 sm:mb-8 transition-opacity duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          I’m currently looking for new opportunities to grow as a web developer. I’m eager to learn, collaborate, and contribute to exciting projects.
          If you think I’d be a good fit or just want to connect, feel free to reach out—I’d love to chat!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-[30px] sm:mt-[50px] mb-2 items-center justify-center">
          <a
            href="mailto:info@jnmrtnz.com"
            className="text-[var(--green)] border border-[var(--green)] px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium underline-offset-4 transition-all duration-300 hover:underline focus-visible:underline focus:outline-none"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/joan-mart%C3%ADnez-744477136/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--green)] border border-[var(--green)] px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium underline-offset-4 transition-all duration-300 hover:underline focus-visible:underline focus:outline-none"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
