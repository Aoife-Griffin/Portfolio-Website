import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-purple-950 text-white">
      <div className="max-w-7xl mx-auto flex justify-between p-6">

        <h1 className="text-yellow-400 text-3xl font-bold">
          🐝 Aoife Griffin
        </h1>

        <div className="flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}