import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonals from "./components/Testimonals";
import YourReq from "./components/YourReq";
import Project from "./components/Project";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <main className="w-full text-white overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Project />
      <Achievements />
      <Testimonals />
      <YourReq />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
