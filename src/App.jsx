import "./app.scss" 
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Test from "./components/Test/Test";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero></Hero>
      </section>

      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax </section>
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
