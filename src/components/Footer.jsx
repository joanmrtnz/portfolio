import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {

  return (
    <footer
      className="relative text-[var(--light-slate)] py-8 sm:py-10 mt-10 flex flex-col items-center text-center"
    >
      <div className="flex items-center gap-4 sm:gap-6">
        {[{ icon: FaGithub, link: "https://github.com/joanmrtnz" },
        { icon: FaLinkedin, link: "https://www.linkedin.com/in/joan-mart%C3%ADnez-744477136/" },
        { icon: FaXTwitter, link: "https://x.com/jnmrtnzdev" }].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-[50px] w-[50px] items-center justify-center border border-[var(--green)] rounded-lg focus:outline-none
            after:absolute after:left-2 after:right-2 after:-bottom-2 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[var(--green)] hover:after:scale-x-100 focus-visible:after:scale-x-100"
          >
            <item.icon className="text-xl sm:text-2xl" />
          </a>
        ))}

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          className="relative sm:absolute sm:top-1/2 sm:right-6 sm:-translate-y-1/2 h-[50px] w-[50px] border border-[var(--green)] rounded-lg 
          text-[var(--slate)] font-medium focus:outline-none flex items-center justify-center
          after:absolute after:left-2 after:right-2 after:-bottom-2 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[var(--green)] hover:after:scale-x-100 focus-visible:after:scale-x-100"
        >
          <FiArrowUp className="text-xl sm:text-2xl" strokeWidth={1.5} />
        </button>
      </div>
    </footer>
  );
}
