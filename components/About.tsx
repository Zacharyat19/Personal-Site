export default function About() {
  return (
    <section id="about" className="prose prose-invert max-w-none">
      <h2>About Me</h2>
      <p>
        Hi, I’m Zach. I’m a software engineer specializing in low-level systems and embedded development.
      </p>
      <p>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
          LinkedIn
        </a>{' '}
        |{' '}
        <a href="https://github.com/Zacharyat19" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
          GitHub
        </a>
      </p>
    </section>
  );
}