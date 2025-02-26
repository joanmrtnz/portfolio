import projectsData from "../data/projectsData.json";
import ProjectCard from "./ProjectCard";
import useScrollAnimation from "../hooks/useScrollAnimation";


export default function Projects() {
   const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
    ref={ref}
      id="projects"
      className="mt-[100px] bg-[var(--navy)] min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-[800px] w-full text-center bg-[var(--navy)] p-6">
        <h2 className={`ml-8 mb-7 text-left text-4xl font-bold text-[var(--green)] transition-opacity duration-700  delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >  _Projects
        </h2>

        <div className="ml-3 text-md text-[var(--slate)] grid gap-x-3 gap-y-3 p-6 pl-5 mt-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
