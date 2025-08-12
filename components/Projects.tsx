type ProjectsProps = {
  className?: string;
};

const projects = [
  {
    title: "Patient Monitoring Robot",
    description: "A robotic monitoring system designed for nursing homes that detects falls and abnormal movements.",
    tech: ["Python", "OpenCV", "ROS2", "Linux", "Embedded", "AI", "Machine Learning"],
    github: "https://github.com/Zacharyat19/patient-monitoring",
  },
  {
    title: "TensorFlow Image Classification",
    description: "An image classification system using Python OpenCV with TensorFlow’s transfer learning to support real-time and batch image processing.",
    tech: ["Python", "OpenCV", "TensorFlow", "Keras", "Machine Learning", "AI"],
    github: "https://github.com/Zacharyat19/TensorFlow-Image-Classification",
  },
  {
    title: "SIMD Image Filters",
    description: "Implements blur, sharpen, and edge detection image filters in C++ using both scalar (naive loop-based) and SIMD optimized versions.",
    tech: ["C++", "SIMD", "Runtime Optimization"],
    github: "https://github.com/Zacharyat19/SIMD-Image-Filter-Library",
  },
  {
    title: "Simulated Embedded Device Kernel",
    description: "Simulates a simple RTOS in C++ with basic task scheduling, inter-task communication, hardware abstraction, and time-based control.",
    tech: ["C++", "RTOS", "Firmware"],
    github: "https://github.com/Zacharyat19/Simulated-Embedded-Device-Kernel",
  },
  {
    title: "Personal Site",
    description: "Personal website built with Next.js and TypeScript, showcasing projects and hosted on Vercel for fast, reliable deployment.",
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
    description: "Benchmarks algorithms with high-resolution timing, aiming to evaluate performance for various data sizes and algorithm types.",
    tech: ["C++", "CLI"],
    github: "https://github.com/Zacharyat19/Algorithm-Benchmark-Framework",
  },
];

export default function Projects({ className = '' }: ProjectsProps) {
  return (
    <section id="projects" className={className}>
      <h2 className="text-5xl font-bold mb-8 text-sky-300 text-center md:text-left">PROJECTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map(({ title, description, tech, github }) => (
          <div
            key={title}
            className="bg-muted/40 transition-colors p-6 rounded-xl shadow-lg flex flex-col items-center text-center space-y-4"
          >
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold mb-2 underline text-sky-300 hover:text-sky-400 transition"
            >
              {title}
            </a>
            <p className="text-gray-300 mb-4">{description}</p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {tech.map((t) => (
                <span
                  key={t}
                  className="bg-sky-700 text-sky-200 px-2 py-1 rounded text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            <div>
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-300 inline-block"
                  aria-label={`${title} GitHub`}
                >
                  {/* GitHub Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.73-4.042-1.61-4.042-1.61-.546-1.39-1.335-1.76-1.335-1.76-1.09-.745.083-.73.083-.73 1.204.085 1.837 1.237 1.837 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.776.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.123-.3-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.004-.404c1.02.005 2.046.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.876.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.63-5.48 5.925.43.37.823 1.103.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .32.216.694.825.576C20.565 22.297 24 17.798 24 12.5 24 5.87 18.627.5 12 .5z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}