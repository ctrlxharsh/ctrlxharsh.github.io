import { Project } from "@/types";
import Link from "next/link";


interface ProjectCardProps {
    project: Project;
    variant?: "default" | "compact";
}

export default function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
    if (variant === "compact") {
        return (
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:bg-neutral-900 dark:border-neutral-800 transition-all hover:border-neutral-300 dark:hover:border-neutral-700 h-full shadow-sm hover:shadow-md">
                {project.image && (
                    <div className="aspect-[2/1] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-100 dark:border-neutral-800">
                        <div className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900" />
                    </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground border border-neutral-100 dark:border-neutral-800 px-2 py-0.5 rounded-full">
                            {project.category}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-mono">{project.date.split('-')[0]}</span>
                    </div>

                    <h3 className="mb-2 font-outfit text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>

                    <p className="mb-4 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tech.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="inline-flex items-center rounded-md bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                {(project.links.demo || project.links.github) && (
                    <div className="px-5 pb-4 pt-0">
                        <div className="flex items-center gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                            {project.links.demo && (
                                <a href={project.links.demo} target="_blank" rel="noopener" className="text-xs font-medium hover:text-accent">Live</a>
                            )}
                            {project.links.github && (
                                <a href={project.links.github} target="_blank" rel="noopener" className="text-xs font-medium text-muted-foreground hover:text-foreground">Code</a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:bg-neutral-900 dark:border-neutral-800 transition-all hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm hover:shadow-md">
            {project.image && (
                <div className="aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                    <div className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900" />
                </div>
            )}

            <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.date.split('-')[0]}</span>
                </div>

                <h3 className="mb-2 font-outfit text-xl font-bold text-foreground">
                    {project.title}
                </h3>

                <p className="mb-6 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                            +{project.tech.length - 3}
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                    {project.links.demo && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                        >
                            Live Demo
                        </a>
                    )}
                    {project.links.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
