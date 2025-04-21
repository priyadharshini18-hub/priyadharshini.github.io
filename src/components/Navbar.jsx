import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white sticky top-0 z-50">
      <ul className="flex gap-8 text-sm font-mono">
        <li><a href="#home" className="hover:text-green-400">Home</a></li>
        <li><a href="#about" className="hover:text-green-400">About Me</a></li>
        <li><a href="#work" className="hover:text-green-400">Work Experience</a></li>
        <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
        <li><a href="#leadership" className="hover:text-green-400">Leadership</a></li>
      </ul>
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
          href="priyadharshini6508@gmail.com"
          className="hover:text-green-400"
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
