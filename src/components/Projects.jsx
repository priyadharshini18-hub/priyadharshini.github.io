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
import { Code, Play } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
  title: 'SiteSafe AI - Vertical AI Agent for Safety Compliance',
  image: siteSafeImage,
  description:
    'An on-device vertical AI agent that maps multi-modal inputs to a 70+ item safety checklist and auto-generates audit reports. Fine-tuned Gemma-3-4B IT via LoRA on an NVIDIA RTX PRO 6000 GPU for domain-adapted visual hazard recognition, eliminating manual inspection overhead.',
  technologies: ['Gemini', 'LoRA', 'Fine-tuning', 'Multi-modal AI'],
  link: 'https://github.com/priyadharshini18-hub/site-safety-scan',
  categories: ['AI/ML Projects'],
},

  {
  title: 'Deep Researcher - Multi-Agent LLM Pipeline',
  image: deepResearcherImage,
  description:
    'An Evaluator-optimizer agentic workflow with Researcher, Summarizer, Critic and Synthesizer agents for autonomous literature review. Integrated MCP tool calls for multi-model reasoning and achieved 80% factual alignment with human reviews.',
  technologies: ['CrewAI', 'MCP', 'Gradio', 'Serper', 'Pydantic'],
  link: 'https://github.com/priyadharshini18-hub/Automated_Paper_Review',
  demo: 'https://drive.google.com/file/d/1SZ0f6QayxOWC1ic4h8FgEmhj19lPyjpR/view',
  categories: ['AI/ML Projects'],
},
{
  title: 'Accelerated PBFT Consensus via RDMA',
  image: pbftImage,
  description:
    'Implemented RDMA Shared/Per-Client Ring buffers to replace TCP/IP in ResilientDB\'s PBFT consensus, using a custom zRPC messaging abstraction; achieved 35% lower commit latency and 40% higher throughput in multi-node distributed setups.',
  technologies: ['RDMA', 'zRPC', 'ResilientDB', 'Distributed Systems'],
  link: 'https://github.com/harish876/incubator-resilientdb/tree/rdma-consensus',
  categories: ['OS Projects'],
},
{
    title: 'Pricing Comparison System for Food Delivery',
    image: foodOrder,
    description:
      'A pricing comparison system for online food delivery platforms by scraping real-time data from DoorDash, UberEats, and Grubhub using BeautifulSoup and Selenium. Integrated sentiment analysis on restaurant reviews using NLP techniques to help users identify cost-effective and highly rated food options.',
    technologies: ['Jupyter Notebook', 'Web Scraping', 'Data Ingestion', 'NLP'],
    link: 'https://github.com/priyadharshini18-hub/Food-Ordering-Platform',
    categories: ['AI/ML Projects'],
  },
  {
  title: 'Multi-Agent Stock Trading Simulation using AI Personas',
  image: tradingPersonasImage,
  description:
    'A trading simulation where four autonomous AI agents, each embodying a distinct investment philosophy, independently research, decide, and execute trades using real market data. Built on the OpenAI Agents SDK with MCP servers for live stock prices and news, a persistent memory graph, and a real-time Gradio dashboard.',
  technologies: ['OpenAI Agents SDK', 'MCP', 'Gradio', 'SQLite'],
  link: 'https://github.com/priyadharshini18-hub/Trading-using-AI-Personas',
  categories: ['AI/ML Projects'],
},

  {
    title: 'Multi-Label Classification of Catheter Positions in Chest X-Rays',
    image: aiHealth,
    description:
      'Deep learning model using ResNext50 architectures and PyTorch to analyze catheter positioning in chest X-rays. Improved model performance with data augmentation and fine-tuning for 11 clinical classes, achieving 93% accuracy. The model automates diagnostics, reducing manual effort and improving clinical efficiency.',
    technologies: ['Deep Learning', 'PyTorch', 'Scikit-learn', 'Health Care'],
    link: 'https://github.com/priyadharshini18-hub/Catheter-Positioning-using-ResNet',
    categories: ['AI/ML Projects'],
  },

  {
    title: 'Expres - Decentralized Social Media Platform',
    image: socialmedia,
    description:
      'A decentralized, blockchain-integrated social media platform using React.js, FastAPI, and MongoDB, ensuring real-time communication and 99% uptime through ResilientDB. Designed and implemented 10+ secure REST APIs supporting core functionalities such as message reporting, chat history retrieval, content moderation and privacy-preserving.',
    technologies: ['Full Stack Development', 'FAST API', 'ResilientDB', 'Blockchain', 'MongoDB', 'React'],
    link: 'https://github.com/priyadharshini18-hub/Expres',
    categories: ['OS Projects', 'Full-Stack Projects'],
  },

{
    title: 'Drowsiness Detector using Real-Time Facial Analysis',
    image: drowsiness,
    description:
      'A real-time drowsiness detection system using Python, OpenCV, and dlib by analyzing live webcam feed and extracting 68 facial landmarks to monitor eye and mouth movements. The system calculates the Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) to detect signs of fatigue through prolonged eye closure or yawning, triggering on-screen alerts when drowsiness is detected.',
    technologies: ['OpenCV', 'Python', 'Real-time Alerting', 'dlib', 'Facial Landmark Analysis'],
    link: 'https://github.com/priyadharshini18-hub/Drowsiness-detector-using-python',
    categories: ['OS Projects'],
  },

  {
    title: 'Framework for Product Recommendation',
    image: recommendation,
    description:
      'A hybrid recommendation engine using Singular Value Decomposition (SVD) for collaborative filtering and Cosine Similarity for content-based filtering. Applied the model to the Amazon product reviews dataset to personalize recommendations based on user behavior and product features. Built a functional e-commerce web application using Flask and MySQL to showcase the system, allowing users to receive tailored product recommendations in real-time.',
    technologies: ['Machine Learning', 'Python', 'Flask', 'MySQL', 'Pandas'],
    link: 'https://github.com/priyadharshini18-hub/Recommendation-System-Using-Matrix-Factorization',
    categories: ['AI/ML Projects', 'Full-Stack Projects'],
  },
  
  {
    title: 'Dashboard Management for Cognitive Rehabilitation',
    image: cognition,
    description:
      'A comprehensive web dashboard using Django and cross-platform mobile application using Flutter for PSG Hospitals to support cognitive rehabilitation programs. The system enables patients to download prescribed cognitive therapy games, while game activity logs are automatically uploaded to a secure backend for clinician access and analysed using PowerBI.',
    technologies: ['Flutter', 'Django', 'Power BI', 'SQLite', 'Mobile Development'],
    link: 'https://github.com/priyadharshini18-hub',
    categories: ['Full-Stack Projects'],
  },
];

const INITIAL_VISIBLE_DESKTOP = 6; // 3 columns × 2 rows
const INITIAL_VISIBLE_MOBILE = 3;  // 1 column × 3 rows

const FILTERS = ['All Projects', 'AI/ML Projects', 'OS Projects', 'Full-Stack Projects'];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const isMobile = window.innerWidth < 768;
  const initialCount = isMobile ? INITIAL_VISIBLE_MOBILE : INITIAL_VISIBLE_DESKTOP;

  const filteredProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((project) => project.categories?.includes(activeFilter));

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, initialCount);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setShowAll(false); // reset expansion when switching tabs
  };

  return (
    <section id="projects" className="min-h-screen p-6 text-white">

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Projects</h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-green-400 text-black border-green-400'
                  : 'border-green-400/40 text-green-400 hover:bg-green-400/10 hover:border-green-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

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
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm p-2 rounded-full text-green-400 hover:text-green-300 transition-colors duration-300">
                  <FaGithub size={20} />
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-white text-center">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-justify">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm"
                  >
                    <Code size={12} className="mr-1" />
                    {tech}
                  </span>
                ))}

                {project.demo && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.demo, '_blank');
                    }}
                    className="inline-flex items-center bg-green-400 text-black font-semibold px-3 py-1 rounded-full text-sm hover:bg-green-300 transition-colors duration-300"
                  >
                    <Play size={12} className="mr-1" />
                    Demo
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

        {filteredProjects.length > initialCount && (
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