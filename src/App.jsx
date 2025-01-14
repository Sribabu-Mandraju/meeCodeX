import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonals from "./components/Testimonals";
import YourReq from "./components/YourReq";
import Project from "./components/Project";
import About from "./components/About";
import Services from "./components/Services";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the toast styles

function App() {
  return (
    <main className="w-full text-white overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Project />
      <Testimonals />
      <YourReq />
      <Contact />
      <Footer />
      <ToastContainer />
    </main>
  );
}

export default App;
