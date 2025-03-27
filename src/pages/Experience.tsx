import { ExperienceProps } from "../types/utils"

function Experience({ experienceRef } : ExperienceProps) {

    return (
    <>
        {/* Main Content */}
        <div
            ref={experienceRef}
        >
            <h1>Experience</h1>
        </div>
    </>
    )

}

export default Experience;