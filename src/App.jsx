import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Membership from "./components/Membership";
import Seo from "./components/Seo";
import Testimonals from "./components/Testimonals";

function App() {
  return (
    <main className="w-full text-white overflow-hidden">
      <Hero />
      <Features />
      <Membership />
      <Seo />
      <Achievements />
      <Testimonals />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
