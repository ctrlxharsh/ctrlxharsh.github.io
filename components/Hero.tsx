import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center px-6 max-w-5xl mx-auto pt-24">
            <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-400">
                    <div className="relative h-5 w-5 mr-2 overflow-hidden rounded-full">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    Available for Research Collaborations
                </div>

                <div className="flex flex-col-reverse md:flex-row md:items-center gap-8 md:gap-12">
                    <div className="space-y-6 flex-1">
                        <h1 className="font-outfit text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                            Engineering Intelligence <br />
                            <span className="text-muted-foreground">at the Edge.</span>
                        </h1>

                        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                            I'm <span className="text-foreground font-semibold">Harsh</span>, an AI Engineer & Researcher specializing in
                            <span className="text-accent"> Computer Vision</span>, <span className="text-accent">Agentic AI</span>, and <span className="text-accent">Robotics</span>.
                            Building systems that bridge the gap between research and reality.
                        </p>
                    </div>

                    <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-2 border-neutral-200 dark:border-neutral-800 rotate-6 transform transition-transform group-hover:rotate-12"></div>
                        <div className="rounded-full overflow-hidden w-full h-full border-4 border-white dark:border-neutral-900 shadow-xl relative z-10 bg-neutral-100">
                            <Image
                                src="/logo.png"
                                alt="Harsh Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                        View Projects
                    </Link>
                    <Link
                        href="/research"
                        className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-transparent px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900"
                    >
                        Research
                    </Link>
                </div>
            </div>
        </section>
    );
}
