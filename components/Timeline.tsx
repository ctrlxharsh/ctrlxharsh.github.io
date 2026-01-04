import { getTimeline } from "@/data/timeline.utils";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
    const timeline = getTimeline();

    return (
        <div className="relative space-y-8 before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-400 dark:before:via-neutral-600 before:to-transparent">
            {timeline.map((entry, index) => (
                <TimelineItem key={entry.id} entry={entry} index={index} />
            ))}
        </div>
    );
}
