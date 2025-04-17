import { SidebarProps } from "../types/utils";

function Sidebar( {scrollToSection, refs} : SidebarProps ) {

    return (
        <>
            <div className="sidebar">
                <button 
                    className="sidebar-button"
                    onClick={()=>scrollToSection(refs.about.current)}
                >About</button>
                <hr className="sidebar-hr"/>
                <button 
                    className="sidebar-button"
                    onClick={()=>scrollToSection(refs.experience.current)}
                >Experience</button>
                <hr className="sidebar-hr"/>
                <button 
                    className="sidebar-button"
                    onClick={()=>scrollToSection(refs.projects.current)}
                >Projects</button>
                <hr className="sidebar-hr"/>
                <button 
                    className="sidebar-button"
                    onClick={()=>scrollToSection(refs.skills.current)}
                >Skills</button>
            </div>
        </>
    )
}

export default Sidebar
