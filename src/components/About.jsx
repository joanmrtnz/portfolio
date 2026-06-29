import useScrollAnimation from "../hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen lg:min-h-[80vh] flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32"
    >


      <div className="section-readable max-w-[700px] md:max-w-screen-md w-full text-center p-10">

        <div className="text-left flex flex-col">
          <h2 className={`font-mono mb-6 text-left text-3xl sm:text-4xl font-bold text-[var(--green)] transition-opacity duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}>
            About me
          </h2>
          <p className={`mt-4 mb-7 text-lg text-[var(--light-slate)] transition-opacity duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            I&apos;m a Developer specialized in web technologies. My career started out of my passion for <strong>solving problems through code</strong>, and since then I have been exploring modern frameworks, software architectures and agile methodologies to create <strong>quality digital experiences</strong>.
          </p>

          <p className={`mt-4 mb-7 text-lg text-[var(--light-slate)] transition-opacity duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Outside of coding, I enjoy <strong>Rubik’s cubes</strong>, <strong>drawing</strong>, and <strong>playing bass guitar</strong>. I’ve also competed in <strong>weightlifting</strong> (regional champion), <strong>athletics</strong>, and <strong>judo</strong>, which developed my <strong>discipline</strong>, <strong>resilience</strong>, and <strong>focus</strong>—traits I apply to my work daily.
          </p>

          <p className={`mt-4 mb-7 text-lg text-[var(--light-slate)] transition-opacity duration-700 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            I know how to use <strong>AI tools</strong> like ChatGPT and GitHub Copilot to accelerate development, automate repetitive tasks, and enhance creativity. I’ve developed a solid understanding of how to craft <strong>effective prompts</strong> that improve code quality, boost productivity, and streamline workflows.
          </p>

          <p className={`mt-8 mb-2 text-lg text-[var(--light-slate)] transition-opacity duration-700 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Technologies I&apos;ve worked with recently include:
          </p>

          <div className="font-mono sm:max-w-[250px] mx-auto md:max-w-none md:mx-0">
            <ol className={`list-disc text-sm text-[var(--green)] grid grid-cols-2 gap-x-6 gap-y-3 pl-6 mt-5 transition-opacity duration-700 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Eleventy</li>
              <li>Node.js</li>
              <li>Tailwind</li>
              <li>AI tools</li>
              <li>Netlify</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
