import React from 'react';
import { Code, BookOpen, Cpu, Wrench } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'C', 'C++', 'Java', 'PL/SQL'],
      icon: <Code className="text-green-400" size={24} />,
    },
    {
      category: 'Tools and Frameworks',
      items: [
        ['Django', 'Flask', 'Spring Boot', 'React', 'AWS', 'PowerBI', 'Jenkins', 'BASH', 'Oracle', 'SQLite', 'Git'],
        ['HTML/CSS', 'REST API', 'Redis', 'Node.js', 'OpenAI', 'Docker', 'Splunk', 'Kubernetes', 'RabbitMQ']
      ],
      icon: <Wrench className="text-green-400" size={24} />,
    },
    {
      category: 'Machine Learning',
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'OpenCV', 'LSTM', 'ResNext50', 'SVD', 'SVM'],
      icon: <Cpu className="text-green-400" size={24} />,
    },
    {
      category: 'Education',
      items: [
        'University of California, Davis (MS, Computer Science)',
        'PSG College of Technology, India (B.Tech Information Technology)'
      ],
      icon: <BookOpen className="text-green-400" size={24} />,
    },
  ];

  return (
    <section id="about" className="min-h-screen px-6 py-20 bg-[#0F0F0F] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-400">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left column: intro */}
          <div className="lg:col-span-2">
            <div className="bg-[#1B1B1B] p-6 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">My Journey</h3>
              <p className="text-gray-300 mb-4">
                I am a passionate computer science graduate student at UC Davis, specializing in machine learning and data analysis. My academic journey has equipped me with a strong foundation in algorithms, data structures, and problem-solving.
              </p>
              <p className="text-gray-300 mb-4">
                I've always been fascinated by how data can reveal patterns and insights that drive decision-making. This interest led me to focus on machine learning, where I'm researching innovative approaches to analyze complex data sets.
              </p>
              <p className="text-gray-300">
                Outside of academics, I enjoy participating in hackathons, contributing to open-source projects, and mentoring junior students in computer science.
              </p>
            </div>
          </div>

          {/* Right column: skills */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#1B1B1B] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    {skill.icon}
                    <h3 className="text-xl font-semibold ml-3 text-white">{skill.category}</h3>
                  </div>
                  <ul className="list-disc pl-5 text-gray-300">
                    {Array.isArray(skill.items[0]) ? (
                      skill.items.map((row, rowIdx) => (
                        <div key={rowIdx} className={rowIdx === 0 ? 'mb-2' : ''}>
                          {row.map((item, idx) => (
                            <li key={idx} className="mb-1">{item}</li>
                          ))}
                        </div>
                      ))
                    ) : (
                      skill.items.map((item, idx) => (
                        <li key={idx} className="mb-1">{item}</li>
                      ))
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
