import { ExperienceProps } from "../types/utils"

function Experience({ experienceRef } : ExperienceProps) {

    const discoverNikkeiStack = ["Django", "Python", "Aws"];

    return (
    <>
        {/* Main Content */}
        <div
            className="experience-container"
            ref={experienceRef}
        >
            <h1 className="experience-header">Experience</h1>
            <div
                className="experience-body"
            >
                <div 
                    className="experience-card"
                >
                    <div>
                        <img
                            className="experience-card-image"
                            src="src/assets/discover-nikkei.jpg" 
                            alt="Profile Picture"
                        />
                    </div>
                    <div className="experience-card-bottom">
                        <div className="experience-card-title">Title</div>
                        <div className="experience-card-description">Description</div>
                        <div className="experience-stack-container">
                        {discoverNikkeiStack.map(stack => 
                            <div className="experience-stack">{stack}</div>
                        )}
                        </div>
                        <div className="experience-site-link-container">
                            <div className="experience-site-link">Site Link</div>
                        </div>
                    </div>
                </div>
                <div 
                    className="experience-card"
                >
                    Card2
                </div>
                <div 
                    className="experience-card"
                >
                    Card3
                </div>
            </div>
        </div>
    </>
    )

}

export default Experience;