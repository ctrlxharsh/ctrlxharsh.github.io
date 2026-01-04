import { research } from "@/data/research";
import ResearchList from "@/components/ResearchList";

export default function ResearchPage() {
    return (
        <div className="min-h-screen pt-24 px-6 max-w-4xl mx-auto pb-20">
            <div className="mb-16">
                <h1 className="font-outfit text-4xl font-bold tracking-tight text-foreground mb-4">
                    Research
                </h1>
                <p className="text-muted-foreground max-w-2xl text-lg">
                    Publications, workshop papers, and conference presentations.
                </p>
            </div>

            <ResearchList items={research} />
        </div>
    );
}
