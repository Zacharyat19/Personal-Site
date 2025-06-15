export default function About() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <p>
        I’m a software engineer passionate about embedded systems, C++, and tooling. I’ve worked on network testing tools and low-level software systems.
      </p>
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/zacharyat19"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Zacharyat19"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}