import { ProjectsProps } from "../types/utils";
import ProjectCard from "../components/ProjectCard";

function Projects({ projectsRef } : ProjectsProps) {

    const breeze = {
        title: "Breeze",
        image: "src/assets/breeze-demo.mp4",
        stack: ["Vue", "Typescript", "Firebase", "Prisma", "PostgreSQL", "Pinia"],
        description: "Attendance management system with approval and employee mgmt. systems, using calendar plug-in",
        link: "https://breezehr.netlify.app/landing",
        repo: "https://github.com/breeze-hr",
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
            </div>
        </div>
    </>
    )

}

export default Projects;