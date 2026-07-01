import { FaGithub } from "react-icons/fa";

export default function ProjectText({ project }) {
  return (
    <div name="project-text" className="self-start flex flex-col">
      <div className="flex flex-wrap-reverse items-center justify-between gap-3">

        <h2 className="flex items-center text-right text-lg sm:text-2xl font-bold text-[var(--text-color)] transition-opacity duration-700 hover:underline focus-visible:underline focus:outline-none">
          <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a>
        </h2>

        <a
          href={project.gitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 border-b border-dashed px-1 py-1.5 text-xs font-medium text-[var(--slate)] hover:text-white"
        >
          <FaGithub className="h-4 w-4" aria-hidden="true" />
          <span>View on GitHub</span>
        </a>
      </div>
 
      <p className="mt-6 mb-6 text-md sm:text-md text-[var(--slate)] transition-opacity duration-700 delay-200">
        <span dangerouslySetInnerHTML={{ __html: project.description }}></span>
      </p> 

      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
        {project.technologies.map((tech) => (
          <li key={tech} className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-[var(--tech-pill-surface)] px-3 py-1 text-xs font-medium leading-5 text-[var(--green)]">
              {tech}
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}
