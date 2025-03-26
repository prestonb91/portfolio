import { useRef } from "react";
import "./styles/utils.css";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";

function App() {

    const aboutRef = useRef<HTMLInputElement | null>(null);
    const experienceRef = useRef<HTMLInputElement | null>(null);
    const projectsRef = useRef<HTMLInputElement | null>(null);
    const stackRef = useRef<HTMLInputElement | null>(null);

    const scrollToSection = (ref: HTMLElement | null) => {
        ref?.scrollIntoView({ behavior: "smooth"})
    }

    return (
      <>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          scrollToSection={scrollToSection}
          refs={{ about: aboutRef, experience: experienceRef, projects: projectsRef, stack: stackRef }}
        />

        {/* Main Content */}
        <div className="w-9/10 ml-[10%]">
            {/* About Section */}
            <About
                aboutRef={aboutRef}
            />
            {/* Experience Section */}
            <Experience
                experienceRef={experienceRef}
            />
            {/* Projects Section */}
            <Projects
                projectsRef={projectsRef}
            />
            {/* Stack Section */}
            <Stack
                stackRef={stackRef}
            />
        </div>
      </div>
      </>
    )
}

export default App
