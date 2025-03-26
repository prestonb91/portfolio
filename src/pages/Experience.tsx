import { ExperienceProps } from "../types/utils"

function Experience({ experienceRef } : ExperienceProps) {

    return (
    <>
        {/* Main Content */}
        <div
            className="border-2 border-white text-white h-screen"
            ref={experienceRef}
        >
            <h1>Experience</h1>
        </div>
    </>
    )

}

export default Experience;