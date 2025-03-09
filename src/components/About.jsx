import useScrollAnimation from "../hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.5);

  return (
    <section
      ref={ref}
      id="about"
      className="md:mt-[30px] bg-[var(--navy)] min-h-screen flex items-center justify-center px-4"
    >


      <div className="max-w-[700px] w-full text-center bg-[var(--navy)] p-6">

        <div className="text-left flex flex-col">
          <h2 className={`font-mono mb-6 text-left text-3xl sm:text-4xl font-bold text-[var(--green)] transition-opacity duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}>
            About me
          </h2>
          <p className={`mt-4 mb-7 text-lg text-[var(--light-slate)] transition-opacity duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            I'm a <strong>Junior Developer</strong> specialized in <strong>web technologies</strong>. My career started out of my passion for <strong>solving problems through code</strong>,
            and since then I have been exploring <strong>modern frameworks</strong>, <strong>software architectures</strong> and <strong>agile methodologies</strong> to create <strong>quality digital experiences</strong>.
          </p>

          <p className={`mt-8 mb-2 text-lg text-[var(--light-slate)] transition-opacity duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Here are a few technologies I’ve been working with recently:
          </p>

          <div className="sm:max-w-[250px] mx-auto md:max-w-none md:mx-0">
            <ol className={`list-disc text-md text-[var(--white)] grid grid-cols-2 gap-x-6 gap-y-3 pl-6 mt-5 transition-opacity duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Eleventy</li>
              <li>Node.js</li>
              <li>Tailwind</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
