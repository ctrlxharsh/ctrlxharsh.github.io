import { Achievement } from "@/data/achievements";

export default function AchievementList({ items }: { items: Achievement[] }) {
    // Sort by date (most recent first)
    const sortedItems = [...items].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const getTypeBadgeClass = (type: Achievement["type"]) => {
        switch (type) {
            case "award": return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";
            case "competition": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
            case "certification": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
            case "recognition": return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300";
            default: return "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300";
        }
    };

    return (
        <div className="relative pl-4 md:pl-0">
            {/* Continuous Timeline Line */}
            <div className="absolute left-0 md:left-[85px] top-3 bottom-3 w-0.5 bg-neutral-200 dark:bg-neutral-700"></div>

            <div className="space-y-10">
                {sortedItems.map((item) => (
                    <div
                        key={item.id}
                        className="group relative flex flex-col md:flex-row gap-4 md:gap-6"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-[-3px] md:left-[83px] top-1 w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-600 group-hover:bg-accent transition-colors z-10"></div>

                        {/* Date - fixed width, right aligned */}
                        <div className="hidden md:block text-sm font-medium text-muted-foreground w-[70px] text-right shrink-0 pt-0.5">
                            {new Date(item.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </div>

                        {/* Mobile date */}
                        <div className="md:hidden text-xs font-medium text-muted-foreground pl-4">
                            {new Date(item.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </div>

                        {/* Content */}
                        <div className="flex-1 pl-4 md:pl-6">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                                    {item.title}
                                </h3>
                                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${getTypeBadgeClass(item.type)}`}>
                                    {item.type}
                                </span>
                            </div>
                            <p className="text-sm text-accent font-medium">{item.event}</p>
                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
