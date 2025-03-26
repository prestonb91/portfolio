import { SidebarProps } from "../types/utils";

function Sidebar( {scrollToSection, refs} : SidebarProps ) {

    return (
        <>
            <div
                className="flex flex-col border-2 border-white w-1/10 h-screen fixed"
            >
                <button 
                    className="button"
                    onClick={()=>scrollToSection(refs.about.current)}
                >About</button>
                <hr className="w-4/6 h-1 bg-gray-500 mx-auto"/>
                <button 
                    className="button"
                    onClick={()=>scrollToSection(refs.experience.current)}
                >Experience</button>
                <hr className="w-4/6 h-1 bg-gray-500 mx-auto"/>
                <button 
                    className="button"
                    onClick={()=>scrollToSection(refs.projects.current)}
                >Projects</button>
                <hr className="w-4/6 h-1 bg-gray-500 mx-auto"/>
                <button 
                    className="button"
                    onClick={()=>scrollToSection(refs.stack.current)}
                >Stack</button>
            </div>
        </>
    )

}

export default Sidebar
