import ProjectImage from "./ProjectImage";
import ProjectText from "./ProjectText";
import { useState, useEffect } from "react";


export default function ProjectCard({ project }) {
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
      className="w-full text-left relative pb-10 border-b border-[var(--section-outline)]"
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
