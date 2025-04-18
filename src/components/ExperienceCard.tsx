function ExperienceCard ({ title, image, stack, description, link, repo }: {title: string, image: string, stack: string[], description: string, link: string, repo: string}) {

    return(
    <div className="experience-card">
        <img
            className="experience-card-image"
            src={image}
            alt="Profile Picture"
        />
        <div className="experience-card-bottom">
            <h2 className="experience-card-title">{title}</h2>
            <div className="experience-stack-container">
                {stack.map((stack, index) => 
                    <div className="experience-stack" key={index}>{stack}</div>
                )}
            </div>
            <div className="experience-card-description">
                {description}
            </div>
            <div className="experience-site-link-container"> 
                    <a 
                        href={link} 
                        className="experience-site-link"
                    > 
                        <img src="src/assets/external-link.svg" className="experience-site-link-icon" />
                        Site
                    </a>
                    <a 
                        href={repo}
                        className="experience-site-link"
                    >
                        <img src="src/assets/external-link.svg" className="experience-site-link-icon" />
                        Repo   
                    </a>
            </div>
        </div>
    </div>
    )
}

export default ExperienceCard