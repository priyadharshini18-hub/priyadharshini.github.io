import React from 'react';
import profileImage from '../assets/profile.jpg';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      {/* Profile Image */}
      <img 
        src={profileImage} 
        alt="Priyadharshini Ganeshkumar" 
        className="w-48 h-48 rounded-full object-cover shadow-lg mb-6"
      />
      
      {/* Name and Intro */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Priyadharshini Ganeshkumar</h1>
      <p className="max-w-xl text-gray-400">
        I am Priyadharshini Ganeshkumar, a graduate student at UC Davis in the Department of Computer Science. 
        With a focus on machine learning and data analysis.
      </p>
      
      {/* CTA Button */}
      <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
        Let’s get started
      </button>
    </section>
  );
};

export default Home;