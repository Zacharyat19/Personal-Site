import ScrollAnimation from './ScrollAnimation';

type ProjectsProps = {
  className?: string;
};

const projects = [
  {
    title: "Patient Monitoring Robot",
    description: "A robotic monitoring system designed for nursing homes that detects falls and abnormal movements.",
    tech: ["Python", "OpenCV", "Linux", "Machine Learning"],
    github: "https://github.com/Zacharyat19/patient-monitoring",
  },
  {
    title: "TensorFlow Image Classification",
    description: "An image classification system for use in food processing.",
    tech: ["Python", "OpenCV", "TensorFlow", "Keras"],
    github: "https://github.com/Zacharyat19/TensorFlow-Image-Classification",
  },
  {
    title: "SIMD Image Filters",
    description: "Implements blur, sharpen, and edge detection image filters in C++ using both scalar (naive loop-based) and SIMD optimized versions.",
    tech: ["C++", "SIMD"],
    github: "https://github.com/Zacharyat19/SIMD-Image-Filter-Library",
  },
  {
    title: "Simulated Embedded Device Kernel",
    description: "Simulates a simple RTOS with basic task scheduling, inter-task communication, hardware abstraction, and time-based control.",
    tech: ["C++", "RTOS", "Firmware"],
    github: "https://github.com/Zacharyat19/Simulated-Embedded-Device-Kernel",
  },
  {
    title: "Personal Site",
    description: "Personal website built with Next.js and TypeScript, showcasing projects and hosted on Vercel.",
    tech: ["TypeScript", "Node.js", "Next.js", "React"],
    github: "https://github.com/Zacharyat19/Personal-Site",
  },
  {
    title: "System Verilog Driver",
    description: "Designed and implemented a SystemVerilog based VGA driver to animate and control a sprite in real time on an FPGA.",
    tech: ["System Verilog", "FPGA", "Quartus"],
    github: "https://github.com/Zacharyat19/System-Verilog-Driver",
  },
  {
    title: "Algorithm Benchmark Framework",
    description: "Benchmarks algorithms with high resolution timing, aiming to evaluate performance for various data sizes and algorithm types.",
    tech: ["C++", "CLI"],
    github: "https://github.com/Zacharyat19/Algorithm-Benchmark-Framework",
  },
];

export default function Projects({ className = '' }: ProjectsProps) {
  return (
    <section id="projects" className={`py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and technical projects
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ title, description, tech, github }, index) => (
            <ScrollAnimation 
              key={title} 
              animation="fade-in-up" 
              delay={100 + (index % 3) * 100}
            >
              <div className="group relative bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-[1.02] hover:border-primary/40 overflow-hidden flex flex-col h-full">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {title}
                    </h3>
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 hover:bg-primary/10 rounded-lg hover:scale-110 focus:outline-none focus:ring-0"
                        aria-label={`${title} GitHub repository`}
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.73-4.042-1.61-4.042-1.61-.546-1.39-1.335-1.76-1.335-1.76-1.09-.745.083-.73.083-.73 1.204.085 1.837 1.237 1.837 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.776.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.123-.3-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.004-.404c1.02.005 2.046.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.876.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.63-5.48 5.925.43.37.823 1.103.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .32.216.694.825.576C20.565 22.297 24 17.798 24 12.5 24 5.87 18.627.5 12 .5z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3 flex-1">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="bg-secondary/80 text-secondary-foreground px-3 py-1.5 rounded-full text-xs font-medium border border-border/50 group-hover:border-primary/30 focus:outline-none focus:ring-0"
                      >
                        {t}
                      </span>
                    ))}
                    {tech.length > 4 && (
                      <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-medium border border-primary/30">
                        +{tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300 mt-auto focus:outline-none focus:ring-0"
                    >
                      View Project
                      <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}