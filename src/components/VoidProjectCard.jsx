
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
              <div className="flex justify-center md:justify-start mr-1">
                <p className="w-full min-w-[250px] md:min-w-[300px] max-w-full min-h-[80px] rounded-lg backdrop-blur-lg bg-[var(--white)]/8 animate-pulse"></p>
              </div>
              <div name="project-text" className="self-start flex flex-col">
                <h2 className="min-h-[20px] backdrop-blur-lg bg-[var(--white)]/8 rounded-xl transition-opacity duration-700  flex items-center animate-pulse">
                </h2>
                <p className="min-h-[10px] text-md text-[var(--slate)] rounded-xl mt-4 mb-6 ml-1 animate-pulse">
                  {project.name}
                </p>
                <ul className="mt-2 flex flex-wrap">
                  {[...Array(5)].map((_, index) => (
                    <li key={index} className="mr-1.5 mt-2">
                      <div className="min-h-[25px] backdrop-blur-lg bg-[var(--white)]/8 flex items-center rounded-full px-3 py-1 leading-5 animate-pulse"></div>
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
                <p className="min-h-[80px] backdrop-blur-lg bg-[var(--white)]/8 rounded-xl mt-4 mb-6 animate-pulse">
                </p>
                <p className="min-h-[10px] text-md text-[var(--slate)] rounded-xl mt-4 mb-6 ml-1 animate-pulse">
                  {project.name}
                </p>
                <ul className="mt-2 flex flex-wrap">
                  {[...Array(5)].map((_, index) => (
                    <li key={index} className="mr-1.5 mt-2">
                      <div className="min-h-[25px] backdrop-blur-lg bg-[var(--white)]/8 flex items-center rounded-full px-3 py-1 leading-5 animate-pulse"></div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center md:justify-start mb-3 mr-1">
                <p className="backdrop-blur-lg bg-[var(--white)]/8 min-w-[250px] min-h-[200px] sm:max-w-[350px] md:max-w-none rounded-lg"></p>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
