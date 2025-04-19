import { AboutProps } from "../types/utils";
import { useTranslation } from 'react-i18next';

function About({ aboutRef } : AboutProps) {
    const { t } = useTranslation();

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
                    <div>{t('about.name')}</div>
                    <div>{t('about.title')}</div>
                </h1>
                <hr></hr>
                {/* Intro Card */}
                <div className="about-intro">
                {t('about.intro')}
                </div>
            </div>
            <div className="profile-picture-container">
                {/* {Profile Picture} */}
                <div>
                    <img
                        className="profile-image"
                        src="/assets/profile-picture.jpg" 
                        alt="Profile Picture"
                    />
                </div>
            </div>
        </div>       
    </>
    )

}

export default About;