import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <nav className="max-w-3xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-lg font-semibold">Zach Taylor</Link>
        <div className="space-x-6 text-sm">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
        </div>
      </nav>
    </header>
  );
}