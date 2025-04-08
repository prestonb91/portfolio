import { ProjectsProps } from "../types/utils"

function Projects({ projectsRef } : ProjectsProps) {

    const breezeStack = ["Django", "Python", "AWS", "PostgreSQL"];

    return (
    <>
        {/* Main Content */}
        <div
            className="projects-container"
            ref={projectsRef}
        >
            <h1 className="header">Projects</h1>
            <div className="projects-body">
                {/* Breeze */}
                <div 
                    className="projects-card"
                >
                    <img
                        className="projects-card-image"
                        src="src/assets/discover-nikkei.jpg" 
                        alt="Profile Picture"
                    />
                    <div className="projects-card-right">
                        <h2 className="projects-card-title">Breeze</h2>
                        <div className="projects-stack-container">
                            {breezeStack.map(stack => 
                                <div className="projects-stack">{stack}</div>
                            )}
                        </div>
                        <div 
                            className="projects-card-description"
                        >
                            ‬‭ Attendance management system with approval and employee mgmt. systems, using calendar plug-in.
                        </div>
                        <div className="projects-site-link">Visit Site</div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )

}

export default Projects;