import useScrollAnimation from "../hooks/useScrollAnimation";

export default function ExperienceCard({ experience }) {
    const { ref, isVisible } = useScrollAnimation(0.7);

    return (
        <div ref={ref} className={`relative mb-[3rem] border-b border-[var(--section-outline)] pb-[3rem] last:mb-0 last:border-b-0 last:pb-0 transition-opacity duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div className="flex items-start justify-between gap-4">
                <div>
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
                </div>

                <a href="#home" className="shrink-0">
                    <img
                        src={experience.imagePath}
                        alt={`${experience.company} logo`}
                        className="w-16 sm:w-20 md:w-24 max-h-20 rounded-lg opacity-80 object-contain transition-all duration-300"
                    />
                </a>
            </div>

            <ol className={`mt-6 space-y-4 text-md text-[var(--slate)] relative pl-5 transition-opacity duration-700 delay-650 before:absolute before:left-[1.3rem] before:top-2 before:h-[calc(100%-0.5rem)] before:w-[2px] before:bg-[var(--dark-slate)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                {experience.tasks.map((item, index) => (
                    <li key={index} className="relative flex items-start pl-5">
                        <div className="absolute top-2 left-[-0.25rem] w-3 h-3 bg-[var(--green)] rounded-full"></div>
                        <span dangerouslySetInnerHTML={{ __html: item }}></span>
                    </li>
                ))}
            </ol>
        </div>
    );
}
