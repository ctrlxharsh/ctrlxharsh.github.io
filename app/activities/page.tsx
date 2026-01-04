import ActivityList from "@/components/ActivityList";

export default function ActivitiesPage() {
    return (
        <main className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
            <div className="mb-12">
                <h1 className="font-outfit text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                    Other Activities
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Beyond research and projects, I'm actively involved in community building, open-source contributions, and mentoring.
                </p>
            </div>

            <ActivityList />
        </main>
    );
}
