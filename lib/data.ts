import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rubicGameImage from "@/public/2048-game.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
] as const;

export const experiencesData = [
    {
        title: "MS in Computing and IT",
        location: "University of St Andrews, UK",
        description:
            "Achieved a Master's degree in Computing and IT, specializing in advanced computing technologies, with a focus on both theoretical and practical applications.",
        icon: React.createElement(LuGraduationCap),
        date: "2023 Sep - 2024 May",
    },
    {
        title: "Frontend Intern",
        location: "Wuhan, China",
        description:
            "Developed NIO's third-generation station list and detail pages using Vue3, TypeScript, and Baidu Maps API. Implemented role-based access control for the Task Wizard page, enhancing system security. Collaborated effectively within a Jira-managed environment, utilizing Jenkins for deployment processes.",
        icon: React.createElement(CgWorkAlt),
        date: "2022 Aug - 2022 Dec",
    },
    {
        title: "Frontend Developer",
        location: "Wuhan, China",
        description:
            "Developed and maintained Finknow, a Financial Knowledge Graph Query and Analysis Platform using umi (React framework) and Ant Design Pro. Utilized graphin, a React toolkit for graph analysis based on G6, to develop an Equity Network Penetration Graph, enhancing data visualization capabilities.",
        icon: React.createElement(FaReact),
        date: "2022 Aug - 2022 Dec",
    },
    {
        title: "BA in Digital Publishing",
        location: "Wuhan University, China",
        description:
            "Graduated with a Bachelor of Arts in Digital Publishing, securing a GPA of 3.81/4.0. Gained foundational knowledge in digital media and publishing technologies.",
        icon: React.createElement(LuGraduationCap),
        date: "2019 Sep - 2023 Jun",
    },

] as const;

export const projectsData = [
    {
        title: "Typing Speed",
        description:
            "A typing speed test app. It shows words per minute, accuracy and time taken to complete the test.",
        tags: ["React", "TypeScript", "Tailwind", 'Framer Motion'],
        imageUrl: typingSpeedImage,
    },
    {
        title: "Game Hub",
        description: "Responsive game grid Search and filter; React Query for data handling; Implement form validation using Zod Zustand for state management; React Router for navigation; Implement infinite scrolling",
        tags: ["React", "TypeScript", "Zod", "React Query", "Chakra UI"],
        imageUrl: gameHubImage,
    },
    {
        title: "2048 Game",
        description:
            "The 2048 game is a simple, fun, and addictive number puzzle game. ",
        tags: ["JavaScript", "HTML", "CSS3"],
        imageUrl: rubicGameImage,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Git",
    "Tailwind",
    "Chakra UI",
    "Boostrap",
    "Prisma",
    "MongoDB",
    "Framer Motion",
    "d3.js",
] as const;