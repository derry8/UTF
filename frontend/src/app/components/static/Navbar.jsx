'use client';
import { useState, useEffect } from 'react';
import '@fontsource/monomaniac-one';
import '@fontsource/lobster';
import '@fontsource/inter';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50">
      {/* Background layer changes on scroll */}
      <div
        className={`absolute inset-0 ${
          isScrolled ? 'bg-black backdrop-blur-xl' : 'bg-black opacity-70 backdrop-blur-xl'
        } z-40 transition-all duration-300`}
      />

      {/* Foreground content */}
      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <div className="text-white border-[rgb(0,191,255)] border-[2px] bg-black/30 backdrop-blur-md shadow-md rounded-md p-2 z-10">
            <Link href="/">
              <span className="text-[rgb(0,191,255)] font-fantasy font-light tracking-widest text-2xl">
                UTF
              </span>
            </Link>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-white font-inter font-medium">
              <span className="font-monoOne text-[rgb(0,191,255)]">01.</span> Home
            </Link>
            <Link href="/fixtures" className="text-white font-inter font-medium">
              <span className="font-monoOne text-[rgb(0,191,255)]">02.</span> Fixtures
            </Link>
            
            <Link href="/table" className="text-white font-inter font-medium">
              <span className="font-monoOne text-[rgb(0,191,255)]">03.</span> Table
            </Link>
            <Link href="/stats" className="text-white font-inter font-medium">
              <span className="font-monoOne text-[rgb(0,191,255)]">04.</span> Results
            </Link>
          </div>

          {/* Right side: Avatar & Menu Button */}
          <div className="flex items-center space-x-4 ml-auto">
            <div className="border-[3px] h-[3.5rem] w-[3.5rem] rounded-md shadow-md border-[rgb(0,191,255)] z-50 overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/1a/f8/b1/1af8b12b8fb5355f50a89ace28875c86.jpg"
                alt="Profile"
                className="object-fill  h-full w-full"
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {isOpen ? <X className="text-blue-600" /> : <Menu className="text-blue-600" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-white shadow">
          <Link href="/" className="block text-blue-600 hover:text-blue-800">Home</Link>
          <Link href="/teams" className="block text-blue-600 hover:text-blue-800">Teams</Link>
          <Link href="/fixtures" className="block text-blue-600 hover:text-blue-800">Fixtures</Link>
          <Link href="/standings" className="block text-blue-600 hover:text-blue-800">Standings</Link>
          <Link href="/players" className="block text-blue-600 hover:text-blue-800">Players</Link>
        </div>
      )}
    </nav>
  );
}
