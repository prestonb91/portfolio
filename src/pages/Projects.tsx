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
                        <h2 className="projects-card-title">Discover Nikke</h2>
                        <div 
                            className="projects-card-description"
                        >
                            Develop and maintain community website of stories and news of Nikkei (Japanese descendants) culture.
                        </div>
                        <div className="projects-stack-container">
                        {breezeStack.map(stack => 
                            <div className="projects-stack">{stack}</div>
                        )}
                        </div>
                        <div className="projects-site-link">Site</div>
                    </div>
                </div>
                {/* Pelican */}
                <div 
                    className="projects-card"
                >
                    <img
                        className="projects-card-image"
                        src="src/assets/discover-nikkei.jpg" 
                        alt="Profile Picture"
                    />
                    <div className="projects-card-right">
                        <h2 className="projects-card-title">Discover Nikke</h2>
                        <div 
                            className="projects-card-description"
                        >
                            Develop and maintain community website of stories and news of Nikkei (Japanese descendants) culture.
                        </div>
                        <div className="projects-stack-container">
                        {breezeStack.map(stack => 
                            <div className="projects-stack">{stack}</div>
                        )}
                        </div>
                        <div className="projects-site-link">Site</div>
                    </div>
                </div>
                {/* Dev Search */}
                <div 
                    className="projects-card"
                >
                    <img
                        className="projects-card-image"
                        src="src/assets/discover-nikkei.jpg" 
                        alt="Profile Picture"
                    />
                    <div className="projects-card-right">
                        <h2 className="projects-card-title">Discover Nikke</h2>
                        <div 
                            className="projects-card-description"
                        >
                            Develop and maintain community website of stories and news of Nikkei (Japanese descendants) culture.
                        </div>
                        <div className="projects-stack-container">
                        {breezeStack.map(stack => 
                            <div className="projects-stack">{stack}</div>
                        )}
                        </div>
                        <div className="projects-site-link">Site</div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )

}

export default Projects;