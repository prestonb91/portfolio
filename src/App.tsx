import { useRef } from "react";
import "./styles/styles.css";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {

    const aboutRef = useRef<HTMLInputElement | null>(null);
    const experienceRef = useRef<HTMLInputElement | null>(null);
    const projectsRef = useRef<HTMLInputElement | null>(null);
    const skillsRef = useRef<HTMLInputElement | null>(null);

    const scrollToSection = (ref: HTMLElement | null) => {
        ref?.scrollIntoView({ behavior: "smooth"})
    }

    return (
      <>
      <div className="container">
        {/* Sidebar */}
        <Sidebar
          scrollToSection={scrollToSection}
          refs={{ about: aboutRef, experience: experienceRef, projects: projectsRef, skills: skillsRef }}
        />

        {/* Main Content */}
        <div className="main-content">
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
            {/* Skills Section */}
            <Skills
                skillsRef={skillsRef}
            />
        </div>
      </div>
      </>
    )
}

export default App
