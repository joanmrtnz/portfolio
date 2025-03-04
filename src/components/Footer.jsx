import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation(0.5);

  return (
    <footer
      ref={ref}
      className={`relative bg-[var(--navy)] text-[var(--light-slate)] py-8 sm:py-10 mt-10 flex flex-col items-center text-center transition-all duration-500 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      <div className="flex space-x-4 sm:space-x-6 mb-4">
        {[{ icon: FaGithub, link: "https://github.com/tu-usuario" },
        { icon: FaLinkedin, link: "https://www.linkedin.com/in/tu-usuario" },
        { icon: FaTwitter, link: "https://twitter.com/tu-usuario" }].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--green)] p-2 sm:p-3 rounded-lg transition-all duration-300 
            hover:shadow-[0_0_15px_var(--green)] hover:bg-[var(--green)] hover:text-[var(--navy)]"
          >
            <item.icon className="text-xl sm:text-2xl" />
          </a>
        ))}
      </div>
     
      <p className="text-md text-[var(--slate)] mt-4 px-4 sm:px-0">
        Built with React, Vite, and Tailwind CSS. Deployed with Vercel.
      </p>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed sm:absolute bottom-6 sm:top-1/2 right-4 sm:right-6 transform sm:-translate-y-1/2 px-3 py-2 sm:px-4 sm:py-3 border border-[var(--dark-slate)] rounded-lg 
        text-[var(--slate)] font-medium transition-all duration-300 hover:bg-[var(--green)] hover:text-[var(--navy)] flex items-center gap-2"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </footer>
  );
}
