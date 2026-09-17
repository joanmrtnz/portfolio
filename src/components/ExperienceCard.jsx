import "./ExperienceCard.css";

export default function ExperienceCard({ experience }) {

    return (
        <div className="relative mb-[3rem] border-b border-[var(--section-outline)] pb-[3rem] last:mb-0 last:border-b-0 last:pb-0">
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1 text-left">
                    <h3
                        className="type-title text-[var(--lightest-slate)]"
                    >
                        {experience.position} - [{experience.company}]
                    </h3>
                    <p
                        className="type-meta mt-2 text-[var(--light-slate)]"
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

            <ol className="experience-timeline mt-6 type-body text-[var(--slate)]">
                {experience.tasks.map((item, index) => (
                    <li key={index} className="experience-timeline-item">
                        <span dangerouslySetInnerHTML={{ __html: item }}></span>
                    </li>
                ))}
            </ol>
        </div>
    );
}
