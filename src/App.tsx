import Sidebar from "./components/Sidebar";
import "./styles/utils.css";
import { Ref } from "react";

function App() {

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth"})
  }

    return (
      <>
      <div className="bg-black flex h-screen">
        {/* Sidebar */}
        <Sidebar/>

        {/* Main Content */}
        <div className="w-5/6">
          {/* About Section */}
          <section
            className="border-2 border-white text-white h-screen"
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
