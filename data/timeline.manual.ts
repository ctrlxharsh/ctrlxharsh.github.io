import { TimelineEntry } from "@/types";

export const manualTimeline: TimelineEntry[] = [
    // Education
    {
        id: "edu-amu",
        date: "2027-06-01", // Expected graduation
        title: "Aligarh Muslim University",
        type: "education", // We might need to handle this type in the UI or map it to something else
        description: "Bachelor of Technology in Computer Engineering. CGPA: 8.957/10. Semester 4 SPI: 9.44.",
    },
    {
        id: "edu-iit-madras",
        date: "2024-01-01", // Approx end date? Resume says 2023-2024
        title: "IIT Madras",
        type: "education",
        description: "Foundation Level in Programming and Data Science. CGPA: 8.9/10.",
    },
    {
        id: "edu-new-era",
        date: "2022-05-01",
        title: "New Era School, Unnao",
        type: "education",
        description: "Intermediate (94.4%) & Matriculation (87.4%).",
    },

    // Achievements
    {
        id: "ach-bah2025",
        date: "2025-01-01", // Assuming 2025
        title: "Finalist, BAH2025 (ISRO)",
        type: "award",
        description: "Among 28 national finalist teams (2 per project), ISRO BAH Grand Finale (Hyderabad).",
    },
    {
        id: "ach-mts-2025",
        date: "2025-01-01", // Assuming 2025
        title: "Best Innovation, MTS Tech Symposium, IIT Madras",
        type: "award",
        description: "For sustainable AUV with vision capabilities.",
    },
    {
        id: "ach-amu-rov-2024",
        date: "2024-01-01",
        title: "2nd Place – AMU ROV Challenge",
        type: "award",
        description: "Built PID-based navigation & control for 4-DOF AUV.",
    },
    {
        id: "ach-sauv-2025",
        date: "2025-01-01",
        title: "Shortlisted – SAUVC 2025 / SAUVC 2026",
        type: "award",
        description: "Among 100+ global teams representing AMU.",
    },
];
