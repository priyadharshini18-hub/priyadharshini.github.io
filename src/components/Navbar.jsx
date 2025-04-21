import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="w-full flex justify-center sticky top-0 z-50 bg-[#1B1B1B] py-6 shadow-md">
      <nav className="w-[80%] flex justify-between items-center text-white">
        {/* Menu - left side */}
        <ul className="flex gap-14 text-lg font-mono font-semibold tracking-wide">
          <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-green-400 transition-colors">About Me</a></li>
          <li><a href="#work" className="hover:text-green-400 transition-colors">Work Experience</a></li>
          <li><a href="#projects" className="hover:text-green-400 transition-colors">Projects</a></li>
          <li><a href="#leadership" className="hover:text-green-400 transition-colors">Leadership</a></li>
          <li><a href="#contactme" className="hover:text-green-400 transition-colors">Contact Me</a></li>
        </ul>

        {/* Icons - right side */}
        <div className="flex gap-6 text-3xl">
          <a
            href="https://www.linkedin.com/in/priyadharshini-ganeshkumar/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/priyadharshini18-hub"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:priyadharshini6508@gmail.com"
            className="hover:text-green-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
