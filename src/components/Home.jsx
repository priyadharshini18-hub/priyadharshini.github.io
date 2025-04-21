import React from 'react';
import profileImage from '../assets/profile.jpg';

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-12 text-center md:text-left overflow-hidden"
    >
      {/* 🔮 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient blur-2xl opacity-30 -z-10" />

      {/* Left Text */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Priyadharshini Ganeshkumar
        </h1>
        <p className="text-gray-200 mb-6">
          I am Priyadharshini Ganeshkumar, a graduate student at UC Davis in the Department of Computer Science. With a focus on machine learning and data analysis.
        </p>
        <a
          href="#about"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
        >
          Let’s get started →
        </a>
      </div>

      {/* Right Image */}
      <div>
        <img
          src={profileImage}
          alt="Priyadharshini Ganeshkumar"
          className="rounded-full w-64 h-64 object-cover shadow-xl"
        />
      </div>
    </section>
  );
};

export default Home;
