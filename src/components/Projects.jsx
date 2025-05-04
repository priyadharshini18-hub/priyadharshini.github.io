import React, { useState } from 'react';
import aiHealth from '../assets/ai_in_health.jpeg';
import foodOrder from '../assets/food_ordering.jpeg';
import cognition from '../assets/cognitive_rehab.jpeg';
import recommendation from '../assets/recommendation.jpeg';
import { Code } from 'lucide-react';

const projects = [
  {
    title: 'Multi-Label Classification of Catheter Positions in Chest X-Rays',
    image: aiHealth,
    description:
      'Developed a deep learning model using ResNext50 architectures and PyTorch to analyze catheter positioning in chest X-rays. Improved model performance with data augmentation and fine-tuning for 11 clinical classes, achieving 93% accuracy. The model automates diagnostics, reducing manual effort and improving clinical efficiency.',
    technologies: ['ML', 'DL', 'PyTorch', 'Scikit-learn'],
    link: 'https://github.com/priyadharshini18-hub/Catheter-Positioning-using-ResNet',
  },
  {
    title: 'Pricing Comparison System for Food Delivery',
    image: foodOrder,
    description:
      'Built a pricing comparison system by scraping data from DoorDash, UberEats, and Grubhub. Included sentiment analysis of restaurant reviews to help users identify cost-effective and preferred food options.',
    technologies: ['Jupyter Notebook', 'Web Scraping', 'Data Analysis'],
    link: 'https://github.com/priyadharshini18-hub/Food-Ordering-Platform',
  },
  {
    title: 'Framework for Product Recommendation',
    image: recommendation,
    description:
      'Created a hybrid recommendation engine using SVD and Cosine Similarity. Combined collaborative and content-based filtering for improved predictions. Built an e-commerce website with Flask and MySQL to showcase and personalize recommendations.',
    technologies: ['Machine Learning', 'Python', 'Flask', 'MySQL', 'Pandas'],
    link: 'https://github.com/priyadharshini18-hub/Recommendation-System-Using-Matrix-Factorization',
  },
  {
    title: 'Dashboard Management for Cognitive Rehabilitation',
    image: cognition,
    description:
      'Developed a web dashboard and mobile app for PSG Hospitals using Django and Flutter. Allowed patients to download cognitive games and upload game logs for doctor evaluation. Included analytics dashboard with Power BI.',
    technologies: ['Flutter', 'Django', 'Power BI', 'SQLite', 'HTML/CSS'],
    link: 'https://github.com/priyadharshini18-hub',
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-[#0F0F0F] text-white">
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
              <p className="text-gray-300 mb-4">{project.description}</p>

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