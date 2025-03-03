import projectsData from "../data/projectsData.json";
import ProjectCard from "./ProjectCard";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      ref={ref}
      id="projects"
      className="mt-[100px] bg-[var(--navy)] min-h-screen flex items-center justify-center px-4 sm:px-6"
    >
      <div className="max-w-[800px] w-full text-center bg-[var(--navy)] p-0 sm:p-6">
        <h2
          className={`ml-4 sm:ml-8 mb-7 text-left text-3xl sm:text-4xl font-bold text-[var(--green)] transition-opacity duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          _Projects
        </h2>

        <div className="ml-1 sm:ml-3 text-md text-[var(--slate)] grid gap-x-3 gap-y-5 p-0 sm:p-4 pl-3 sm:pl-5 mt-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
