import { experience } from "@/data/experience";
import ExperienceList from "@/components/ExperienceList";

export default function ExperiencePage() {
    return (
        <div className="min-h-screen pt-24 px-6 max-w-4xl mx-auto pb-20">
            <div className="mb-16">
                <h1 className="font-outfit text-4xl font-bold tracking-tight text-foreground mb-4">
                    Experience
                </h1>
                <p className="text-muted-foreground max-w-2xl text-lg">
                    Professional roles, internships, and leadership positions.
                </p>
            </div>

            <ExperienceList items={experience} />
        </div>
    );
}
