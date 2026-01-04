export interface Event {
    id: string;
    title: string;
    role: "Organizer" | "Speaker" | "Participant";
    topic: string;
    reach?: string;
    date: string;
    images: string[];
}

export const events: Event[] = [
    {
        id: "hackathon-2024",
        title: "Global AI Hackathon",
        role: "Organizer",
        topic: "Generative AI for Social Good",
        reach: "500+ Participants",
        date: "2024-09-15",
        images: ["/events/hackathon-1.jpg", "/events/hackathon-2.jpg"],
    },
    {
        id: "tech-talk-uni",
        title: "Intro to Transformers",
        role: "Speaker",
        topic: "Modern NLP Architectures",
        reach: "120 Students",
        date: "2024-02-10",
        images: ["/events/talk-1.jpg"],
    },
];
