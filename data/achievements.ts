export interface Achievement {
    id: string;
    title: string;
    event: string;
    date: string;
    description: string;
    type: "award" | "competition" | "certification" | "recognition";
}

export const achievements: Achievement[] = [
    {
        id: "iisc-finalist",
        title: "National Finalist",
        event: "IISc Geospatial Hackathon 2025",
        date: "2025-01-20",
        description: "Selected as National Finalist for AI-based Air Quality Estimation project among 500+ teams.",
        type: "competition",
    },
    {
        id: "robosub",
        title: "International Participant",
        event: "RoboSub Competition (AUVSI Foundation)",
        date: "2024-08-01",
        description: "Represented team at the international autonomous underwater vehicle competition in San Diego.",
        type: "competition",
    },
    {
        id: "hackathon-winner",
        title: "Winner",
        event: "University Hackathon 2024",
        date: "2024-03-15",
        description: "First place for developing an AI-powered misinformation detection system.",
        type: "award",
    },
];
