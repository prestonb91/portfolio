import { ExperienceProps } from "../types/utils"
import ExperienceCard from "../components/ExperienceCard"
import { useTranslation } from 'react-i18next';

function Experience({ experienceRef } : ExperienceProps) {
    const { t } = useTranslation();

    const discoverNikkei = {
        title: t("experience.experience.discoverNikkei.title"),
        image: "/assets/discover-nikkei.jpg",
        stack: ["Django", "Python", "AWS", "PostgreSQL"],
        description: t("experience.experience.discoverNikkei.description"),
        link: "https://discovernikkei.org/en/",
        repo: "https://github.com/jamuseum",
    }

    const findadoc = {
        title: t("experience.experience.findadoc.title"),
        image: "/assets/findadoc.jpeg",
        stack: ["Vue", "Typescript", "Nuxt", "Pinia"],
        description: t("experience.experience.findadoc.description"),
        link: "https://www.findadoc.jp/",
        repo: "https://github.com/ourjapanlife",
    }

    const codeChrysalis = {
        title: t("experience.experience.codeChrysalis.title"),
        image: "/assets/codechrysalis.png",
        stack: ["React", "Typescript", "Express", "Node.js", "Prisma", "PostgreSQL"],
        description: t("experience.experience.codeChrysalis.description"),
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