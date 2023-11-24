import "./app.scss" 
import Navbar from "./components/Navbar/Navbar";
import Test from "./components/Test/Test";
const App = () => {
  return (
    <div>
      <section id="homepage">
        <Navbar />
      </section>
      <section id="">
        <a href="">Hero</a>
      </section>
      <section id="services">Parallax</section>
      <section>Services</section>
      <section id="portfolio">Parallax </section>
      <section>Portfolio 1</section>
      <section>Portfolio 2</section>
      <section>Portfolio 3</section>
      <section id="contact">Contact </section>
      <section id="about">About </section>
      {/* <Test/> */}
    </div>
  );
};

export default App;
