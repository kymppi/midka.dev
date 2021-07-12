import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="text-gray-100 bg-gray-900 body-font shadow w-full">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href="/" passHref>
            <a className="mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
              About
            </a>
          </Link>
          <Link href="/projects">
            <a className="mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
              Projects
            </a>
          </Link>
          <Link href="/blog">
            <a className="mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
              Blog
            </a>
          </Link>
        </nav>
        <Link href="/">
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
            <div className="h-auto w-auto">
              <Image
                src="/../public/logo.svg"
                alt="Logo"
                width={100}
                height={62}
              />
            </div>
          </a>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <Link href="/contact">
            <a className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
