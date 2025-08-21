import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Introduction from '../../components/Introduction';
import Contact from '../../components/Contact';
import Navigation from '../../components/Navigation';
import BackToTop from '../../components/BackToTop';

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen text-foreground">
        <Introduction />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <BackToTop />
    </>   
  );
}