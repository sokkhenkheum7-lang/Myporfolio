import Navbar from "./assets/Components/Navbar";
import HeroSection from "./assets/Components/HeroSection";
import TechSlider from "./assets/Components/TechSlider";
import About from "./assets/Components/About";
import Projects from "./assets/Components/Projects";
import Skill from "./assets/Components/Skill";
import Experience from "./assets/Components/Experience";
import Contact from "./assets/Components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TechSlider />
      <About/>
      <Projects/>
      <Skill/>
      <Experience/>
      <Contact/>
    </>
  );
}

export default App;