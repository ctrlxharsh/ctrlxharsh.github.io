import { achievements } from "@/data/achievements";
import AchievementList from "@/components/AchievementList";

export default function AchievementsPage() {
    return (
        <div className="min-h-screen pt-24 px-6 max-w-4xl mx-auto pb-20">
            <div className="mb-16">
                <h1 className="font-outfit text-4xl font-bold tracking-tight text-foreground mb-4">
                    Achievements
                </h1>
                <p className="text-muted-foreground max-w-2xl text-lg">
                    Awards, competitions, and recognitions.
                </p>
            </div>

            <AchievementList items={achievements} />
        </div>
    );
}
