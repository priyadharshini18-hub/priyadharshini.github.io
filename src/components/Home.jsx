import React, { useState } from 'react';
import profileImage from '../assets/profile.jpg';
import { GraduationCap, Briefcase, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-12 text-center md:text-left overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient-x blur-2xl opacity-60 -z-10" />

      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Priyadharshini Ganeshkumar
        </h1>

        {/* Mobile profile image */}
        <div
          className="block md:hidden mb-6 relative w-56 h-56 mx-auto rounded-full shadow-[0_0_40px_#22c55eff] overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={profileImage}
            alt="Priyadharshini Ganeshkumar"
            className="absolute w-[150%] h-[150%] object-cover transition-transform duration-500"
            style={{
              top: '-54%',
              left: '1%',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        </div>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed min-h-[96px] text-justify"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Priya, a Computer Science grad student at UC Davis passionate about machine learning, data analysis, and turning ideas into impactful solutions. 
          I use technology to tackle real-world challenges and bring meaningful innovations to life. 
          I enjoy solving DSA and algorithm problems and love working with data, and this passion continues to grow through focused learning in intelligent, data-driven problem solving.
        </motion.p>

        <motion.a
          href="#techstack"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
          animate={{
            x: [0, -4, 4, -4, 4, 0], // shake left and right
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 2,
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          Let’s take a Tour →
        </motion.a>

        <div className="mt-20 space-y-8">
          <div className="flex items-center gap-4">
            <GraduationCap size={40} className="text-green-400" />
            <div>
              <p className="text-xl text-white font-medium">CS Graduate</p>
              <div className="flex items-center">
                <span className="text-lg ml-2 text-gray-300">University of California, Davis</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Briefcase size={40} className="text-green-400" />
            <div>
              <p className="text-xl text-white font-medium">Ex-Software Engineer</p>
              <div className="flex items-center">
                <span className="text-lg ml-2 text-gray-300">JP Morgan Chase, India</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FileText size={40} className="text-green-400" />
            <div>
              <p className="text-lg text-white font-medium">Resume</p>
              <div className="flex items-center">
                <a
                  href={`${process.env.PUBLIC_URL}/Priyadharshini_Resume2025.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-green-400 underline hover:text-green-300 ml-2"
                >
                  View / Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet profile image */}
      <div
        className="relative h-80 w-80 overflow-hidden rounded-full shadow-[0_0_25px_#22c55e66] hidden md:block cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={profileImage}
          alt="Priyadharshini Ganeshkumar"
          className="absolute w-[150%] h-[150%] object-cover transition-transform duration-500"
          style={{
            top: '-54%',
            left: '1%',
            transform: isHovered ? 'scale(1.55)' : 'scale(1.5)',
          }}
        />
      </div>
    </section>
  );
};

export default Home;
