import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function FeaturedProjects() {
    const flagshipProjects = projects.filter(p => p.tier === "flagship");

    return (
        <section className="py-24 px-6 max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-12">
                <div>
                    <h2 className="font-outfit text-3xl font-bold tracking-tight text-foreground">
                        Selected Work
                    </h2>
                    <p className="mt-2 text-muted-foreground max-w-lg">
                        A collection of systems, experiments, and tools I've built.
                    </p>
                </div>
                <Link
                    href="/projects"
                    className="hidden md:block text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                >
                    View all archives &rarr;
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {flagshipProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <div className="mt-8 md:hidden">
                <Link
                    href="/projects"
                    className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                >
                    View all archives &rarr;
                </Link>
            </div>
        </section>
    );
}
