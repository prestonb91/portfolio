function ProjectCard ({ title, image, stack, description, link, repo }: {title: string, image: string, stack: string[], description: string, link: string, repo: string}) {

    return(
    <div className="project-card">
        {
            image.endsWith(".mp4") ? (
            <video
                className="project-card-image"
                src={image}
                autoPlay
                loop
                muted
                playsInline
            />
            ) : (
            <img
                className="project-card-image"
                src={image}
                alt="Project image"
            />
            )
        }
        <div className="project-card-right">
            <div className="corner-bl"></div>
            <h2 className="project-card-title">{title}</h2>
            <div className="project-stack-container">
                {stack.map((stack, index) => 
                    <div className="project-stack" key={index}>{stack}</div>
                )}
            </div>
            <div className="project-card-description">
                {description}
            </div>
            <div className="project-site-link-container">
                <a 
                    href={link}
                    className="project-site-link"
                >
                    <img src="/assets/external-link.svg" className="project-site-link-icon" />
                    Live
                </a>
                <a 
                    href={repo}
                    className="project-site-link"
                >
                    <img src="/assets/external-link.svg" className="project-site-link-icon" />
                    Repo
                </a>
            </div>
        </div>
    </div>
    )
}

export default ProjectCard