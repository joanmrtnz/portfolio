import projectsData from "../data/projectsData.json";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mt-[100px] bg-[var(--navy)] min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-[1000px] w-full text-center bg-[var(--navy)] p-6">
        <h2 className="text-left text-4xl font-bold text-[var(--green)]">
          _Projects
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
