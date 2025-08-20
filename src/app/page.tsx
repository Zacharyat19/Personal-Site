import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Introduction from '../../components/Introduction';
import BackToTop from '../../components/BackToTop';

export default function Page() {
  return (
    <>
      <main className="min-h-screen text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Introduction />
          <About />
          <Projects />
          <Skills />
        </div>
      </main>
      <BackToTop />
    </>   
  );
}