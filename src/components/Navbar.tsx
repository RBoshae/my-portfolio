import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-4 mb-6 border-b boreder-zinc-200 dark:border-zinc-700">
      <div className="max-w-3xl mx-auto flex justify-between items-center px-4">
        <Link href="/" className="font-bold text-lg">
          Rick Boshae
        </Link>
        <div className="space-x-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );



