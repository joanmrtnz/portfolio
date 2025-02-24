import ProjectIcon from "./ProjectIcon";

export default function ProjectText({ project }) {
    return (
      <div name="project-text" className="self-start flex flex-col">
          <h2 className="text-2xl font-bold text-white transition-opacity duration-700 group-hover:underline group-hover:text-[var(--green)]"> 
            {project.name}
            <ProjectIcon />
          </h2>
        <p className="mt-4 mb-6 text-lg text-[var(--light-slate)] transition-opacity duration-700 delay-200">
          {project.description}
        </p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
          {project.technologies.map((tech) => (
            <li key={tech} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }