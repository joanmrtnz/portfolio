import ProjectImage from "./ProjectImage";
import ProjectText from "./ProjectText";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useState, useEffect } from "react";


export default function ProjectCard({ project }) {
  const { ref, isVisible } = useScrollAnimation(0.5);
  const isRight = project.orientation === "right";
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize(); 
    window.addEventListener("resize", checkScreenSize); 
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);


  return (
    <div
      ref={ref}
      className={`w-full text-left relative  border-b border-[var(--section-outline)] transition-all duration-700 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-full rounded-xl p-4 sm:p-4">
        <div
          className={`mx-auto grid gap-[30px] md:gap-[50px] mt-3 ${
            isRight ? "grid-cols-1 md:grid-cols-[3fr_2fr]" : "grid-cols-1 md:grid-cols-[2fr_3fr]"
          }`}
        >
          {isRight &&!isMobile ? (
            <>
              <ProjectText project={project} />
              <ProjectImage project={project} />
            </>
          ) : (
            <>
              <ProjectImage project={project} />
              <ProjectText project={project} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
