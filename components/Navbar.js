import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-blue-600">
          ARNOLD.V1
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Contact
          </Link>
          <Link href="/education" className="text-gray-700 hover:text-blue-600">
            Education & Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
