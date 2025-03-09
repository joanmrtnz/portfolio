import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation(0.5);

  return (
    <section
      ref={ref}
      id="experience"
      className="mt-[50px] bg-[var(--navy)] min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-[650px] w-full text-center bg-[var(--navy)] p-6">

        <h2
          className={`font-mono text-left text-3xl sm:text-4xl font-bold text-[var(--green)] transition-opacity duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Experience
        </h2>

        <div className="relative mt-8">

          <div className={`relative flex items-start transition-opacity duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <a href="#home">
              <img
                src="/opcl_logo.png"
                alt="website logo"
                className="md:w-[100px] w-[200px] opacity-80 object-contain transition-all duration-300"
              />
            </a>

            <div className="pl-5 text-left">
              <h3
                className={`text-xl sm:text-2xl text-[var(--lightest-slate)] transition-opacity duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              >
                Web Developer - [Openers & Closers]
              </h3>
              <p
                className={`text-sm text-[var(--light-slate)] transition-opacity duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              >
                2024 - Present
              </p>

              <ol className={`mt-4 space-y-4 text-md text-[var(--slate)] relative transition-opacity duration-700 delay-650 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                <div className="absolute left-1 top-2 w-[2px] h-full bg-[var(--dark-slate)]"></div>

                {[
                    "Design and write <strong>unit and integration tests</strong>, ensuring optimal <strong>code coverage</strong> and reducing errors before deployment.",
                    "Implement secure authentication using <strong>OAuth 2.0</strong> and <strong>JWT</strong>, strengthening the protection of users' sensitive data.",
                    "Develop <strong>serverless solutions</strong> on <strong>AWS Lambda</strong>, optimizing infrastructure costs and improving system scalability.",
                    "Write clear and structured <strong>technical documentation</strong>, facilitating the integration of other teams with our <strong>APIs</strong> and services.",
                    "Automate processes with <strong>CI/CD pipelines</strong>, optimizing testing and deployment times, reducing manual errors, and improving development efficiency.",
                ].map((item, index) => (
                  <li key={index} className="relative flex items-start pl-6">
                    <div className="absolute top-2 left-0 w-3 h-3 bg-[var(--green)] rounded-full"></div>
                    <span className="ml-4" dangerouslySetInnerHTML={{ __html: item }}></span>
                  </li>
                ))}
              </ol>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
