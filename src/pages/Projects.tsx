import { ProjectsProps } from "../types/utils";
import ProjectCard from "../components/ProjectCard";

function Projects({ projectsRef } : ProjectsProps) {

    const breeze = {
        title: "Breeze",
        image: "src/assets/discover-nikkei.jpg",
        stack: ["Vue", "Typescript", "Firebase", "Prisma", "PostgreSQL", "Pinia"],
        description: "Attendance management system with approval and employee mgmt. systems, using calendar plug-in",
        link: "",
        repo: "",
    }

    return (
    <>
        {/* Main Content */}
        <div
            className="projects-container"
            ref={projectsRef}
        >
            {/* Projects */}
            <h1 className="header">Projects</h1>
            <div className="projects-body">
                {/* Breeze*/}
                <ProjectCard {...breeze}/>
            </div>
        </div>
    </>
    )

}

export default Projects;