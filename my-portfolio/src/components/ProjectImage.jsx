// ProjectImage.jsx
export default function ProjectImage({ imagePath }) {
    return (
      <div className="flex items-stretch">
        <img
          src={imagePath}
          className="w-full h-full object-cover rounded-lg filter grayscale group-hover:grayscale-0 transition-opacity duration-700 delay-200"
          alt="Project"
        />
      </div>
    );
  }
  