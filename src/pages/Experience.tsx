import { ExperienceProps } from "../types/utils"
import ExperienceCard from "../components/ExperienceCard"

function Experience({ experienceRef } : ExperienceProps) {

    const discoverNikkei = {
        title: "Discover Nikkei",
        image: "/assets/discover-nikkei.jpg",
        stack: ["Django", "Python", "AWS", "PostgreSQL"],
        description: "Development and maintenance of community for stories of Nikkei (Japanese descendants) culture.",
        link: "https://discovernikkei.org/en/",
        repo: "https://github.com/jamuseum",
    }
    
    const findadoc = {
        title: "Find a Doc",
        image: "/assets/findadoc.jpeg",
        stack: ["Vue", "Typescript", "Nuxt", "Pinia"],
        description: "Development and maintenance of health service information for international community in Japan.",
        link: "https://www.findadoc.jp/",
        repo: "https://github.com/ourjapanlife",
    }

    const codeChrysalis = {
        title: "Code Chrysalis",
        image: "/assets/codechrysalis.png",
        stack: ["React", "Typescript", "Express", "Node.js", "Prisma", "PostgreSQL"],
        description: "Finance DX and development of in-house expense management software.",
        link: "https://www.codechrysalis.io/",
        repo: "https://github.com/pelican-expense",
    }

    return (
    <>
        {/* Main Content */}
        <div
            className="experience-container"
            ref={experienceRef}
        >
            {/* Experience */}
            <h1 className="header">Experience</h1>
            <div className="experience-body">
                {/* Discover Nikke */}
                <ExperienceCard {...discoverNikkei} />
                {/* Findadoc */}
                <ExperienceCard {...findadoc} />
                {/* Code Chrysalis */}
                <ExperienceCard {...codeChrysalis} />
            </div>
        </div>
    </>
    )

}

export default Experience;