import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="w-full flex justify-center sticky top-0 z-50 bg-[#1B1B1B] py-4 shadow-sm">
      <nav className="w-[70%] flex justify-between items-center text-white">
        {/* Menu - left side */}
        <ul className="flex gap-8 text-sm font-mono">
          <li><a href="#home" className="hover:text-green-400">Home</a></li>
          <li><a href="#about" className="hover:text-green-400">About Me</a></li>
          <li><a href="#work" className="hover:text-green-400">Work Experience</a></li>
          <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
          <li><a href="#leadership" className="hover:text-green-400">Leadership</a></li>
          <li><a href="#contactme" className="hover:text-green-400">Contach Me</a></li>
        </ul>

        {/* Icons - right side */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://www.linkedin.com/in/priyadharshini-ganeshkumar/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:priyadharshini6508@gmail.com"
            className="hover:text-green-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
