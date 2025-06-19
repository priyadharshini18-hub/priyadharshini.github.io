import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full sticky top-0 z-50 bg-[#1B1B1B] shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        <div className="text-lg font-bold md:hidden">Priyadharshini Ganeshkumar</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-semibold tracking-wide">
          <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
          <li><a href="#techstack" className="hover:text-green-400 transition-colors">Tech Stack</a></li>
          <li><a href="#experience" className="hover:text-green-400 transition-colors">Work Experience</a></li>
          <li><a href="#projects" className="hover:text-green-400 transition-colors">Projects</a></li>
          <li><a href="#leadership" className="hover:text-green-400 transition-colors">Leadership</a></li>
          <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex gap-6 text-2xl">
          <a href="https://linkedin.com/in/priyadharshini-ganeshkumar" target="_blank" rel="noreferrer" className="hover:text-green-400">
            <FaLinkedin />
          </a>
          <a href="https://github.com/priyadharshini18-hub" target="_blank" rel="noreferrer" className="hover:text-green-400">
            <FaGithub />
          </a>
          <a href="mailto:priyadharshini6508@gmail.com" className="hover:text-green-400">
            <FaEnvelope />
          </a>
        </div>

        {/* Hamburger Icon */}
        <button className="md:hidden text-2xl text-green-400" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 text-white space-y-6 text-lg font-medium bg-[#1B1B1B] shadow-inner">
          {/* Profile Photo */}
          <div className="flex justify-center mb-4">
            <img
              src="https://your-image-url-here.jpg"
              alt="Priyadharshini Ganeshkumar"
              className="w-24 h-24 rounded-full object-cover border-2 border-green-400"
            />
          </div>

          {/* Menu Links */}
          <a href="#home" className="block hover:text-green-400" onClick={toggleMenu}>Home</a>
          <a href="#techstack" className="block hover:text-green-400" onClick={toggleMenu}>Tech Stack</a>
          <a href="#experience" className="block hover:text-green-400" onClick={toggleMenu}>Work Experience</a>
          <a href="#projects" className="block hover:text-green-400" onClick={toggleMenu}>Projects</a>
          <a href="#leadership" className="block hover:text-green-400" onClick={toggleMenu}>Leadership</a>
          <a href="#contact" className="block hover:text-green-400" onClick={toggleMenu}>Contact</a>

          {/* Social Icons */}
          <div className="flex gap-6 mt-4 text-2xl justify-center">
            <a href="https://linkedin.com/in/priyadharshini-ganeshkumar" target="_blank" rel="noreferrer" className="hover:text-green-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com/priyadharshini18-hub" target="_blank" rel="noreferrer" className="hover:text-green-400">
              <FaGithub />
            </a>
            <a href="mailto:priyadharshini6508@gmail.com" className="hover:text-green-400">
              <FaEnvelope />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;