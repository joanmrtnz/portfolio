export default function ProjectImage({ project }) {
  return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex justify-center md:justify-start">
        <div className="flex overflow-hidden rounded-md mb-3"> 
          <img
            src={project.imagePath}
            className="opacity-90 w-full sm:max-w-[350px] md:max-w-none h-auto object-cover rounded-lg  group-hover:scale-103 transform transition-transform duration-300"
            alt={`Preview of the project ${project.name}`}
          />
        </div>
      </a>
  );
}