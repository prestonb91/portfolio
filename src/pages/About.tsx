import { AboutProps } from "../types/utils";

function About({ aboutRef } : AboutProps) {

    return (
    <>
        {/* Main Content */}
        <div
            className="border-2 border-white text-white h-screen"
            ref={aboutRef}
        >
            <h1>About</h1>
        </div>
    </>
    )

}

export default About;