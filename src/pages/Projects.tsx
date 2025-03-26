import { ProjectsProps } from "../types/utils"

function Projects({ projectsRef } : ProjectsProps) {

    return (
    <>
        {/* Main Content */}
        <div
            className="border-2 border-white text-white h-screen"
            ref={projectsRef}
        >
            <h1>Projects</h1>
        </div>
    </>
    )

}

export default Projects;