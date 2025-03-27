import { ProjectsProps } from "../types/utils"

function Projects({ projectsRef } : ProjectsProps) {

    return (
    <>
        {/* Main Content */}
        <div
            ref={projectsRef}
        >
            <h1>Projects</h1>
        </div>
    </>
    )

}

export default Projects;