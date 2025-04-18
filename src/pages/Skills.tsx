import { SkillsProps } from "../types/utils"

function Skills({ skillsRef } : SkillsProps) {

    const frontendSkills = ["Javascript", "Typescript", "HTML", "CSS", "Python", "React", "Vue", "Django", "Tailwind", "Python", "React", "Vue", "Django", "Tailwind"];
    const backendSkills = ["Express", "Node.js", "Firebase", "PostgreSQL", "Prisma", "Render", "Heroku", "Netlify"];
    const miscellaneous = ["Human Resources", "Project Management", "Miro", "Github", "JLPTN1"];

    return (
    <>
        {/* Main Content */}
        <div
            className="skill-container"
            ref={skillsRef}
        >
            <h1 className="header">Skills</h1>
            <div className="skill-body">             
                {/* Frontend Skills */}
                <div className="skill-section"> 
                    <div className="line" />
                    <h2 className="skill-title">Frontend</h2>
                    <div className="line" />
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
                    <h2 className="skill-title">Backend</h2>
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
                    <h2 className="skill-title">Miscellaneous</h2>
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