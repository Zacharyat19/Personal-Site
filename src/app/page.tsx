import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-20">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}