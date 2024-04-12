import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navigation.css';

function Navigation() {
  const scrollToSection = (id) => {
    console.log('Scrolling to section:', id);
    const element = document.getElementById(id);
    console.log('Element:', element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <>
      <nav className="flex items-center justify-between text-1white font-semibold py-4 px-36 sticky z-10 navigation">
        <div className="flex items-center flex-shrink-0 mr-6">
          <img src="src/assets/blaqbox-logo.png" alt="" />
        </div>

        <div className="text-lg text-1white">
          <Link to="services" onClick={() => scrollToSection('services')} className="mr-16">
            Services
          </Link>
          <Link to="about" onClick={() => scrollToSection('about')} className="mr-16">
            About
          </Link>
          <Link to="projects" onClick={() => scrollToSection('projects')} className="mr-16">
            Project
          </Link>
          <Link to="contact" onClick={() => scrollToSection('contact')} className="">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
