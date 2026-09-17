
import { useState, useEffect } from "react";


export default function VoidProjectCard({ project }) {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);


  return (
    <div
      className="w-full mb-0 sm:mb-[80px] m-auto text-center relative">
      <div className="w-full rounded-xl p-4 sm:p-4 group">
        <div className="mx-auto grid gap-[15px] md:gap-[50px] mt-0 md:mt-3 grid-cols-1 md:grid-cols-[3fr_2fr]">
          {isMobile ? (
            <>
              <div className="w-full mr-1">
                <p className="aspect-[5/4] w-full min-h-[180px] rounded-lg backdrop-blur-lg bg-[var(--white)]/8 animate-pulse"></p>
              </div>
              <div name="project-text" className="self-start flex flex-col">
                <h2 className="min-h-[20px] rounded-xl p-2 type-title flex items-center animate-pulse">
                 {project.name}
                </h2>
                <p className="min-h-[96px] type-body text-[var(--slate)] rounded-xl ml-1 backdrop-blur-lg bg-[var(--white)]/8 animate-pulse"></p>
                <ul className="mt-2 flex flex-wrap text-left">
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
                <h2 className="min-h-[30px] backdrop-blur-lg bg-[var(--white)]/8 rounded-xl  flex items-center animate-pulse">
                </h2>
                <p className="min-h-[120px] backdrop-blur-lg bg-[var(--white)]/8 rounded-xl mt-6 mb-6 animate-pulse">
                </p>
                <p className="min-h-[20px] type-body text-[var(--slate)] rounded-xl mt-4 mb-6 ml-1 animate-pulse">
                  {project.name}
                </p>
                <ul className="mt-2 flex flex-wrap text-left">
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
