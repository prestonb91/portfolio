import { AboutProps } from "../types/utils";

function About({ aboutRef } : AboutProps) {

    return (
    <>
        {/* Page */}
        <div
            className="about-container"
            ref={aboutRef}
        >
            {/* Body */}
            <div className="about-body">
                {/* Name Header */}
                <h1 className="about-header">
                    <div>Preston Boardman</div>
                    <div>Full Stack Developer</div>
                </h1>
                <hr></hr>
                {/* Intro Card */}
                <div className="about-intro">
                    Hello, my name is Preston, a bilingual engineer interested in Full Stack Development and Game Development with a background in HR. Thank you for visiting my page!
                </div>
            </div>
            <div className="profile-picture-container">
                {/* {Profile Picture} */}
                <div>
                    <img
                        className="profile-image"
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