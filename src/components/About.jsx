import useScrollAnimation from "../hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen lg:min-h-[80vh] flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32"
    >


      <div className="section-readable w-full max-w-[980px] text-center p-6 sm:p-8 md:p-10">

        <div className="text-left flex flex-col">
          <h2 className={`font-mono mb-6 text-left text-3xl sm:text-4xl font-bold text-[var(--green)] transition-opacity duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}>
            About me
          </h2>
          <p className={`mt-0 sm:mt-4 mb-7 text-lg text-[var(--light-slate)] transition-opacity duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            I&apos;m a <strong>Full-stack Product Engineer</strong> who builds complete digital products across <strong>web</strong>, <strong>mobile</strong>, <strong>backend</strong>, and <strong>deployment</strong>. I like working close to the product: understanding the problem, shaping the solution, communicating tradeoffs, and shipping reliable software that people can actually use.
          </p>

          <p className={`mt-4 mb-7 text-lg text-[var(--light-slate)] transition-opacity duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Outside of coding, I enjoy <strong>Rubik’s cubes</strong>, <strong>drawing</strong>, and <strong>playing bass guitar</strong>. I’ve also competed in <strong>weightlifting</strong> (regional champion), <strong>athletics</strong>, and <strong>judo</strong>, which developed my <strong>discipline</strong>, <strong>resilience</strong>, and <strong>focus</strong>—traits I apply to my work daily.
          </p>

          <p className={`mt-4 mb-7 text-lg text-[var(--light-slate)] transition-opacity duration-700 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            I use <strong>AI tools</strong> to accelerate development, explore implementation options, improve code quality, and reduce repetitive work while staying focused on <strong>product goals</strong>.
          </p>

          <p className={`mt-8 mb-2 text-lg text-[var(--light-slate)] transition-opacity duration-700 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Technologies I&apos;ve worked with recently include:
          </p>

          <div className="font-mono sm:max-w-[250px] mx-auto md:max-w-none md:mx-0">
            <ol className={`list-disc text-base sm:text-lg text-[var(--tech-list-color)] grid grid-cols-2 gap-x-6 gap-y-3 pl-6 mt-5 transition-opacity duration-700 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <li>TypeScript</li>
              <li>Angular</li>
              <li>Symfony</li>
              <li>React / Next.js</li>
              <li>React Native / Expo</li>
              <li>Node.js / NestJS</li>
              <li>PostgreSQL / Prisma</li>
              <li>Docker / Caddy</li>
              <li>Turborepo / pnpm</li>
              <li>AI-assisted development</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
