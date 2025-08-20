import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

type IntroductionProps = {
  className?: string;
};

export default function Introduction({ className }: IntroductionProps) {
  return (
    <section className={`section-container ${className ?? ''}`}>
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-12 text-center md:text-left">
          {/* Text on the left */}
          <div className="md:w-2/3 w-full space-y-6">
            <ScrollAnimation animation="fade-in-left">
              <h1 className="text-7xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
                Zach Taylor
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in-left" delay={200}>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Software engineer passionate about building scalable applications and learning new technologies.
                Specializing in low-level systems and embedded programming.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in-left" delay={400}>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold text-lg rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                View Resume
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </ScrollAnimation>
          </div>

          {/* Image on the right */}
          <div className="md:w-1/3 w-full flex justify-center md:justify-end">
            <ScrollAnimation animation="fade-in-right" delay={300}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 scale-110"></div>
                <Image
                  src="/profile.jpg"
                  alt="Zach Taylor"
                  width={320}
                  height={320}
                  className="relative object-cover rounded-full shadow-elegant border-4 border-border"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}