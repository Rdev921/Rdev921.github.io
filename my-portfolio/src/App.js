import './App.css';
import About from "./components/about/About.jsx";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Calender from "./components/github/Calender";

function App () {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Calender />
      <Projects />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;