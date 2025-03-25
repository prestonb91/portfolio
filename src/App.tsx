import Sidebar from "./components/Sidebar";
import "./styles/utils.css";
import { useRef } from "react";

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
          refs = {{ about: aboutRef, experience: experienceRef, projects: projectsRef, stack: stackRef }}
        />

        {/* Main Content */}
        <div className="w-9/10">
          {/* About Section */}
          <section
            className="border-2 border-white text-white h-screen"
            ref={aboutRef}
          >
            <h1>About</h1>
          </section>
          {/* Experience Section */}
          <section
            className="border-2 border-white text-white h-screen"
            ref={experienceRef}
          >
            <h1>Experience</h1>
          </section>
          {/* Projects Section */}
          <section
            className="border-2 border-white text-white h-screen"
            ref={projectsRef}
          >
            <h1>Projects</h1>
          </section>
          {/* Stack Section */}
          <section
            className="border-2 border-white text-white h-screen"
            ref={stackRef}
          >
            <h1>Stack</h1>
          </section>
          
        </div>
      </div>
      </>
    )
}

export default App
