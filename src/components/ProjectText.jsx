import ProjectIcon from "./ProjectIcon";

export default function ProjectText({ project }) {
  return (
    <div name="project-text" className="self-start flex flex-col">
      <h2 className="text-lg sm:text-2xl font-bold text-[var(--text-color)] transition-opacity duration-700 group-hover:underline group-hover:text-[var(--green)] flex items-center">
        {project.name}
        <ProjectIcon />
      </h2>
      <p className="mt-4 mb-6 text-md sm:text-lg text-[var(--light-slate)] transition-opacity duration-700 delay-200">
        <span dangerouslySetInnerHTML={{ __html: project.description }}></span>
      </p>
      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
        {project.technologies.map((tech) => (
          <li key={tech} className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--green)]">
              {tech}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
