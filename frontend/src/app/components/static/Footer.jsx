import React from 'react';
import { FaDiscord, FaTwitter, FaFutbol } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3 text-cyan-400 text-2xl font-bold">
          <FaFutbol className="text-white" />
          <span>UTF League</span>
        </div>

        {/* Navigation / Links */}
        <ul className="flex flex-wrap gap-6 text-sm text-gray-300">
          <li><a href="#home" className="hover:text-white transition">Home</a></li>
          <li><a href="#rules" className="hover:text-white transition">Rules</a></li>
          <li><a href="#fixtures" className="hover:text-white transition">Fixtures</a></li>
          <li><a href="#standings" className="hover:text-white transition">Standings</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        </ul>

        {/* Socials */}
        <div className="flex gap-4 text-xl">
          <a href="https://discord.gg/yourlink" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition">
            <FaDiscord />
          </a>
          <a href="https://twitter.com/utfleague" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} UTF League — FC 25 Ultimate Team League. All rights reserved.
      </div>
    </footer>
  );
}
