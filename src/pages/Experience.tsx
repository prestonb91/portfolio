import { ExperienceProps } from "../types/utils"

function Experience({ experienceRef } : ExperienceProps) {

    const discoverNikkeiStack = ["Django", "Python", "AWS", "PostgreSQL"];
    const findadocStack = ["Vue", "Typescript", "Nuxt", "Node.js", "Pinia"];
    // const ccStack = ["React", "Typescript", "Node.js", "PostgreSQL"];

    return (
    <>
        {/* Main Content */}
        <div
            className="experience-container"
            ref={experienceRef}
        >
            <h1 className="header">Experience</h1>
            <div
                className="experience-body"
            >
                {/* Discover Nikke Experience */}
                <div 
                    className="experience-card"
                >
                    <img
                        className="experience-card-image"
                        src="src/assets/discover-nikkei.jpg" 
                        alt="Profile Picture"
                    />
                    <div className="experience-card-bottom">
                        <h2 className="experience-card-title">Discover Nikke</h2>
                        <div className="experience-stack-container">
                            {discoverNikkeiStack.map(stack => 
                                <div className="experience-stack">{stack}</div>
                            )}
                        </div>
                        <div 
                            className="experience-card-description"
                        >
                            Develop and maintain community website of stories and news of Nikkei (Japanese descendants) culture.
                        </div>
                        <div className="experience-site-link-container">
                            <div className="experience-site-link">Visit Site</div>
                        </div>
                    </div>
                </div>
                {/* Findadoc Experience */}
                <div 
                    className="experience-card"
                >
                    <img
                        className="experience-card-image"
                        src="src/assets/findadoc.jpeg" 
                        alt="Findadoc Image"
                    />
                    <div className="experience-card-bottom">
                        <h2 className="experience-card-title">Find a Doc</h2>
                        <div className="experience-stack-container">
                            {findadocStack.map(stack => 
                                <div className="experience-stack">{stack}</div>
                            )}
                        </div>
                        <div 
                            className="experience-card-description"
                        >
                            Develop and maintain health service information for international community in Japan.
                        </div>
                        <div className="experience-site-link-container">
                            <div className="experience-site-link">Visit Site</div>
                        </div>
                    </div>
                </div>
                {/* CC Experience */}
                {/* <div 
                    className="experience-card"
                >
                    <img
                        className="experience-card-image"
                        src="src/assets/cc.jpg" 
                        alt="Findadoc Image"
                    />
                    <div className="experience-card-bottom">
                        <h2 className="experience-card-title">Code Chrysalis</h2>
                        <div 
                            className="experience-card-description"
                        >
                            Develop and maintain health service information for international community in Japan.
                        </div>
                        <div className="experience-stack-container">
                        {findadocStack.map(stack => 
                            <div className="experience-stack">{stack}</div>
                        )}
                        </div>
                        <div className="experience-site-link-container">
                            <div className="experience-site-link">Visit Site</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </>
    )

}

export default Experience;