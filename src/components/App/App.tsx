import { useState } from "react";
import "./App.css";

import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import AboutWebsite from "../AboutWebsite/AboutWebsite";
import Contact from "../Contact/Contact";

function App() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <AboutWebsite></AboutWebsite>
      <Contact></Contact>
    </>
  );
}

export default App;
