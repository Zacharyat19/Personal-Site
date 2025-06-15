type AboutProps = {
  className?: string; // optional className prop
};

export default function About({ className = '' }: AboutProps) {
  return (
    <section id="about" className={className}>
      <h2 className="text-5xl font-bold mb-6 text-sky-300">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Text content */}
        <div className="text-gray-300 text-lg leading-relaxed space-y-4">
          <p>Hello! I&apos;m Zach, a passionate software engineer specializing in low-level systems and embedded programming. 
        With a degree from Oregon State University and hands-on experience at Rohde & Schwarz, I enjoy building efficient, reliable tools and working close to the hardware level.</p>
          <p>I have experience across a broad range of technologies including Python, TypeScript, C++, Go, and Assembly. I&apos;m proficient with frameworks and tools like Node.js, 
        FastAPI, TensorFlow, Docker, Git, and Jenkins. I&apos;m comfortable working with Linux/Unix environments and developing both firmware and web applications.</p>
          <p>I am actively seeking new opportunities where I can grow and learn. If you&apos;re looking for a motivated developer with a strong willingness to learn and contribute, feel free to reach out!</p>
        </div>
      </div>
    </section>
  );
}
