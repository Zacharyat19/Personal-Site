import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

type IntroductionProps = {
  className?: string;
};

export default function Introduction({ className }: IntroductionProps) {
  return (
    <section
      id="home"
      className={`flex flex-col items-center pt-32 pb-28 sm:pt-32 sm:pb-40 lg:pt-36 lg:pb-32 xl:pt-52 xl:pb-56 relative bg-background ${className ?? ''}`}
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Hero Content */}
          <ScrollAnimation animation="fade-in-up">
            <div className="space-y-6">
              <p className="text-primary font-medium text-lg tracking-wide uppercase">
                Software Engineer
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
                Zach Taylor
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
                Creative engineer who designs scalable applications and develops tailored solutions that meet customer needs.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in-up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold text-lg rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                View My Work
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a
                href="/Resume.pdf"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold text-lg rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                View Resume
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </ScrollAnimation>

          {/* Hero Image */}
          <ScrollAnimation animation="fade-in-up" delay={400}>
            <div className="relative mt-12">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110 animate-pulse pointer-events-none"></div>
              <div className="relative">
                <Image
                  src="/profile.jpg"
                  alt="Zach Taylor - Software Engineer"
                  width={300}
                  height={300}
                  className="relative object-cover rounded-full shadow-glow border-4 border-primary/20"
                  priority
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}