import React, { useState } from 'react';
import aiHealth from '../assets/ai_in_health.jpeg';
import foodOrder from '../assets/food_ordering.jpeg';
import cognition from '../assets/cognitive_rehab.jpeg';
import recommendation from '../assets/recommendation.jpeg';
import socialmedia from '../assets/social_media.jpeg';
import drowsiness from '../assets/drowsiness.jpeg';
import { Code } from 'lucide-react';

const projects = [
  {
    title: 'Multi-Label Classification of Catheter Positions in Chest X-Rays',
    image: aiHealth,
    description:
      'Developed a deep learning model using ResNext50 architectures and PyTorch to analyze catheter positioning in chest X-rays. Improved model performance with data augmentation and fine-tuning for 11 clinical classes, achieving 93% accuracy. The model automates diagnostics, reducing manual effort and improving clinical efficiency.',
    technologies: ['Machine Learning', 'Deep Learning', 'PyTorch', 'Scikit-learn'],
    link: 'https://github.com/priyadharshini18-hub/Catheter-Positioning-using-ResNet',
  },
  {
    title: 'Pricing Comparison System for Food Delivery',
    image: foodOrder,
    description:
      'Built a pricing comparison system for online food delivery platforms by scraping real-time data from DoorDash, UberEats, and Grubhub using BeautifulSoup and Selenium. Integrated sentiment analysis on restaurant reviews using NLP techniques to help users identify cost-effective and highly rated food options.',
    technologies: ['Jupyter Notebook', 'Web Scraping', 'Data Analysis', 'NLP'],
    link: 'https://github.com/priyadharshini18-hub/Food-Ordering-Platform',
  },
  {
    title: 'Framework for Product Recommendation',
    image: recommendation,
    description:
      'Created a hybrid recommendation engine using Singular Value Decomposition (SVD) for collaborative filtering and Cosine Similarity for content-based filtering. Applied the model to the Amazon product reviews dataset to personalize recommendations based on user behavior and product features. Built a functional e-commerce web application using Flask and MySQL to showcase the system, allowing users to receive tailored product recommendations in real-time.',
    technologies: ['Machine Learning', 'Python', 'Flask', 'MySQL', 'Pandas'],
    link: 'https://github.com/priyadharshini18-hub/Recommendation-System-Using-Matrix-Factorization',
  },
  
  {
    title: 'Expres - Decentralized Social Media Platform',
    image: socialmedia,
    description:
      'Built a decentralized, blockchain-integrated social media platform using React.js, FastAPI, and MongoDB, ensuring real-time communication and 99% uptime through ResilientDB. Designed and implemented 10+ secure REST APIs supporting core functionalities such as message reporting, chat history retrieval, and content moderation. ExpRes leverages ResilientDB for fault-tolerant storage, blockchain-based identity verification, and transparent, privacy-preserving content governance.',
    technologies: ['Full Stack Development', 'FAST API', 'ResilientDB', 'Blockchain Integration', 'MongoDB'],
    link: 'https://github.com/priyadharshini18-hub/Expres',
  },
  {
    title: 'Drowsiness Detector using Real-Time Facial Analysis',
    image: drowsiness,
    description:
      'Designed a real-time drowsiness detection system using Python, OpenCV, and dlib by analyzing live webcam feed and extracting 68 facial landmarks to monitor eye and mouth movements. The system calculates the Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) to detect signs of fatigue through prolonged eye closure or yawning, triggering on-screen alerts when drowsiness is detected.',
    technologies: ['OpenCV', 'Python', 'Real-time Alerting', 'dlib', 'Facial Landmark Analysis'],
    link: 'https://github.com/priyadharshini18-hub/Drowsiness-detector-using-python',
  },
  {
    title: 'Dashboard Management for Cognitive Rehabilitation',
    image: cognition,
    description:
      'Designed and developed a comprehensive web dashboard using Django and cross-platform mobile application using Flutter for PSG Hospitals to support cognitive rehabilitation programs. The system enables patients to download prescribed cognitive therapy games, while game activity logs are automatically uploaded to a secure backend for clinician access. Integrated Power BI into the doctor dashboard for interactive data visualization, allowing real-time monitoring of patient engagement, performance trends, and recovery progress.',
    technologies: ['Flutter', 'Django', 'Power BI', 'SQLite', 'Mobile Development'],
    link: 'https://github.com/priyadharshini18-hub',
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="min-h-screen p-6 text-white">

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-400">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1B1B1B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => window.open(project.link, '_blank')}
            >
              <div className="relative h-48 overflow-hidden mb-4 rounded">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] to-transparent opacity-60"></div>
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-justify">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm"
                  >
                    <Code size={12} className="mr-1" />
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;