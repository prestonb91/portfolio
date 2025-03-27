import { AboutProps } from "../types/utils";

function About({ aboutRef } : AboutProps) {

    return (
    <>
        {/* Page */}
        <div
            className="about-container"
            ref={aboutRef}
        >
            {/* Name Header */}
            <div className="about-header">
                <div>Preston Boardman</div>
                <div>Full Stack Developer</div>
            </div>
            <hr className=""></hr>
            {/* Body */}
            <div
                
            >
                {/* Intro Card */}
                <div className="about-intro">
                    Hello, my name is Preston, a bilingual engineer interested in Full Stack Development and Game Development with a background in HR. Thank you for visiting my page!
                </div>
                {/* {Profile Picture} */}
                <div>
                    <img
                        className="profile-picture"
                        src="src/assets/profilePicture.jpg" 
                        alt="Profile Picture"
                    />
                </div>
            </div>
        </div>
    </>
    )

}

export default About;