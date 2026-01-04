export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    startDate: string; // ISO format YYYY-MM-DD for sorting
    description: string[];
}

export const experience: Experience[] = [
    {
        id: "fieldintelai",
        role: "AI Engineer Intern (Remote, Part-Time)",
        company: "FieldIntelAI, SavGen",
        period: "Nov 2025 - Present",
        startDate: "2025-11-01",
        description: [
            "Developed AI-powered SaaS applications using agentic workflows for NGOs and educational institutions.",
            "Built scalable backends using Streamlit, Flask, and Django with PostgreSQL for state management.",
            "Engineered multi-step AI workflows using LangChain, MCP, and LangSmith for reliable deployment.",
        ],
    },
    {
        id: "iit-bhu",
        role: "Research Intern",
        company: "Indian Institute of Technology (BHU), Varanasi",
        period: "Dec 2025 - Present",
        startDate: "2025-12-01",
        description: [
            "Researching deep learning-based landslide detection using remote sensing and geospatial data.",
            "Implemented YOLO architectures for object detection and U-Net for precise image segmentation.",
            "Optimized high-resolution imagery storage and preprocessing using PCA-based compression.",
        ],
    },
    {
        id: "mts-auv",
        role: "Computer Team Lead",
        company: "MTS Autonomous Underwater Vehicle Club, ZHCET",
        period: "May 2023 - Present",
        startDate: "2023-05-01",
        description: [
            "Leading CV development for AUVs, focusing on object detection in low-visibility / low-feature environments.",
            "Developing a pose estimation pipeline utilizing SuperPoint, SuperGlue, and SLAM.",
            "Deployed YOLOv8 on Jetson Xavier NX and Raspberry Pi for real-time gate detection and tracking.",
        ],
    },
];
