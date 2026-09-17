
export default function ExperienceCard({ experience }) {

    return (
        <div className="relative mb-[3rem] border-b border-[var(--section-outline)] pb-[3rem] last:mb-0 last:border-b-0 last:pb-0">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3
                        className="text-xl sm:text-2xl text-[var(--lightest-slate)]"
                    >
                        {experience.position} - [{experience.company}]
                    </h3>
                    <p
                        className="text-sm text-[var(--light-slate)]"
                    >
                        {experience.date.start} - {experience.date.end || "Present"}
                    </p>
                </div>

                <a href="#home" className="flex h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-[var(--experience-logo-border)] sm:h-20 sm:w-20 md:h-24 md:w-24">
                    <img
                        src={experience.imagePath}
                        alt={`${experience.company} logo`}
                        className="h-full w-full opacity-80 object-cover transition-all duration-300"
                    />
                </a>
            </div>

            <ol className="mt-6 space-y-4 text-md text-[var(--slate)] relative pl-5 before:absolute before:left-[1.3rem] before:top-2 before:h-[calc(100%-0.5rem)] before:w-[2px] before:bg-[var(--dark-slate)]">
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
