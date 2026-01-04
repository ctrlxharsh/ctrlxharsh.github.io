import Timeline from "@/components/Timeline";

export default function JourneyPage() {
    return (
        <div className="min-h-screen pt-24 px-6 max-w-5xl mx-auto pb-20">
            <div className="mb-16 text-center">
                <h1 className="font-outfit text-4xl font-bold tracking-tight text-foreground mb-4">
                    Journey
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    A chronological view of my work, research, and milestones.
                </p>
            </div>

            <Timeline />
        </div>
    );
}
