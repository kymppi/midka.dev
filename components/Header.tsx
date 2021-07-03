import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1 className="text-6xl font-bold text-center my-8">Midka.DEV</h1>
      <nav>
        <ul className="flex flex-row justify-center my-4 space-x-4">
          <li>
            <Link href="/" passHref>
              <a className="">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="">About</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="">Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
