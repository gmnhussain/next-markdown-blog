import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="flex">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-3 text-2xl font-bold text-gray-900">
                Diary
              </span>
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-gray-600 hover:text-indigo-600">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
