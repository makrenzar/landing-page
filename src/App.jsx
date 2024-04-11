import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Services from "./components/Services/Services";
import 'boxicons'

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Hero></Hero>
      <Services></Services>
      <About></About>
    </>
  );
}

export default App;
