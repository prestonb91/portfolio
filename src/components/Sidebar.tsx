import { SidebarProps } from "../types/utils";
import { useTranslation } from 'react-i18next';

function Sidebar( {scrollToSection, refs} : SidebarProps ) {
    const { t } = useTranslation();

    return (
        <>
            <div className="sidebar">
                <button 
                    className="sidebar-button"
                    onClick={()=>scrollToSection(refs.about.current)}
                >
                    {t("sidebar.about")}
                </button>
                <hr className="sidebar-hr"/>
                <button 
                    className="sidebar-button"
                    onClick={()=>scrollToSection(refs.experience.current)}
                >
                    {t("sidebar.experience")}
                </button>
                <hr className="sidebar-hr"/>
                <button 
                    className="sidebar-button"
                    onClick={()=>scrollToSection(refs.projects.current)}
                >
                    {t("sidebar.projects")}
                </button>
                <hr className="sidebar-hr"/>
                <button 
                    className="sidebar-button"
                    onClick={()=>scrollToSection(refs.skills.current)}
                >
                    {t("sidebar.skills")}
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
