import './globals.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-900 text-gray-100 font-sans min-h-screen flex flex-col">
        <nav className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0 text-2xl font-bold text-sky-300">
                Zach&apos;s Site
              </div>

              {/* Nav links */}
              <div className="hidden md:flex space-x-8">
                <a
                  href="#intro"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-semibold"
                >
                  Intro
                </a>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-semibold"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-semibold"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-semibold"
                >
                  Skills
                </a>
              </div>

              {/* Social icons */}
              <div className="flex space-x-4 text-gray-300 hover:text-white">
                <a
                  href="https://www.linkedin.com/in/zachtaylor22775/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-sky-400"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/Zacharyat19"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-sky-400"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="mailto:Zacharyat19@gmail.com"
                  aria-label="Email"
                  className="hover:text-sky-400"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}