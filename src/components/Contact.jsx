import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.5);

  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-10 md:px-12 lg:px-20 xl:px-32"
    >
      <div
        className={`section-readable group border border-[var(--green)] w-full max-w-[530px] md:max-w-screen-sm px-4 sm:px-7 py-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_5px_var(--green)] 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        <h2
          className={`text-3xl sm:text-5xl font-bold text-[var(--green)] transition-opacity duration-700 
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Let&apos;s Connect
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="var(--green)"
            className="size-6 sm:size-8 inline-block ml-3 transition-transform duration-300 ease-in-out 
            group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
        </h2>

        <p
          className={`text-md sm:text-lg text-[var(--light-slate)] mt-[20px] sm:mt-[30px] mb-6 sm:mb-8 transition-opacity duration-700 delay-200 
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          I’m currently looking for new opportunities to grow as a web developer. I’m eager to learn, collaborate, and contribute to exciting projects.
          If you think I’d be a good fit or just want to connect, feel free to reach out—I’d love to chat!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-[30px] sm:mt-[50px] mb-2 items-center justify-center">
          <a
            href="mailto:info@jnmrtnz.com"
            className="text-[var(--green)] border border-[var(--green)] px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-[var(--white)] 
            hover:border-[var(--white)] hover:text-[var(--navy)] transition-all duration-300"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/joan-mart%C3%ADnez-744477136/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--green)] border border-[var(--green)] px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-[var(--white)] 
            hover:border-[var(--white)] hover:text-[var(--navy)] transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
