import React from 'react';
import { Code, BookOpen, Cpu, Wrench, BadgeCheck } from 'lucide-react';

const TechStack = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'C', 'C++', 'Java', 'PL/SQL', 'BASH'],
      icon: <Code className="text-green-400" size={24} />,
    },
    {
      category: 'Tools and Frameworks',
      items: [
        ['Django', 'Flask', 'React', 'AWS', 'PowerBI', 'Jenkins', 'MATLAB', 'Oracle', 'SQLite', 'Git'],
        ['HTML/CSS', 'REST API', 'Redis', 'Node.js', 'OpenAI', 'Docker', 'Splunk', 'Kubernetes']
      ],
      icon: <Wrench className="text-green-400" size={24} />,
    },
    {
      category: 'Machine Learning',
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'OpenCV', 'LSTM', 'ResNext50', 'SVM'],
      icon: <Cpu className="text-green-400" size={24} />,
    },
  ];

  return (
    <section id="techstack" className="min-h-screen p-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-12 text-center text-green-400">Tech Stack</h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#1B1B1B] p-6 rounded-lg shadow-lg">

              <div className="flex items-center mb-6">
                <BookOpen className="text-green-400 mr-3" size={28} />
                <h3 className="text-3xl font-semibold text-white-400">Education</h3>
              </div>

              {/* UC Davis */}
              <div className="mb-6">
                <p className="text-xl font-semibold text-green-400 mb-1">University of California, Davis</p>
                <p className="text-gray-300 italic mb-1">Master's degree, Computer Science (2024 - 2026)</p>
                <p className="text-gray-400 mb-2">Grade: 4.0 / 4.0</p>
                <p className="text-lg text-gray-400 mb-1 font-semibold">Coursework:</p>
                <ul className="list-disc pl-5 text-gray-300 text-base space-y-1">
                  <li className="text-base">ECS 271 Machine Learn & Discoveries</li>
                  <li className="text-base">ECS 265 Distributed Database Systems</li>
                  <li className="text-base">ECS 220 Design and Analysis of Algorithm</li>
                  <li className="text-base">STA 220 Data & Web Technologies for Data Analysis</li>
                </ul>
              </div>

              {/* PSG */}
              <div className="mt-10">
                <p className="text-xl font-semibold text-green-400 mb-1">PSG College of Technology, Coimbatore, India</p>
                <p className="text-gray-300 italic mb-1">Bachelor of Technology, Information Technology (2018 - 2022)</p>
                <p className="text-gray-400 mb-2">Grade: 9.51 / 10</p>
                <p className="text-lg text-gray-400 mb-1 font-semibold">Coursework:</p>
                <ul className="list-disc pl-5 text-gray-300 text-base space-y-1">
                  <li className="text-base">151303 Data Structures & Algorithms</li>
                  <li className="text-base">151203 Object Oriented Programming</li>
                  <li className="text-base">151403 Operating Systems</li>
                  <li className="text-base">151009 Cloud Computing</li>
                </ul>
              </div>
            </div>
          </div>


          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#1B1B1B] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    {skill.icon}
                    <h3 className="text-base font-semibold ml-3 text-white">{skill.category}</h3>
                  </div>

                  {skill.category === 'Tools and Frameworks' ? (
                    <ul className="grid grid-cols-2 gap-x-6 list-disc list-inside text-gray-300 pl-2">
                      {skill.items.flat().map((item, idx) => (
                        <li key={idx} className="mb-1 text-base">{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="list-disc pl-5 text-gray-300">
                      {skill.items.map((item, idx) => (
                        <li key={idx} className="mb-1 text-base">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="bg-[#1B1B1B] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                <BadgeCheck className="text-green-400" size={24} />
                  <h3 className="text-base font-semibold ml-3 text-white">Other Skills</h3>
                </div>
                <ul className="list-disc pl-5 text-gray-300">
                  <li className="mb-1 text-lg">Agile / Scrum</li>
                  <li className="mb-1 text-lg">Software Engineering</li>
                  <li className="mb-1 text-lg">Full-Stack Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
