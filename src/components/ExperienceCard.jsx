import useScrollAnimation from "../hooks/useScrollAnimation";

export default function ExperienceCard({ experience }) {
    const { ref, isVisible } = useScrollAnimation(0.7);

    return (
        <div ref={ref} className={`relative flex items-start mb-[3rem] transition-opacity duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <a>
            <img
            src={experience.imagePath}
            alt="website logo"
            className="block rounded-lg w-[150px] h-auto sm:w-[70px] md:w-[70px] mt-[8px] opacity-80 object-cover transition-all duration-300"
            />
        </a>

        <div className="pl-5 text-left">
            <h3
            className={`text-xl sm:text-2xl text-[var(--lightest-slate)] transition-opacity duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
           {experience.position} - [{experience.company}]
            </h3>
            <p
            className={`text-sm text-[var(--light-slate)] transition-opacity duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
            {experience.date.start} - {experience.date.end || "Present"}
            </p>

            <ol className={`mt-4 space-y-4 text-md text-[var(--slate)] relative transition-opacity duration-700 delay-650 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div className="absolute left-1 top-2 w-[2px] h-full bg-[var(--dark-slate)]"></div>

            {experience.tasks.map((item, index) => (
                <li key={index} className="relative flex items-start pl-6">
                <div className="absolute top-2 left-0 w-3 h-3 bg-[var(--green)] rounded-full"></div>
                <span className="ml-4" dangerouslySetInnerHTML={{ __html: item }}></span>
                </li>
            ))}
            </ol>

        </div>
        </div>
    );
}
