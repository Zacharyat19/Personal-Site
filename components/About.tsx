import ScrollAnimation from './ScrollAnimation';

type AboutProps = {
  className?: string; // optional className prop
};

export default function About({ className = '' }: AboutProps) {
  return (
    <section id="about" className={`py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about building efficient solutions and learning new technologies
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="max-w-4xl mx-auto">
          {/* Bio Content */}
          <div className="space-y-6">
            <ScrollAnimation animation="fade-in-right" delay={300}>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Software Engineer & Problem Solver</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Hello! I&apos;m <span className="text-primary font-semibold">Zach</span>, a software engineer specializing in low-level systems and optimizations.
                  With a degree from Oregon State University and hands-on experience at Rohde & Schwarz, I enjoy building efficient, reliable tools and working close to the hardware level.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in-right" delay={400}>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Technical Expertise</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I have experience across a broad range of technologies including <span className="text-primary font-medium">Python, TypeScript, C++, Go, and Assembly</span>. 
                  I&apos;m proficient with frameworks and tools like Node.js, FastAPI, TensorFlow, Docker, Git, and Jenkins. 
                  I&apos;m comfortable working with Linux/Unix environments and developing both firmware and web applications.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in-right" delay={500}>
              <div className="bg-gradient-accent/5 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                <p className="text-foreground leading-relaxed">
                  <strong className="text-primary">Currently seeking new opportunities</strong> where I can grow as an engineer. 
                  If you&apos;re looking for a motivated developer with a strong willingness to learn and contribute, I'd love to connect!
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Stats or highlights */}
        <ScrollAnimation animation="fade-in-up" delay={600}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { label: 'Years Experience', value: '3+' },
              { label: 'Projects Completed', value: '20+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Coffee Consumed', value: '∞' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}