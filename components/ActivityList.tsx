import Link from "next/link";
import { activities } from "@/data/activities";

export default function ActivityList() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
                <div
                    key={activity.id}
                    className="group relative p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-accent/50 transition-all flex flex-col"
                >
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded
              ${activity.type === 'Open Source' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : ''}
              ${activity.type === 'Workshop' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' : ''}
              ${activity.type === 'Community' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : ''}
              ${activity.type === 'Volunteering' ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300' : ''}
              ${activity.type === 'Other' ? 'bg-neutral-100 text-neutral-700 dark:bg-neutral-900/30 dark:text-neutral-300' : ''}
            `}>
                            {activity.type}
                        </span>
                        <span className="text-xs text-muted-foreground">
                            {new Date(activity.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </span>
                    </div>

                    <h3 className="font-outfit font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                        {activity.title}
                    </h3>
                    <p className="text-sm text-accent font-medium mb-3">{activity.role}</p>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow">
                        {activity.description}
                    </p>

                    {activity.link && (
                        <Link
                            href={activity.link}
                            target="_blank"
                            className="mt-auto inline-flex items-center text-xs font-medium text-accent hover:underline"
                        >
                            View Details →
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
}
