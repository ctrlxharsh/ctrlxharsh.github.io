
import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "air-quality-estimation",
        title: "Air Quality Estimation",
        tier: "flagship",
        category: "research",
        date: "2025-01-20", // Finalist date roughly
        shortDescription: "AI-based model using Random Forest, XGBoost, GAM, and LightGBM to estimate surface-level PM. Achieved 75% R² accuracy across pan-India predictions.",
        tech: ["Random Forest", "XGBoost", "LightGBM", "GAM"],
        image: "/projects/air-quality.jpg",
        links: {}, // No specific link provided
        showInTimeline: true,
    },
    {
        id: "news-sure",
        title: "NewsSure",
        tier: "flagship",
        category: "product",
        date: "2024-12-01", // Approx
        shortDescription: "Full-Stack AI Web Application for misinformation detection using OCR, web scraping, and stance detection.",
        tech: ["React", "Vite", "Django REST API", "OCR", "Web Scraping"],
        image: "/projects/newssure.jpg",
        links: {},
        showInTimeline: true,
    },
    {
        id: "auv-system",
        title: "Autonomous Underwater Vehicle (AUV)",
        tier: "flagship",
        category: "system",
        date: "2024-05-01",
        shortDescription: "Vision-control framework combining real-time object tracking and pose estimation with PID-based control on Jetson Xavier.",
        tech: ["OpenCV", "ROS", "Jetson Xavier", "PID", "SLAM"],
        image: "/projects/auv.jpg",
        links: {},
        showInTimeline: true,
    },
    {
        id: "twitter-bot",
        title: "Twitter AI Bot",
        tier: "experiment",
        category: "fun",
        date: "2024-08-15",
        shortDescription: "A Python script using Tweepy and OpenAI API to automatically reply to tech trends with sarcastic commentary.",
        tech: ["Python", "Tweepy", "OpenAI API"],
        links: { github: "https://github.com/ctrlxharsh/twitter-bot" },
        showInTimeline: false,
    },
    {
        id: "spotify-visualizer",
        title: "Spotify Visualizer",
        tier: "experiment",
        category: "fun",
        date: "2024-03-20",
        shortDescription: "Real-time audio visualizer in the browser using Web Audio API and Canvas.",
        tech: ["JavaScript", "HTML5 Canvas", "Web Audio API"],
        links: { demo: "#" },
        showInTimeline: false,
    },
    {
        id: "cli-todo",
        title: "Rust CLI Todo",
        tier: "experiment",
        category: "tool",
        date: "2024-01-10",
        shortDescription: "Blazing fast terminal-based todo list manager written to learn Rust ownership concepts.",
        tech: ["Rust", "Clap"],
        links: { github: "#" },
        showInTimeline: false,
    }
];
