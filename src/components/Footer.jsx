import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation(0.5);

  return (
    <footer
      ref={ref}
      className={`relative text-[var(--light-slate)] py-8 sm:py-10 mt-10 flex flex-col items-center text-center transition-all duration-500 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      <div className="flex space-x-4 sm:space-x-6 mb-4">
        {[{ icon: FaGithub, link: "https://github.com/joanmrtnz" },
        { icon: FaLinkedin, link: "https://www.linkedin.com/in/joan-mart%C3%ADnez-744477136/" },
        { icon: FaXTwitter, link: "https://x.com/jnmrtnzdev" }].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative border border-[var(--green)] p-2 sm:p-3 rounded-lg  focus:outline-none
            after:absolute after:left-2 after:right-2 after:-bottom-2 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[var(--green)] hover:after:scale-x-100 focus-visible:after:scale-x-100"
          >
            <item.icon className="text-xl sm:text-2xl" />
          </a>
        ))}
      </div>
     
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed sm:absolute bottom-6 sm:top-1/2 right-4 sm:right-6 transform sm:-translate-y-1/2 px-3 py-2 sm:px-4 sm:py-3 border border-[var(--green)] rounded-lg 
        text-[var(--slate)] font-medium focus:outline-none flex items-center gap-2
        after:absolute after:left-2 after:right-2 after:-bottom-2 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[var(--green)] hover:after:scale-x-100 focus-visible:after:scale-x-100"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </footer>
  );
}
