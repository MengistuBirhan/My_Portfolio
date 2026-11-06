import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
