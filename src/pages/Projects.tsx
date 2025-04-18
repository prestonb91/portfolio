import { ProjectsProps } from "../types/utils";
import ProjectCard from "../components/ProjectCard";

function Projects({ projectsRef } : ProjectsProps) {

    const breeze = {
        title: "Breeze",
        image: "/assets/breeze-demo.mp4",
        stack: ["Vue", "Typescript", "Firebase", "Prisma", "PostgreSQL", "Pinia"],
        description: "Attendance management system with approval and employee mgmt. systems, using calendar plug-in",
        link: "https://breezehr.netlify.app/landing",
        repo: "https://github.com/breeze-hr",
    }

    const llamaLlama = {
        title: "Llama Llama",
        image: "",
        stack: ["Vue", "Typescript", "Firebase", "Prisma", "PostgreSQL", "Pinia"],
        description: "Note taker for developers",
        link: "",
        repo: "https://github.com/prestonb91/expense-submitter",
    }

    const receiptReader = {
        title: "Receipt Reader",
        image: "",
        stack: ["React", "Typescript", "Google OCR"],
        description: "A text processing component using Google OCR as a test for backoffice systems such as expense reading.",
        link: "",
        repo: "https://github.com/prestonb91/expense-submitter",
    }

    const mockInterviews = {
        title: "Mock Interviews",
        image: "",
        stack: ["React", "Javascript"],
        description: "A collection of mock interviews mostly consisting of React frontend and Leetcode solutions.",
        link: "",
        repo: "https://github.com/prestonb91/expense-submitter",
    }

    return (
    <>
        {/* Main Content */}
        <div
            className="project-container"
            ref={projectsRef}
        >
            {/* Projects */}
            <h1 className="header">Projects</h1>
            <div className="project-body">
                {/* Breeze*/}
                <ProjectCard {...breeze}/>
                {/* Llama Llama*/}
                <ProjectCard {...llamaLlama}/>
                {/* Receipt Reader*/}
                <ProjectCard {...receiptReader}/>
                {/* Receipt Reader*/}
                <ProjectCard {...mockInterviews}/>
            </div>
        </div>
    </>
    )

}

export default Projects;