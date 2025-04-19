import { ProjectsProps } from "../types/utils";
import ProjectCard from "../components/ProjectCard";

function Projects({ projectsRef } : ProjectsProps) {

    const breeze = {
        title: "Breeze",
        image: "/assets/breeze-demo.mp4",
        stack: ["Vue", "Typescript", "Pinia", "Firebase", "Express", "Node.js", "Prisma", "PostgreSQL", ],
        description: "A full stack attendance management system with employee management and manager approval system, using a calendar plug-in.",
        link: "https://breezehr.netlify.app/landing",
        repo: "https://github.com/breeze-hr",
    }

    const receiptReader = {
        title: "Receipt Reader",
        image: "/assets/receipt-reader-demo.mp4",
        stack: ["React", "Javascript", "Google OCR"],
        description: "A simple component that extracts text from images using Google OCR to be used for backoffice systems such as receipt reading.",
        link: "",
        repo: "https://github.com/prestonb91/expense-submitter",
    }

    const mockInterviews = {
        title: "Mock Interviews Repo",
        image: "/assets/react.png",
        stack: ["React", "Javascript"],
        description: "A collection of mock interviews, consisting mostly of React frontend interview prompts.",
        link: "",
        repo: "https://github.com/prestonb91/react-mock-interviews",
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