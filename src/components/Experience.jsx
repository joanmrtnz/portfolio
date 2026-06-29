import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation(0.5);

  return (
    <section
      ref={ref}
      id="experience"
      className="min-h-screen lg:min-h-[80vh] flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32"
    >
      <div className="section-readable max-w-[650px] md:max-w-screen-md w-full text-center p-6">

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
                  "Created dynamic front-end views with <strong>React.js</strong>, integrating components and managing UI state with <strong>Hooks</strong>.",
                  "Built responsive and accessible UIs with <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>Tailwind CSS</strong> following a <strong>mobile-first</strong> approach.",
                  "Integrated the front-end with <strong>RESTful APIs</strong>, handling <strong>asynchronous data fetching</strong> and error states.",
                  "Designed and developed <strong>unit and integration tests</strong>, ensuring high <strong>code coverage</strong> and reducing production errors.",
                  "Collaborated in an <strong>Agile</strong> team (<strong>Scrum/Kanban</strong>): daily stand-ups, sprint planning, and retrospectives."
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
