import "./app.scss" 
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallex from "./components/Parallex/Parallex";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Test from "./components/Test/Test";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero></Hero>
      </section>

      <section id="Services">
        <Parallex type="services" />
      </section>
      <section><Services></Services></section>
      <section id="Portfolio">
        <Parallex type="portfolio" />{" "}
      </section>
     <Portfolio></Portfolio>
      <section id="Contact">Contact </section>
      <section id="About">About </section>
      {/* <Test/> */}
    </div>
  );
};

export default App;
