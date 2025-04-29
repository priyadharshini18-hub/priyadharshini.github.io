import React from 'react';
import profileImage from '../assets/profile.jpg';
import { GraduationCap, Briefcase, FileText } from 'lucide-react';

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-12 text-center md:text-left overflow-hidden"
    >
      {/* 🔮 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient-x blur-2xl opacity-60 -z-10" />

      {/* Left Text */}
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Priyadharshini Ganeshkumar
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
          I am Priyadharshini Ganeshkumar, a graduate student at UC Davis in the Department of Computer Science. With a focus on machine learning and data analysis.
        </p>
        <a
          href="#techstack"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
        >
          Let’s get started →
        </a>

        {/* 🧑‍🎓 Career/Education Section */}
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

          {/* Resume Section Below Work Experience */}
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

      {/* Right Image */}
      <div className="relative h-80 w-80 overflow-hidden rounded-full shadow-xl">
        <img
          src={profileImage}
          alt="Priyadharshini Ganeshkumar"
          className="absolute w-[150%] h-[150%] object-cover"
          style={{
            top: '-54%',
            left: '1%',
            transform: 'scale(1.5)',
          }}
        />
      </div>

    </section>
  );
};

export default Home;
