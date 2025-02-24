import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation(0.7);

  return (
    <section
      ref={ref}
      id="experience"
      className="mt-[100px] bg-[var(--navy)] min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-[650px] w-full text-center bg-[var(--navy)] p-6">
        <h2
          className={`text-left text-4xl font-bold text-[var(--green)] transition-opacity duration-700  delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          _Experience
        </h2>
        <div className="bg-[var(--navy)] p-6 rounded-lg text-left">
          <div className="relative">
              {/* Línea vertical */}
            <div className={`absolute left-[-25px] top-0 h-full w-[1px] bg-[var(--dark-slate)] transition-opacity duration-700 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}></div>
            <h3
              className={`mt-6 mb-3 text-2xl text-[var(--lightest-slate)] transition-opacity duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Web Developer - [Openers & Closers]
            </h3>
            <p
              className={`mt-1 mb-4 text-sm text-[var(--light-slate)] transition-opacity duration-700 delay-450 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              2024 - Present
            </p>
            <ol
              className={`ml-3 list-disc text-md text-[var(--slate)] grid gap-x-3 gap-y-3 p-0 pl-5 mt-5 overflow-hidden transition-opacity duration-700 delay-550 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <li>
                  Design and write unit and integration tests, ensuring optimal code coverage and reducing errors before deployment.</li>
              <li>Implement secure authentication using OAuth 2.0 and JWT, strengthening the protection of users' sensitive data.</li>
              <li>Develop serverless solutions on AWS Lambda, optimizing infrastructure costs and improving system scalability.</li>
              <li>Write clear and structured technical documentation, facilitating the integration of other teams with our APIs and services.</li>
              <li>Automate processes with CI/CD pipelines, optimizing testing and deployment times, reducing manual errors, and improving development efficiency.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
