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
      <body className="bg-background text-foreground font-sans min-h-screen flex flex-col">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Zach Taylor
              </div>

              {/* Nav links */}
              <div className="hidden md:flex space-x-8">
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-lg font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-lg font-medium transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-lg font-medium transition-colors"
                >
                  Skills
                </a>
              </div>

              {/* Social icons */}
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/zachtaylor22775/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent/10 rounded-lg"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/Zacharyat19"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent/10 rounded-lg"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="mailto:Zacharyat19@gmail.com"
                  aria-label="Email"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent/10 rounded-lg"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow pt-16">{children}</main>
      </body>
    </html>
  );
}