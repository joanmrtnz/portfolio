import ProjectImage from "./ProjectImage";
import ProjectText from "./ProjectText";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function ProjectCard({ project }) {
  const { ref, isVisible } = useScrollAnimation(0.7);
  const isRight = project.orientation === "right";

  return (
    <div
      ref={ref}
      className={`mb-[80px] m-auto text-left relative transition-all duration-700 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-full backdrop-blur-lg bg-[var(--white)]/5 rounded-xl p-6 shadow-lg group">
        <div className={`mx-auto grid gap-[50px] mt-3 ${isRight ? "grid-cols-[3fr_2fr]" : "grid-cols-[2fr_3fr]"}`}>
          {isRight ? (
            <>
              <ProjectText project={project} />
              <ProjectImage imagePath={project.imagePath} />
            </>
          ) : (
            <>
              <ProjectImage imagePath={project.imagePath} />
              <ProjectText project={project} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
