import React from "react";
import Particles from "react-tsparticles";
import "./App.css";
import LowBar from "./components/ColorBar/LowBar/LowBar";
import TopBar from "./components/ColorBar/TopBar/TopBar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import particlesOptions from "./particles.json";
import Porfolio from "./components/Portfolio/Porfolio";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Particles options={particlesOptions} width="20px" height="20%" />
      <TopBar />
      <Header />
      <Main />
      <Porfolio />
      <Skills />
      <Experiences />
      <Footer />
      <LowBar />
    </div>
  );
}

export default App;
