import { useRef } from "react";


import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import MainProject from "./components/MainProject";
import Footer from "./components/Footer";
import { ThemeProvider, createTheme } from "@mui/material";



const myTheme = createTheme({});

type refProps = {
  headerRef: React.RefObject<HTMLDivElement | null>;
  introductionRef: React.RefObject<HTMLDivElement | null>;
  techRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
};

function App() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const introductionRef = useRef<HTMLDivElement | null>(null);
  const techRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider theme={myTheme}>
      <div className="App" style={{ backgroundColor: "#FEFAE0" }}>
        <Header
          headerRef={headerRef}
          introductionRef={introductionRef}
          techRef={techRef}
          projectsRef={projectsRef}
        />
        <Introduction introductionRef={introductionRef} />
        <Techstack techRef={techRef} />
        <MainProject />
        <Projects projectsRef={projectsRef} />
      
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
