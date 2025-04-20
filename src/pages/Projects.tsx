import { ProjectsProps } from "../types/utils";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from 'react-i18next';


function Projects({ projectsRef } : ProjectsProps) {
    const { t } = useTranslation();

    const breeze = {
        title: t("projects.projects.breeze.title"),
        image: "/assets/breeze-demo.mp4",
        stack: ["Vue", "Typescript", "Pinia", "Firebase", "Express", "Node.js", "Prisma", "PostgreSQL"],
        description: t("projects.projects.breeze.description"),
        link: "https://breezehr.netlify.app/landing",
        repo: "https://github.com/breeze-hr",
    }
    
    const receiptReader = {
        title: t("projects.projects.receiptReader.title"),
        image: "/assets/receipt-reader-demo.mp4",
        stack: ["React", "Javascript", "Google OCR"],
        description: t("projects.projects.receiptReader.description"),
        link: "https://receipt-reader.netlify.app/",
        repo: "https://github.com/prestonb91/expense-submitter",
    }

    const llamaLlama = {
        title: t("projects.projects.llamaLlama.title"),
        image: "/assets/react.png",
        stack: ["React", "Javascript", "Express", "Node.js", "Knex", "PostgreSQL"],
        description: t("projects.projects.llamaLlama.description"),
        link: "https://llama-llama-lms-live.onrender.com/",
        repo: "https://github.com/Team-Llama-Llama",
    }
    
    const mockInterviews = {
        title: t("projects.projects.mockInterviews.title"),
        image: "/assets/react.png",
        stack: ["React", "Javascript"],
        description: t("projects.projects.mockInterviews.description"),
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
                {/* Breeze */}
                <ProjectCard {...breeze}/>
                {/* Receipt Reader */}
                <ProjectCard {...receiptReader}/>
                {/* Llama Llama */}
                <ProjectCard {...llamaLlama}/>
                {/* Mock Interviews */}
                <ProjectCard {...mockInterviews}/>
            </div>
        </div>
    </>
    )

}

export default Projects;