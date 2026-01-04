export interface Skill {
    id: string;
    name: string;
    category: "core-ai" | "applied-systems" | "agentic-ai" | "engineering" | "web" | "tools";
    logo: string; // URL to devicon CDN or local path
    proficiency?: "core" | "advanced" | "familiar";
    order: number;
}

// Devicon CDN base: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/
const devicon = (name: string, variant: string = "original") =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

// Simple Icons CDN: https://cdn.simpleicons.org/
const simpleicon = (name: string) => `https://cdn.simpleicons.org/${name}`;

export const skills: Skill[] = [
    // Languages/Tools
    { id: "python", name: "Python", category: "engineering", logo: devicon("python"), proficiency: "core", order: 1 },
    { id: "cpp", name: "C/C++", category: "engineering", logo: devicon("cplusplus"), proficiency: "core", order: 2 },
    { id: "sql", name: "SQL", category: "engineering", logo: devicon("mysql"), proficiency: "advanced", order: 3 },
    { id: "git", name: "Git", category: "tools", logo: devicon("git"), proficiency: "core", order: 4 },
    { id: "linux", name: "Linux", category: "tools", logo: devicon("linux"), proficiency: "advanced", order: 5 },
    { id: "docker", name: "Docker", category: "tools", logo: devicon("docker"), proficiency: "advanced", order: 6 },

    // AI & Machine Learning
    { id: "pytorch", name: "PyTorch", category: "core-ai", logo: devicon("pytorch"), proficiency: "core", order: 1 },
    { id: "tensorflow", name: "TensorFlow", category: "core-ai", logo: devicon("tensorflow"), proficiency: "advanced", order: 2 },
    { id: "langgraph", name: "LangGraph", category: "agentic-ai", logo: simpleicon("langchain"), proficiency: "advanced", order: 3 },
    { id: "opencv", name: "OpenCV", category: "core-ai", logo: devicon("opencv"), proficiency: "advanced", order: 4 },
    { id: "scikit-learn", name: "Scikit-learn", category: "core-ai", logo: devicon("scikitlearn"), proficiency: "advanced", order: 5 },

    // Frameworks & Libraries
    { id: "numpy", name: "NumPy", category: "core-ai", logo: devicon("numpy"), proficiency: "core", order: 6 },
    { id: "pandas", name: "Pandas", category: "core-ai", logo: devicon("pandas"), proficiency: "core", order: 7 },
    { id: "matplotlib", name: "Matplotlib", category: "core-ai", logo: devicon("matplotlib"), proficiency: "advanced", order: 8 },
    { id: "huggingface", name: "HuggingFace", category: "core-ai", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", proficiency: "advanced", order: 9 },

    // Web Development
    { id: "nextjs", name: "Next.js", category: "web", logo: devicon("nextjs"), proficiency: "advanced", order: 1 },
    { id: "react", name: "React", category: "web", logo: devicon("react"), proficiency: "advanced", order: 2 },
    { id: "django", name: "Django", category: "web", logo: devicon("django", "plain"), proficiency: "advanced", order: 3 },
    { id: "flask", name: "Flask", category: "web", logo: devicon("flask"), proficiency: "advanced", order: 4 },
    { id: "tailwindcss", name: "Tailwind CSS", category: "web", logo: devicon("tailwindcss"), proficiency: "advanced", order: 5 },
    { id: "nodejs", name: "Node.js", category: "web", logo: devicon("nodejs"), proficiency: "advanced", order: 6 },
];
