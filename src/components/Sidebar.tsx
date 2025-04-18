import { SidebarProps } from "../types/utils";

function Sidebar( {scrollToSection, refs} : SidebarProps ) {

    return (
        <>
            <div className="sidebar">
                <button 
                    className="sidebar-button"
                    onClick={()=>scrollToSection(refs.about.current)}
                >
                    About
                </button>
                <hr className="sidebar-hr"/>
                <button 
                    className="sidebar-button"
                    onClick={()=>scrollToSection(refs.experience.current)}
                >
                    Experience
                </button>
                <hr className="sidebar-hr"/>
                <button 
                    className="sidebar-button"
                    onClick={()=>scrollToSection(refs.projects.current)}
                >
                    Projects
                </button>
                <hr className="sidebar-hr"/>
                <button 
                    className="sidebar-button"
                    onClick={()=>scrollToSection(refs.skills.current)}
                >
                    Skills
                </button>
                <div className="sidebar-link-container">
                    <a href="https://github.com/prestonb91">
                        <img src="/assets/github-icon.png" className="sidebar-link-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/preston-boardman-8210a671/" >
                        <img src="/assets/linkedin-icon.png" className="sidebar-link-icon" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Sidebar
