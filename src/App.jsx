import 'boxicons'
import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Teams from "./components/Teams/Teams";
import Projects from './components/Projects/Projects';
import { BrowserRouter } from 'react-router-dom';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navigation />
        <Hero />
        <Services />
        <About />
        <Teams />
        <Projects />
        <Contact/>
        
      </>
    </BrowserRouter>
  );
}

export default App;
