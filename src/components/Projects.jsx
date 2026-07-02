import projectsData from "../data/projectsData.json";
import ProjectCard from "./ProjectCard";
import VoidProjectCard from "./VoidProjectCard";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      ref={ref}
      id="projects"
      className="flex w-full items-center justify-center px-0 m-auto"
    >
      <div className="section-readable w-full max-w-[980px] text-center p-6 sm:p-8 md:p-10">
        <h2
          className={`font-mono text-left text-3xl sm:text-4xl font-bold text-[var(--green)] transition-opacity duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Projects
        </h2>

        <div className="mx-0 text-md text-[var(--slate)] grid gap-y-14 sm:gap-y-20 p-0 mt-6">
          {projectsData.map((project, index) => 
            project.name?.includes("Coming soon") ? (
              <VoidProjectCard key={index} project={project}/>
            ) : (
              <ProjectCard key={index} project={project}/>
            )
          )}
        </div>
      </div>
    </section>
  );
}
