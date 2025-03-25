import { RefObject } from "react";

    interface SidebarProps {
        scrollToSection: (element: HTMLElement | null) => void,
        refs: {
            about: RefObject<HTMLInputElement | null>;
            experience: RefObject<HTMLInputElement| null>;
            projects: RefObject<HTMLInputElement| null>;
            stack: RefObject<HTMLInputElement| null>;
        }
    }

function Sidebar( {scrollToSection, refs} : SidebarProps ) {

    return (
        <>
            <div
                className="flex flex-col border-2 border-white w-1/10 h-screen"
            >
                <button 
                    className="button"
                    onClick={()=>scrollToSection(refs.about.current)}
                >About</button>
                
                <button 
                    className="button"
                    onClick={()=>scrollToSection(refs.experience.current)}
                >Experience</button>
                
                <button 
                    className="button"
                    onClick={()=>scrollToSection(refs.projects.current)}
                >Projects</button>
                
                <button 
                    className="button"
                    onClick={()=>scrollToSection(refs.stack.current)}
                >Stack</button>
            </div>
        </>
    )

}

export default Sidebar
