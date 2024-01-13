import "./styles/app.scss";
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/hero/Hero";
import Parallax from "./component/parallax/Parallax";

function App() {
  return (
    <>
      <div className="app">
        <section id="Homepage">
          <Navbar />
          <Hero />
        </section>
        <section id="Services">
          <Parallax type="services" />
        </section>
        <section>Services</section>
        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>
        <section>Portfolio1</section>
        <section>Portfolio2</section>
        <section id="About">Portfolio3</section>
        <section id="Contact">Contact</section>
      </div>
    </>
  );
}

export default App;
