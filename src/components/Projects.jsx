import React, { useState } from 'react';
import siteSafeImage from '../assets/constructionSafety.jpeg';
import deepResearcherImage from '../assets/deepResearch.jpg';
import tradingPersonasImage from '../assets/tradingPersonas.jpg';
import pbftImage from '../assets/rdma.jpg';
import aiHealth from '../assets/ai_in_health.jpeg';
import foodOrder from '../assets/foodOrdering.jpeg';
import cognition from '../assets/cognitive_rehab.jpeg';
import recommendation from '../assets/recommendation.jpeg';
import socialmedia from '../assets/social_media.jpeg';
import drowsiness from '../assets/drowsiness.jpeg';
import { Code } from 'lucide-react';

const projects = [
  {
  title: 'SiteSafe AI - Vertical AI Agent for Safety Compliance',
  image: siteSafeImage,
  description:
    'An on-device vertical AI agent that maps multi-modal inputs to a 70+ item safety checklist and auto-generates audit reports. Fine-tuned Gemma-3-4B IT via LoRA on an NVIDIA RTX PRO 6000 GPU for domain-adapted visual hazard recognition, eliminating manual inspection overhead.',
  technologies: ['Gemini', 'LoRA', 'Fine-tuning', 'Multi-modal AI'],
  link: 'https://github.com/priyadharshini18-hub/site-safety-scan',
},

  {
  title: 'Deep Researcher - Multi-Agent LLM Pipeline',
  image: deepResearcherImage,
  description:
    'An Evaluator-optimizer agentic workflow with Researcher, Summarizer, Critic and Synthesizer agents for autonomous literature review. Integrated MCP tool calls for multi-model reasoning and achieved 80% factual alignment with human reviews.',
  technologies: ['CrewAI', 'MCP', 'Gradio', 'Serper', 'Pydantic'],
  link: 'https://github.com/priyadharshini18-hub/Automated_Paper_Review',
},
{
    title: 'Pricing Comparison System for Food Delivery',
    image: foodOrder,
    description:
      'A pricing comparison system for online food delivery platforms by scraping real-time data from DoorDash, UberEats, and Grubhub using BeautifulSoup and Selenium. Integrated sentiment analysis on restaurant reviews using NLP techniques to help users identify cost-effective and highly rated food options.',
    technologies: ['Jupyter Notebook', 'Web Scraping', 'Data Ingestion', 'NLP'],
    link: 'https://github.com/priyadharshini18-hub/Food-Ordering-Platform',
  },
  {
  title: 'Multi-Agent Stock Trading Simulation using AI Personas',
  image: tradingPersonasImage,
  description:
    'A trading simulation where four autonomous AI agents, each embodying a distinct investment philosophy, independently research, decide, and execute trades using real market data. Built on the OpenAI Agents SDK with MCP servers for live stock prices and news, a persistent memory graph, and a real-time Gradio dashboard.',
  technologies: ['OpenAI Agents SDK', 'MCP', 'Gradio', 'SQLite'],
  link: 'https://github.com/priyadharshini18-hub/Trading-using-AI-Personas',
},

  {
    title: 'Multi-Label Classification of Catheter Positions in Chest X-Rays',
    image: aiHealth,
    description:
      'Deep learning model using ResNext50 architectures and PyTorch to analyze catheter positioning in chest X-rays. Improved model performance with data augmentation and fine-tuning for 11 clinical classes, achieving 93% accuracy. The model automates diagnostics, reducing manual effort and improving clinical efficiency.',
    technologies: ['Deep Learning', 'PyTorch', 'Scikit-learn', 'Health Care'],
    link: 'https://github.com/priyadharshini18-hub/Catheter-Positioning-using-ResNet',
  },

  {
    title: 'Expres - Decentralized Social Media Platform',
    image: socialmedia,
    description:
      'A decentralized, blockchain-integrated social media platform using React.js, FastAPI, and MongoDB, ensuring real-time communication and 99% uptime through ResilientDB. Designed and implemented 10+ secure REST APIs supporting core functionalities such as message reporting, chat history retrieval, content moderation and privacy-preserving.',
    technologies: ['Full Stack Development', 'FAST API', 'ResilientDB', 'Blockchain', 'MongoDB', 'React'],
    link: 'https://github.com/priyadharshini18-hub/Expres',
  },

  {
  title: 'Accelerated PBFT Consensus via RDMA',
  image: pbftImage,
  description:
    'An RDMA-based network strategy replacing TCP/IP in ResilientDB\'s PBFT consensus layer, using a custom zRPC messaging abstraction with shared and per-client ring buffer designs. Achieves 40% lower latency and 60% higher throughput with RDMA WRITE_WITH_IMMEDIATE bridging the gap between one-sided polling overhead and two-sided CPU involvement.',
  technologies: ['RDMA', 'zRPC', 'ResilientDB', 'Distributed Systems'],
  link: 'https://github.com/harish876/incubator-resilientdb/tree/rdma-consensus',
},

{
    title: 'Drowsiness Detector using Real-Time Facial Analysis',
    image: drowsiness,
    description:
      'A real-time drowsiness detection system using Python, OpenCV, and dlib by analyzing live webcam feed and extracting 68 facial landmarks to monitor eye and mouth movements. The system calculates the Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) to detect signs of fatigue through prolonged eye closure or yawning, triggering on-screen alerts when drowsiness is detected.',
    technologies: ['OpenCV', 'Python', 'Real-time Alerting', 'dlib', 'Facial Landmark Analysis'],
    link: 'https://github.com/priyadharshini18-hub/Drowsiness-detector-using-python',
  },

  {
    title: 'Framework for Product Recommendation',
    image: recommendation,
    description:
      'A hybrid recommendation engine using Singular Value Decomposition (SVD) for collaborative filtering and Cosine Similarity for content-based filtering. Applied the model to the Amazon product reviews dataset to personalize recommendations based on user behavior and product features. Built a functional e-commerce web application using Flask and MySQL to showcase the system, allowing users to receive tailored product recommendations in real-time.',
    technologies: ['Machine Learning', 'Python', 'Flask', 'MySQL', 'Pandas'],
    link: 'https://github.com/priyadharshini18-hub/Recommendation-System-Using-Matrix-Factorization',
  },
  
  {
    title: 'Dashboard Management for Cognitive Rehabilitation',
    image: cognition,
    description:
      'A comprehensive web dashboard using Django and cross-platform mobile application using Flutter for PSG Hospitals to support cognitive rehabilitation programs. The system enables patients to download prescribed cognitive therapy games, while game activity logs are automatically uploaded to a secure backend for clinician access and analysed using PowerBI.',
    technologies: ['Flutter', 'Django', 'Power BI', 'SQLite', 'Mobile Development'],
    link: 'https://github.com/priyadharshini18-hub',
  },
];

const INITIAL_VISIBLE_DESKTOP = 6; // 3 columns × 2 rows
const INITIAL_VISIBLE_MOBILE = 3;  // 1 column × 3 rows

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const isMobile = window.innerWidth < 768;
  const initialCount = isMobile ? INITIAL_VISIBLE_MOBILE : INITIAL_VISIBLE_DESKTOP;
  const visibleProjects = showAll ? projects : projects.slice(0, initialCount);

  return (
    <section id="projects" className="min-h-screen p-6 text-white">

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-400">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-[#1B1B1B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
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

              <h3 className="text-2xl font-semibold mb-3 text-white text-center">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-justify">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
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

        {projects.length > initialCount && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 font-medium"
            >
              {showAll ? 'Show Less' : 'Show More Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;