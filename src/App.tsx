import Sidebar from "./components/Sidebar";
import "./styles/utils.css";
import { useRef } from "react";

function App() {

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const stackRef = useRef(null);


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth"})
  }

    return (
      <>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          scrollToSection={scrollToSection}
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
          >
            <h1>Experience</h1>
          </section>
          {/* Projects Section */}
          <section
            className="border-2 border-white text-white h-screen"
          >
            <h1>Projects</h1>
          </section>
          {/* Stack Section */}
          <section
            className="border-2 border-white text-white h-screen"
          >
            <h1>Stack</h1>
          </section>
          
        </div>
      </div>
      </>
    )
}

export default App
