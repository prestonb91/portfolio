import { SkillsProps } from "../types/utils"

function Skills({ skillsRef } : SkillsProps) {

    let frontendSkills = ["Vue", "React"];
    let backendSkills = ["Vue", "React"];
    let miscenllaneous = ["Vue", "React"];

    return (
    <>
        {/* Main Content */}
        <div
            className="skill-container"
            ref={skillsRef}
        >
            <h1 className="header">Skills</h1>
            <div className="skill-body">             
                <div 
                    className="skill-section"
                > 
                    <div className="skill-title">Frontend</div>
                    <div className="skill-item-container">
                    {
                        frontendSkills.map((skill, index) => 
                            <div className="skill-item" key={index}>{skill}</div>
                        )
                    }
                    </div>
                </div>
                <div 
                    className="skill-section"
                > 
                    <div className="skill-title">Backend</div>
                    <div className="skill-item-container">
                    {
                        frontendSkills.map((skill, index) => 
                            <div className="skill-item" key={index}>{skill}</div>
                        )
                    }
                    </div>
                </div>
                <div 
                    className="skill-section"
                > 
                    <div className="skill-title">Miscellaneous</div>
                    <div className="skill-item-container">
                    {
                        frontendSkills.map((skill, index) => 
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