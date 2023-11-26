import "./app.scss" 
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallex from "./components/Parallex/Parallex";
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
      <section>Services</section>
      <section id="Portfolio">
        <Parallex type="portfolio" />{" "}
      </section>
      <section>Portfolio 1</section>
      <section>Portfolio 2</section>
      <section>Portfolio 3</section>
      <section id="Contact">Contact </section>
      <section id="About">About </section>
      {/* <Test/> */}
    </div>
  );
};

export default App;
