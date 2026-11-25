import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Approach from "./components/Approach";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollAnimations from "./components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />
      <Hero />
      <About />
      <Approach />
      <Experience />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </>
  );
}
