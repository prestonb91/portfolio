function ProjectCard ({ title, image, stack, description, link, repo }: {title: string, image: string, stack: string[], description: string, link: string, repo: string}) {

    return(
        <div 
        className="project-card"
    >
        <img
            className="project-card-image"
            src={image}
            alt="Profile Picture"
        />
        <div className="project-card-bottom">
            <h2 className="project-card-title">{title}</h2>
            <div className="project-stack-container">
                {stack.map(stack => 
                    <div className="project-stack">{stack}</div>
                )}
            </div>
            <div 
                className="project-card-description"
            >
                {description}
            </div>
            <div className="project-site-link-container">
                <a 
                    href={link} 
                    className="project-site-link"
                >
                    Visit Site <img src="src/assets/external-link.svg" className="project-site-link-icon" />
                </a>
                <div 
                    className="project-site-link"
                >
                    <a href={repo}>Visit Repo 
                        <img src="src/assets/external-link.svg" className="project-site-link-icon" />
                    </a>
                </div>
            </div>
        </div>
    </div>

    )
}

export default ProjectCard

{/* <div 
className="projects-card"
>
<img
    className="projects-card-image"
    src="src/assets/discover-nikkei.jpg" 
    alt="Profile Picture"
/>
<div className="projects-card-right">
    <h2 className="projects-card-title">Breeze</h2>
    <div className="projects-stack-container">
        {breezeStack.map(stack => 
            <div className="projects-stack">{stack}</div>
        )}
    </div>
    <div 
        className="projects-card-description"
    >
        ‬‭ Attendance management system with approval and employee mgmt. systems, using calendar plug-in
    </div>
    <div className="projects-site-link">Visit Site</div>
</div>
</div> */}