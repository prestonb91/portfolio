import { ExperienceProps } from "../types/utils"
import ExperienceCard from "../components/ExperienceCard"

function Experience({ experienceRef } : ExperienceProps) {

    const discoverNikkei = {
        title: "Discover Nikkei",
        image: "src/assets/discover-nikkei.jpg",
        stack: ["Django", "Python", "AWS", "PostgreSQL"],
        description: "Develop and maintain community website of stories and news of Nikkei (Japanese descendants) culture.",
        link: "",
        repo: "",
    }
    
    const findadoc = {
        title: "Find a Doc",
        image: "src/assets/findadoc.jpeg",
        stack: ["Vue", "Typescript", "Nuxt", "Node.js", "Pinia"],
        description: "Develop and maintain health service information for international community in Japan.",
        link: "",
        repo: "",
    }

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
                <ExperienceCard {...discoverNikkei} />
                {/* Findadoc Experience */}
                <ExperienceCard {...findadoc} />
            </div>
        </div>
    </>
    )

}

export default Experience;