import "./Hero.css";
import { Link } from 'react-router-dom'; 


function Hero() {
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
      <main className=" text-center mt-56 background">
        <p className="text-1red text-7xl font-bold drop-shadow-xl">
          BEST IDEAS
        </p>
        <p className="text-1white  text-7xl">FOR YOUR BUSINESS</p>
        <p className="text-1white text-xl mt-96 ">Find out more</p>

   

      <Link to="services" onClick={() => scrollToSection('services')} className="mr-16 scroll-down">
          
          </Link>

        <section className="bg-2red mt-32 p-11">
          <p className="text-7xl font-semibold text-1white">
            We've got what you need
          </p>
          <p className="text-1white text-center text-lg w-[500px] m-auto mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </p>
        </section>
      </main>
    </>
  );
}

export default Hero;
