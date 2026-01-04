import { Experience } from "@/data/experience";

export default function ExperienceList({ items }: { items: Experience[] }) {
    // Sort by startDate (most recent first)
    const sortedItems = [...items].sort((a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );

    return (
        <div className="relative pl-4 md:pl-0">
            {/* Continuous Timeline Line - positioned relative to the content start */}
            <div className="absolute left-0 md:left-[135px] top-3 bottom-3 w-0.5 bg-neutral-200 dark:bg-neutral-700"></div>

            <div className="space-y-12">
                {sortedItems.map((item) => (
                    <div
                        key={item.id}
                        className="group relative flex flex-col md:flex-row gap-4 md:gap-6"
                    >
                        {/* Timeline Dot - aligned with the role title */}
                        <div className="absolute left-[-3px] md:left-[133px] top-1 w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-600 group-hover:bg-accent transition-colors z-10"></div>

                        {/* Period - fixed width, right aligned */}
                        <div className="hidden md:block text-sm font-medium text-muted-foreground w-[120px] text-right shrink-0 pt-0.5">
                            {item.period}
                        </div>

                        {/* Mobile period */}
                        <div className="md:hidden text-xs font-medium text-muted-foreground pl-4">
                            {item.period}
                        </div>

                        {/* Content */}
                        <div className="flex-1 pl-4 md:pl-6">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                                    {item.role}
                                </h3>
                                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded
                                    ${item.type === 'full-time' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : ''}
                                    ${item.type === 'part-time' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : ''}
                                    ${item.type === 'internship' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' : ''}
                                    ${item.type === 'remote' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' : ''}
                                    ${item.type === 'leadership' ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300' : ''}
                                `}>
                                    {item.type.replace('-', ' ')}
                                </span>
                            </div>
                            <p className="text-sm text-accent font-medium">{item.company}</p>
                            <ul className="mt-3 space-y-2">
                                {item.description.map((desc, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                                        <span className="text-accent mt-0.5">•</span>
                                        <span>{desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
