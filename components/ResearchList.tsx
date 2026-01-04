import { Research } from "@/types";

export default function ResearchList({ items }: { items: Research[] }) {
    return (
        <div className="space-y-8">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="group relative flex flex-col md:flex-row gap-2 md:gap-12 border-b border-neutral-100 dark:border-neutral-800 pb-8 last:border-0 pl-8 md:pl-0"
                >
                    {/* Timeline Connector (Desktop) */}
                    <div className="hidden md:block absolute left-[90px] top-0 bottom-0 w-px bg-neutral-300 dark:bg-neutral-700 -z-10 group-last:bottom-auto group-last:h-full"></div>
                    <div className="hidden md:block absolute left-[86px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-neutral-300 bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-800 group-hover:border-accent group-hover:bg-accent transition-colors"></div>

                    <span className="text-sm font-medium text-muted-foreground min-w-[60px] text-right pt-0.5">
                        {item.year}
                    </span>
                    <div className="flex-1">
                        <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                            {item.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-2 text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                            <span>{item.venue}</span>
                            <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                            <span className="capitalize">{item.type.replace('-', ' ')}</span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground max-w-3xl">
                            {item.shortContribution}
                        </p>

                        <div className="flex gap-4 mt-3">
                            {item.links.pdf && (
                                <a href={item.links.pdf} className="text-xs font-medium text-accent hover:underline">PDF</a>
                            )}
                            {item.links.openReview && (
                                <a href={item.links.openReview} className="text-xs font-medium text-accent hover:underline">OpenReview</a>
                            )}
                            {item.links.slides && (
                                <a href={item.links.slides} className="text-xs font-medium text-accent hover:underline">Slides</a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
