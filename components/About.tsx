import ScrollAnimation from './ScrollAnimation';

type AboutProps = {
  className?: string; // optional className prop
};

export default function About({ className = '' }: AboutProps) {
  return (
    <section id="about" className={`section-container ${className}`}>
      <div className="w-full">
        <ScrollAnimation animation="fade-in-up">
          <h2 className="text-6xl font-bold mb-16 text-primary text-center">
            About Me
          </h2>
        </ScrollAnimation>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12">
            {/* Text content */}
            <div className="space-y-8">
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-elegant">
                  <p className="text-foreground text-lg leading-relaxed">
                    Hello! I&apos;m <span className="text-primary font-semibold">Zach</span>, a software engineer specializing in low-level systems and embedded programming.
                    With a degree from Oregon State University and hands-on experience at Rohde & Schwarz, I enjoy building efficient, reliable tools and working close to the hardware level.
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-elegant">
                  <p className="text-foreground text-lg leading-relaxed">
                    I have experience across a broad range of technologies including <span className="text-primary">Python, TypeScript, C++, Go, and Assembly</span>. I&apos;m proficient with frameworks and tools like Node.js,
                    FastAPI, TensorFlow, Docker, Git, and Jenkins. I&apos;m comfortable working with Linux/Unix environments and developing both firmware and web applications.
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={600}>
                <div className="bg-gradient-accent backdrop-blur-sm rounded-2xl p-8 border border-primary/20 shadow-glow">
                  <p className="text-foreground text-lg leading-relaxed">
                    I am actively seeking new opportunities where I can grow and learn. If you&apos;re looking for a motivated developer with a strong willingness to learn and contribute, feel free to reach out!
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}