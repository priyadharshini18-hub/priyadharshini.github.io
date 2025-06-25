import React, { useState } from 'react';
import profileImage from '../assets/profile.jpg';
import { GraduationCap, Briefcase, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-12 md:gap-20 text-center md:text-left overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient-x blur-2xl opacity-60 -z-10" />

      {/* Profile image (MOBILE view only, shown above the name) */}
      <div
        className="relative h-56 w-56 overflow-hidden rounded-full shadow-[0_0_25px_#22c55e66] cursor-pointer mb-0.2 md:hidden"
        style={{ transform: 'translateY(-20px)' }}
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

      {/* LEFT COLUMN: Heading + About */}
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Priyadharshini Ganeshkumar
        </h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 leading-relaxed min-h-[96px] text-justify"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Priya — a Computer Science grad student at UC Davis with a strong belief that technology should serve real people. My journey began as a software engineer at JP Morgan Chase, where I moved beyond just writing code to understanding how every feature impacted clients in live trading environments. This shift shaped one of my key qualities: customer obsession. I’ve learned to think from the end-user's perspective, working backward to build solutions that are intuitive, reliable, and genuinely useful.
          <br /><br />
          I’m also deeply passionate about data-driven problem solving, especially in areas like machine learning and analytics where thoughtful patterns lead to impactful decisions. Whether it’s optimizing business processes or debugging stubborn issues under tight deadlines, I take pride in owning challenges and delivering results consistently, and without cutting corners. My curiosity and accountability fuel a mindset of continuous learning and clear execution.
        </motion.p>
      </div>

      {/* RIGHT COLUMN: Desktop profile image + Info + Button */}
      <div className="flex flex-col items-center md:items-start">
        {/* Profile image (DESKTOP only) */}
        <div
          className="relative h-80 w-80 overflow-hidden rounded-full shadow-[0_0_25px_#22c55e66] cursor-pointer mb-2 hidden md:block"
          style={{ transform: 'translateY(-40px)' }}
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

        {/* Info cards + Button (indented only on desktop) */}
        <div className="pl-0 md:pl-8">
          <div className="space-y-8 mb-8 max-w-xs text-left">
            {[
              {
                icon: <GraduationCap size={40} className="text-green-400" />,
                title: "CS Graduate",
                subtitle: "University of California, Davis",
              },
              {
                icon: <Briefcase size={40} className="text-green-400" />,
                title: "Ex-Software Engineer",
                subtitle: "JP Morgan Chase, India",
              },
              {
                icon: <FileText size={40} className="text-green-400" />,
                title: "Resume",
                subtitle: (
                  <a
                    href={`${process.env.PUBLIC_URL}/Priyadharshini_Resume2025.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 underline hover:text-green-300"
                  >
                    View / Download
                  </a>
                ),
              },
            ].map(({ icon, title, subtitle }, idx) => (
              <div key={idx} className="flex items-start gap-4">
                {icon}
                <div>
                  <p className="text-xl text-white font-medium">{title}</p>
                  <div className="text-lg text-gray-300">{subtitle}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#techstack"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
            animate={{
              x: [0, -4, 4, -4, 4, 0],
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
        </div>
      </div>
    </section>
  );
};

export default Home;
