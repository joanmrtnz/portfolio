import ExperienceCard from "./ExperienceCard";
import experienceData from "../data/experienceData.json";


export default function Experience() {

  return (
    <section
      id="experience"
      className="flex w-full items-center justify-center px-0 m-auto"
    >
      <div className="section-readable w-full max-w-[980px] text-center p-6 sm:p-8 md:p-10">

        <h2
          className="font-mono text-left text-3xl sm:text-4xl font-bold text-[var(--green)]"
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
