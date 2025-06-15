export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <section id="about" className="mb-16">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="mb-4 text-gray-300">
          Hi, I&apos;m Zach! You can find me on{' '}
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            LinkedIn
          </a>{' '}
          and{' '}
          <a
            href="https://github.com/Zacharyat19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </section>

      <section id="projects">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <ul className="space-y-4 text-indigo-400">
          <li>
            <a
              href="https://github.com/Zacharyat19/project1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Project 1
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Zacharyat19/project2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Project 2
            </a>
          </li>
          {/* Add more projects here */}
        </ul>
      </section>
    </main>
  );
}