import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TechStack from './components/TechStack';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Home />
      <TechStack />
      <WorkExperience />
      <Projects />
      <Leadership />
      <Contact />
    </div>
  );
}

export default App;
