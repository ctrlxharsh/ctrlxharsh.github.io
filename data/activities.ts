export interface Activity {
    id: string;
    title: string;
    role: string;
    description: string;
    date: string;
    type: "Community" | "Volunteering" | "Workshop" | "Open Source" | "Other";
    link?: string;
    images?: string[];
}

export const activities: Activity[] = [
    {
        id: "open-source-contrib",
        title: "Large Language Model Optimization",
        role: "Contributor",
        description: "Contributed to several open-source libraries focused on efficient inference for LLMs on edge devices.",
        date: "2024-11-20",
        type: "Open Source",
        link: "https://github.com/ctrlxharsh",
    },
    {
        id: "ai-workshop-lead",
        title: "Hands-on Generative AI Workshop",
        role: "Lead Instructor",
        description: "Organized and led a 2-day workshop for university students on building RAG applications using LangChain and Gemini.",
        date: "2024-08-10",
        type: "Workshop",
        images: ["https://images.unsplash.com/photo-1591115765373-520b7a21769b?auto=format&fit=crop&q=80&w=800"],
    },
    {
        id: "community-mentor",
        title: "Google Developer Student Clubs",
        role: "AI/ML Mentor",
        description: "Mentoring 50+ students in machine learning projects and career guidance in AI.",
        date: "2023-12-01",
        type: "Community",
    }
];
