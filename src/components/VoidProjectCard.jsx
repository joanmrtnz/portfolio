
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useState, useEffect } from "react";


export default function VoidProjectCard({ project }) {
  const { ref, isVisible } = useScrollAnimation(0.7);
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
      className={`w-full mb-[50px] sm:mb-[80px] m-auto text-left relative transition-all duration-700 ease-in-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="w-full rounded-xl p-4 sm:p-4 group">
        <div className="mx-auto grid gap-[15px] md:gap-[50px] mt-3 grid-cols-1 md:grid-cols-[3fr_2fr]">
          {isMobile ? (
            <>
              <div className="w-full mr-1">
                <p className="aspect-[5/4] w-full min-h-[220px] rounded-lg backdrop-blur-lg bg-[var(--white)]/8 animate-pulse"></p>
              </div>
              <div name="project-text" className="self-start flex flex-col">
                <h2 className="min-h-[20px] backdrop-blur-lg bg-[var(--white)]/8 rounded-xl transition-opacity duration-700  p-2 flex items-center animate-pulse">
                 {project.name}
                </h2>
                <p className="min-h-[96px] text-md text-[var(--slate)] rounded-xl mt-6 mb-6 ml-1 backdrop-blur-lg bg-[var(--white)]/8 animate-pulse"></p>
                <ul className="mt-2 flex flex-wrap">
                  {[...Array(5)].map((_, index) => (
                    <li key={index} className="mr-1.5 mt-2">
                      <div className={`h-[28px] backdrop-blur-lg bg-[var(--white)]/8 rounded-full animate-pulse ${index % 3 === 0 ? "w-20" : index % 3 === 1 ? "w-24" : "w-28"}`}></div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <>
              <div name="project-text" className="self-start flex flex-col">
                <h2 className="min-h-[30px] backdrop-blur-lg bg-[var(--white)]/8 rounded-xl transition-opacity duration-700  flex items-center animate-pulse">
                </h2>
                <p className="min-h-[120px] backdrop-blur-lg bg-[var(--white)]/8 rounded-xl mt-6 mb-6 animate-pulse">
                </p>
                <p className="min-h-[20px] text-md text-[var(--slate)] rounded-xl mt-4 mb-6 ml-1 animate-pulse">
                  {project.name}
                </p>
                <ul className="mt-2 flex flex-wrap">
                  {[...Array(5)].map((_, index) => (
                    <li key={index} className="mr-1.5 mt-2">
                      <div className={`h-[28px] backdrop-blur-lg bg-[var(--white)]/8 rounded-full animate-pulse ${index % 3 === 0 ? "w-20" : index % 3 === 1 ? "w-24" : "w-28"}`}></div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full mb-3 mr-1">
                <p className="aspect-[5/4] w-full min-h-[280px] backdrop-blur-lg bg-[var(--white)]/8 rounded-lg animate-pulse"></p>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
