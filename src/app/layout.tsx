import './globals.css';

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
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}