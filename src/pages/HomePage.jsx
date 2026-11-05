import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from './Contact';

export default function HomePage() {
  return (
    <>
      <div id="accueil">
        <Hero />
      </div>
      <div id="apropos">
        <About />
      </div>
      <div id="projets">
        <Projects />
      </div>
      <div id="competences">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
