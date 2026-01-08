
import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "personal-productivity-agent",
        title: "AI Personal Productivity Agent",
        tier: "flagship",
        category: "product",
        date: "2025-12-31", // Finalist date roughly
        shortDescription: "An Agentic AI productivity system using LangGraph and MCP that autonomously plans daily schedules and executes real-world actions across Gmail, Google Calendar, and GitHub via natural-language commands.",
        tech: [
            "LangGraph",
            "Model Context Protocol (MCP)",
            "OpenAI LLMs",
            "Google Calendar API",
            "Gmail API",
            "GitHub API",
            "DuckDuckGo Search API",
            "Python",
            "Streamlit",
            "Langfuse",
            "OAuth 2.0"
        ],
        image: "/projects/agendaai.webp",
        links: { github: "https://github.com/ctrlxharsh/agenda", video: "https://youtu.be/uraJtd_OI_o", demo: "https://agenda-ai.streamlit.app/" }, // No specific link provided
        showInTimeline: true,
    },
    {
        id: "air-quality-estimation",
        title: "PM2.5/PM10 Estimation using Satellite Data",
        tier: "flagship",
        category: "research",
        date: "2025-08-08", // Finalist date roughly
        shortDescription: "Ensemble machine learning framework for pan-India surface-level PM estimation, achieving R² scores of 0.80 for PM2.5 and 0.75 for PM10 using multi-year satellite data (2019-2024).",
        tech: ["Random Forest", "XGBoost", "LightGBM", "GAM"],
        image: "/projects/pm.webp",
        links: { slides: "https://www.canva.com/design/DAGu8hzLS7M/oL72B1kiJ8VX4_jioPG8-A/view?utm_content=DAGu8hzLS7M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5264dfd6f7" }, // No specific link provided
        showInTimeline: true,
    },
    {
        id: "news-sure",
        title: "NewsSure",
        tier: "flagship",
        category: "product",
        date: "2025-10-10", // Approx
        shortDescription: "AI-driven, multi-modal misinformation verification platform that combines real-time web scraping, domain credibility analysis, semantic similarity scoring, GenAI detection, and optional expert review to deliver a trust score and final truth verdict for text, images, and links.",
        tech: ["React", "Vite", "Django REST API", "OCR", "Web Scraping", "Stance Detection"],
        image: "/projects/newssure.webp",
        links: { github: "https://github.com/ctrlxharsh/NewsSure", slides: "https://www.canva.com/design/DAG1hBQCUdQ/jLhRkG2ors_WmiblLnepXg/view?utm_content=DAG1hBQCUdQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf1a14976c0" },
        showInTimeline: true,
    },
    {
        id: "auv-system",
        title: "Autonomous Underwater Vehicle (AUV)",
        tier: "flagship",
        category: "system",
        date: "2025-03-01",
        shortDescription: "Designed and implemented a complete AUV control layer integrating real-time object and gate detection, underwater navigation logic, PID-based motion control, and end-to-end hardware–software interfacing on NVIDIA Jetson Xavier.",
        tech: ["OpenCV", "PnP", "Homography", "Jetson Xavier", "PID", "SLAM"],
        image: "/projects/sea5.webp",
        links: { github: ["https://github.com/ctrlxharsh/IITM_techsym", "https://github.com/ctrlxharsh/pnp", "https://github.com/ctrlxharsh/object_tracker"] },
        showInTimeline: true,
    },
    {
        id: "object-tracker",
        title: "2D Object Tracker",
        tier: "experiment",
        category: "tool",
        date: "2024-03-05",
        shortDescription: "A real-time object tracking system that estimates the 6DoF pose of a planar object using SIFT feature matching, homography, and PnP-based pose estimation with calibrated cameras.",
        tech: ["OpenCV", "SIFT", "Homography", "PnP"],
        links: { github: "https://github.com/ctrlxharsh/object_tracker" },
        showInTimeline: false,
    },
    {
        id: "terminal-chatbot",
        title: "Terminal Chatbot",
        tier: "experiment",
        category: "fun",
        date: "2025-07-23",
        shortDescription: "A simple, yet powerful terminal-based chatbot powered by Google's Gemini API. This script uses the rich library to create a beautiful and user-friendly command-line interface.",
        tech: ["Google Gemini API", "rich", "requests", "python-dotenv"],
        links: { github: "https://github.com/ctrlxharsh/Terminal-ChatBot" },
        showInTimeline: false,
    },
    {
        id: "lib-management-sys",
        title: "Library Management System",
        tier: "experiment",
        category: "OOPS Project",
        date: "2025-01-19",
        shortDescription: "A C++-based Library Management System using OOP, CSV file handling, RegEx validation, and authentication to efficiently manage book records and borrowing workflows.",
        tech: [
            "C++",
            "OOP",
            "CSV",
            "RegEx",
            "G++",
            "Git"
        ],
        links: { github: "https://github.com/ctrlxharsh/Lib_Management_Sys" },
        showInTimeline: false,
    },
    {
        id: "HeartImage",
        title: "Shape-Aware Template Mosaic Generation",
        tier: "experiment",
        category: "Fun",
        date: "2025-01-19",
        shortDescription: "a technique that reconstructs an image by replacing pixel blocks with color-adapted shape templates, preserving global structure while producing a stylized mosaic representation.",
        tech: [
            "C++",
            "OOP",
            "CSV",
            "RegEx",
            "G++",
            "Git"
        ],
        links: { github: "https://github.com/ctrlxharsh/Lib_Management_Sys" },
        showInTimeline: false,
    },
];
