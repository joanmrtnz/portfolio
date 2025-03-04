import useScrollAnimation from "../hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.5);

  return (
    <section
      ref={ref}
      id="about"
      className="mt-[100px] px-6 sm:px-12 md:px-20 m-auto text-left bg-[var(--navy)]"
    >


      <div className="mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 md:gap-[50px] mt-6 items-start md:items-center">

        <div className="text-left flex flex-col">
          <h2 className={`font-mono mb-6 text-3xl font-bold text-[var(--green)] transition-opacity duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            _About me
          </h2>
          <p className={`mt-4 mb-7 text-lg text-[var(--light-slate)] transition-opacity duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            I'm a Junior Developer specialized in web technologies. My career started out of my passion for solving problems through code,
            and since then I have been exploring modern frameworks, software architectures and agile methodologies to create quality digital experiences.
          </p>

          <p className={`mt-8 mb-2 text-lg text-[var(--light-slate)] transition-opacity duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Here are a few technologies I’ve been working with recently:
          </p>

          <div className="sm:max-w-[250px] mx-auto md:max-w-none md:mx-0">
            <ol className={`list-disc text-md text-[var(--light-slate)] grid grid-cols-2 gap-x-6 gap-y-3 pl-6 mt-5 transition-opacity duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Eleventy</li>
              <li>Node.js</li>
              <li>Tailwind</li>
            </ol>
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-6 md:mt-0">
          <a href="https://www.linkedin.com"><img
            src="/about_me_2.jpg"
            className={`w-full max-w-[250px] md:max-w-none h-auto object-cover rounded-lg filter grayscale-90  hover:grayscale-30 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          /></a>
        </div>
      </div>
    </section>
  );
}
