import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import Services from "./components/Services";
import About from "./components/About";
import Reasons from "./components/Reasons";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Properties />
        <Services />
        <About />
        <Reasons />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
