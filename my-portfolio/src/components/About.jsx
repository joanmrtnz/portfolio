import useScrollAnimation from "../hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.5);

  return (
    <section
      ref={ref}
      id="about"
      className="mt-[100px] px-20 m-auto items-start justify-center text-left bg-[var(--navy)]"
    >
      <h2 className={`text-4xl font-bold text-[var(--green)] transition-opacity duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      _About me
      </h2>
      
      <div className="mx-auto grid grid-cols-[3fr_2fr] gap-[50px] mt-6">
        <div name="about-text" className="text-left self-start flex flex-col">
          <p className={`mt-4 mb-6 text-lg text-[var(--light-slate)] transition-opacity duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            I'm a Junior Developer specialized in web technologies. My career started out of my passion for solving problems through code,
            and since then I have been exploring modern frameworks, software architectures and agile methodologies to create quality digital experiences.
          </p>
          <p className={`mt-12 mb-2 text-lg text-[var(--light-slate)] transition-opacity duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ol className={`list-disc text-md text-[var(--light-slate)] grid grid-cols-[repeat(2,minmax(140px,200px))] gap-x-3 gap-y-2 p-0 pl-5 mt-5 overflow-hidden transition-opacity duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Eleventy</li>
            <li>Node.js</li>
            <li>Tailwind</li>
          </ol>
        </div>

        <div name="about-image" className="flex items-stretch">
          <img
            src="/about_me_2.jpg"
            className={`w-full h-full object-cover rounded-lg filter grayscale hover:transition-all hover:duration-100 hover:grayscale-0 hover:scale-102 transition-opacity duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}/>
        </div>
      </div>
    </section>
  );
}
