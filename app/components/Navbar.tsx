import Image from "next/image";
import Link from 'next/link';

// components/Navbar.tsx
export const Navbar = () => {
  return (
    <div className="absolute -top-2 -left-40 right-2 z-20 p-4 bg-transparent flex justify-between items-center translate-x-10 px-8">
      {/* Logo on the left */}
      <div className="flex items-center translate-x-2/4">
        <Image src="/images/logo.png" alt="some" width={200} height={70} />
      </div>

      {/* Navbar content (centered) */}
      <nav className="flex-grow flex justify-center">
        <ul className="flex space-x-14 text-white font-thick">
          <li>
            <Link href="/" className="hover:text-blue-500 transition duration-300">
              HOME
            </Link>
          </li>
          <li>
            <Link href="#roadmap" className="hover:text-blue-500 transition duration-300">
              ROADMAP
            </Link>
          </li>
          <li>
            <Link href="#games" className="hover:text-blue-500 transition duration-300">
              GAMES
            </Link>
          </li>
          <li>
            <Link href="#faqs" className="hover:text-blue-500 transition duration-300">
              FAQS
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-500 transition duration-300">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      {/* Join Discord Button (Right side) */}
      <div className="ml-auto">
        <a
          href="https://discord.com/invite/noceilinggames"  // Replace with your Discord invite link
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer"
          className="bg-blue-900 text-white px-2 py-0.2 rounded-lg hover:bg-black transition duration-300 flex items-center -translate-x-10 -space-x-5"
        >
          {/* Discord Logo (using Next.js Image component) */}
          <Image
            src="/images/discord.png"
            alt="Discord Logo"
            width={50}
            height={50}
            className="-translate-x-3"
          />
          <span>DISCORD</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
