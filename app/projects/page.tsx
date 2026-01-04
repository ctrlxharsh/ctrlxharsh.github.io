import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
    const flagshipProjects = projects.filter(p => p.tier === "flagship");
    const otherProjects = projects.filter(p => p.tier !== "flagship");

    return (
        <div className="min-h-screen pt-24 px-6 max-w-6xl mx-auto pb-20">
            <div className="mb-12">
                <h1 className="font-outfit text-4xl font-bold tracking-tight text-foreground mb-4">
                    Projects
                </h1>
                <p className="text-muted-foreground max-w-2xl text-lg">
                    A complete archive of my systems, tools, and experiments.
                </p>
            </div>

            <section className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {flagshipProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>

            {otherProjects.length > 0 && (
                <section>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span className="w-2 h-8 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
                        Other Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} variant="compact" />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
