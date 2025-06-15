import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Introduction from '../../components/Introduction';
import BackToTop from '../../components/BackToTop';

export default function Page() {
  return (
    <>
      <main className="min-h-screen text-foreground max-w-7xl mx-auto px-8 py-12">
        <Introduction className="mb-5 "  />
        <About className="mb-20" />
        <Projects className="mb-20" />
        <Skills  />
      </main>
      <BackToTop />
    </>   
  );
}