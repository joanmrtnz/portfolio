import useScrollAnimation from "../hooks/useScrollAnimation";
import ExperienceCard from "./ExperienceCard";
import experienceData from "../data/experienceData.json";


export default function Experience() {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section
      ref={ref}
      id="experience"
      className="flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32"
    >
      <div className="section-readable w-full max-w-[980px] text-center p-6 sm:p-8 md:p-10">

        <h2
          className={`font-mono text-left text-3xl sm:text-4xl font-bold text-[var(--green)] transition-opacity duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Experience
        </h2>

        <div className="relative mt-8 text-left">
          {experienceData.map((experience, index) => 
                <ExperienceCard key={index} experience={experience}/>
          )}
        </div>
      </div>
    </section>
  );
}
