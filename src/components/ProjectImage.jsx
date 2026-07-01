export default function ProjectImage({ project }) {
  return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block w-full">
        <div className="aspect-[5/4] w-full overflow-hidden rounded-lg mb-3"> 
          <img
            src={project.imagePath}
            className="h-full w-full object-cover opacity-90 transform transition-transform duration-300"
            alt={`Preview of the project ${project.name}`}
            loading="lazy"
            decoding="async"
          />
        </div>
      </a>
  );
}
