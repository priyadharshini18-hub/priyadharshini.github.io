import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TechStack from './components/TechStack';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Leadership from './components/Leadership';

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Home />
      <TechStack />
      <WorkExperience />
      <Projects />
      <Leadership />
    </div>
  );
}

export default App;
