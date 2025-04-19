import { SkillsProps } from "../types/utils"
import { useTranslation } from 'react-i18next';


function Skills({ skillsRef } : SkillsProps) {
    const { t } = useTranslation();


    const frontendSkills = ["Javascript", "Typescript", "HTML", "CSS", "Python", "React", "Vue", "Django", "Tailwind"];
    const backendSkills = ["Express", "Node.js", "Firebase", "PostgreSQL", "Prisma", "Render", "Heroku", "Netlify"];
    const miscellaneous = ["Human Resources", "Project Management", "Miro", "Github", "JLPTN1"];

    return (
    <>
        {/* Main Content */}
        <div
            className="skill-container"
            ref={skillsRef}
        >
            <h1 className="header">{t("skills.header")}</h1>
            <div className="skill-body">             
                {/* Frontend Skills */}
                <div className="skill-section"> 
                    <h2 className="skill-title">{t("skills.section.frontendTitle")}</h2>
                    <div className="skill-item-container">
                        {
                            frontendSkills.map((skill, index) => 
                                <div className="skill-item" key={index}>{skill}</div>
                            )
                        }
                    </div>
                </div>
                {/* Backend Skills */}
                <div className="skill-section"> 
                    <h2 className="skill-title">{t("skills.section.backendTitle")}</h2>
                    <div className="skill-item-container">
                        {
                            backendSkills.map((skill, index) => 
                                <div className="skill-item" key={index}>{skill}</div>
                            )
                        }
                    </div>
                </div>
                {/* Miscellaneous Skills */}
                <div className="skill-section"> 
                    <h2 className="skill-title">{t("skills.section.miscellaneousTitle")}</h2>
                    <div className="skill-item-container">
                        {
                            miscellaneous.map((skill, index) => 
                                <div className="skill-item" key={index}>{skill}</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Skills;