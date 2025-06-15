export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-12">
      {/* About Me Section */}
      <section id="about" className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I’m Zach</h1>
        <p className="mb-6 text-lg text-gray-700">
          Software developer passionate about low-level systems and building cool tools.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/zachtaylor22775/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Zacharyat19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <ul className="space-y-4 list-disc list-inside">
          <li>
            <a
              href="https://github.com/Zacharyat19/Personal-Site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Personal Site
            </a>{" "}
            - My personal website built with Next.js and Tailwind CSS.
          </li>
          <li>
            <a
              href="https://github.com/Zacharyat19/Another-Repo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Another Project
            </a>{" "}
            - Description of another cool project here.
          </li>
          {/* Add more projects here */}
        </ul>
      </section>
    </main>
  );
}