import ScrollAnimation from './ScrollAnimation';

type ProjectsProps = {
  className?: string;
};

const projects = [
  {
    title: "Patient Monitoring Robot",
    description: "A robotic monitoring system designed for nursing homes that detects falls and abnormal movements using computer vision and AI. The system provides real-time alerts and comprehensive monitoring capabilities.",
    tech: ["Python", "OpenCV", "Linux", "AI"],
    github: "https://github.com/Zacharyat19/patient-monitoring",
    featured: true,
    image: "/fall.gif",
    imageAlt: "Healthcare monitoring robot with sensors",
    objectPosition: "80% center",
    highlights: ["Real-time fall detection", "AI powered monitoring", "Automated alert system"]
  },
  {
    title: "TensorFlow Image Classification",
    description: "An advanced image classification system designed for food processing industries. Utilizes deep learning models to achieve high accuracy in quality control and automated sorting processes.",
    tech: ["Python", "OpenCV", "TensorFlow", "Keras"],
    github: "https://github.com/Zacharyat19/TensorFlow-Image-Classification",
    featured: true,
    image: "/tens.png",
    imageAlt: "AI neural network visualization",
    objectPosition: "40% center",
    highlights: ["Deep learning models", "High accuracy rate", "Image processing"]
  },
  {
    title: "Personal Site",
    description: "A modern, responsive personal website built with Next.js and TypeScript. Features smooth animations, optimized performance, and showcases technical projects with clean, professional design.",
    tech: ["TypeScript", "Node.js", "Next.js", "React"],
    github: "https://github.com/Zacharyat19/Personal-Site",
    featured: true,
    image: "/type.png",
    imageAlt: "Modern web development workspace",
    objectPosition: "60% center",
    highlights: ["Responsive design", "Optimized performance", "Modern tech stack"]
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
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const renderFeaturedProject = (project: typeof projects[0], index: number) => (
    <ScrollAnimation key={project.title} animation="fade-in-up" delay={100 + index * 100}>
      <a
        href={project.github || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="block" // makes the anchor fill the content
      >
        <div className="group relative backdrop-blur-sm border border-primary/40 bg-primary/5 rounded-3xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-[1.01]">
          {/* Existing card content remains unchanged */}
          <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
          <div className={`relative z-10 grid ${index % 2 === 0 ? 'lg:grid-cols-[2fr,1fr]' : 'lg:grid-cols-[1fr,2fr]'} gap-0 min-h-[400px]`}>
            <div className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-primary group-hover:text-primary/90 transition-colors duration-300">
                  {project.title}
                </h3>
                {project.github && (
                  <span className="text-muted-foreground p-3 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity">
                    {/* GitHub icon remains as indicator */}
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.73-4.042-1.61-4.042-1.61-.546-1.39-1.335-1.76-1.335-1.76-1.09-.745.083-.73.083-.73 1.204.085 1.837 1.237 1.837 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.776.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.123-.3-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.004-.404c1.02.005 2.046.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.876.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.63-5.48 5.925.43.37.823 1.103.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .32.216.694.825.576C20.565 22.297 24 17.798 24 12.5 24 5.87 18.627.5 12 .5z"/>
                    </svg>
                  </span>
                )}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{project.description}</p>
              {project.highlights && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/30 group-hover:border-primary/50 transition-colors duration-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className={`relative overflow-hidden bg-card/50 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
              <div className="w-full h-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: project.objectPosition || '50% center' }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </a>
    </ScrollAnimation>
  );

  const renderProject = ({ title, description, tech, github, featured }: typeof projects[0], index: number) => (
    <ScrollAnimation 
      key={title} 
      animation="fade-in-up" 
      delay={100 + (index % 3) * 100}
    >
      <a
        href={github || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="group relative backdrop-blur-sm border bg-card/30 border-border hover:border-primary/40 rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-[1.02] overflow-hidden flex flex-col h-full">
          <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col flex-1">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              {github && (
                <span className="text-muted-foreground p-2 opacity-50 group-hover:opacity-100 transition-opacity rounded-lg">
                  {/* GitHub icon remains as visual indicator */}
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.73-4.042-1.61-4.042-1.61-.546-1.39-1.335-1.76-1.335-1.76-1.09-.745.083-.73.083-.73 1.204.085 1.837 1.237 1.837 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.776.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.123-.3-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.004-.404c1.02.005 2.046.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.876.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.63-5.48 5.925.43.37.823 1.103.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .32.216.694.825.576C20.565 22.297 24 17.798 24 12.5 24 5.87 18.627.5 12 .5z" />
                  </svg>
                </span>
              )}
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3 flex-1">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary/80 text-secondary-foreground border border-border/50 group-hover:border-primary/30 transition-colors duration-300"
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
          </div>
        </div>
      </a>
    </ScrollAnimation>
  );

  return (
    <section id="projects" className={`py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my <span className="text-text-highlight font-medium">recent work</span> and <span className="text-text-highlight font-medium">technical projects</span>
            </p>
          </div>
        </ScrollAnimation>
        
        {/* Featured Projects Section */}
        <ScrollAnimation animation="fade-in-up" delay={200}>
          <div className="mb-20 space-y-12">
            {featuredProjects.map((project, index) => (
              <div key={project.title} className="w-full">
                {renderFeaturedProject(project, index)}
              </div>
            ))}
          </div>
        </ScrollAnimation>
        
        {/* Other Projects Section */}
        {otherProjects.length > 0 && (
          <ScrollAnimation animation="fade-in-up" delay={400}>
            <div>
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-title-accent mb-2">Other Projects</h3>
                <p className="text-body">
                  Additional <span className="text-text-highlight font-medium">technical projects</span> and <span className="text-text-highlight font-medium">experiments</span>
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project, index) => renderProject(project, index + featuredProjects.length))}
              </div>
            </div>
          </ScrollAnimation>
        )}
      </div>
    </section>
  );
}