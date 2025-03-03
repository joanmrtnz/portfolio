export default function ProjectImage({ imagePath }) {
  return (
    <div className="flex justify-center md:justify-start">
      <img
        src={imagePath}
        className="w-full sm:max-w-[350px] md:max-w-none h-auto object-cover rounded-lg md:grayscale group-hover:grayscale-0 transition-opacity duration-700 delay-200"
        alt="Project"
      />
    </div>
  );
}
