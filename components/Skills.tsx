import { skills } from "@/data/skills";
import Image from "next/image";

export default function Skills() {
    const categories = ["core-ai", "applied-systems", "engineering", "web", "agentic-ai"] as const;

    return (
        <section className="py-24 px-6 max-w-6xl mx-auto border-t border-neutral-200 dark:border-neutral-800">
            <h2 className="font-outfit text-3xl font-bold tracking-tight text-foreground mb-12">
                Technical Arsenal
            </h2>

            <div className="space-y-12">
                {categories.map((category) => {
                    const categorySkills = skills.filter(s => s.category === category);
                    if (categorySkills.length === 0) return null;

                    return (
                        <div key={category}>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                                {category.replace(/-/g, ' ')}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {categorySkills.map((skill) => (
                                    <div
                                        key={skill.id}
                                        className="group flex flex-col items-center justify-center p-4 rounded-xl border border-neutral-100 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/50 hover:border-accent/20 transition-all"
                                    >
                                        <div className="relative w-12 h-12 mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                                            <Image
                                                src={skill.logo}
                                                alt={skill.name}
                                                fill
                                                className="object-contain"
                                                unoptimized
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
