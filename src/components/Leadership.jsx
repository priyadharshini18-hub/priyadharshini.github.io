import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Code,
  Mic,
  Building,
} from 'lucide-react';
import { motion } from 'framer-motion';

import img1 from '../assets/leadership/img1.png';
import img2 from '../assets/leadership/img2.png';
import img3 from '../assets/leadership/img3.jpg';
import img4 from '../assets/leadership/img4.png';
import img5 from '../assets/leadership/img5.jpeg';
import img6 from '../assets/leadership/img6.png';
import img7 from '../assets/leadership/img7.jpeg';
import img8 from '../assets/leadership/img8.png';
import img9 from '../assets/leadership/img9.jpeg';
import img10 from '../assets/leadership/img10.jpg';
import img11 from '../assets/leadership/img11.jpg';

const leadershipData = [
  {
    title: "Lead of Bengaluru Software Engineers Committee",
    company: "JP Morgan Chase & Co",
    date: "March 2023 - April 2024",
    description:
      'Spearheaded the Bangalore Software Engineers Committee to empower over 200 early-career professionals and campus hires in their transition from academia to the corporate world. Orchestrated Hackathons, corporate social events, and speed-mentoring programs that fostered connections with senior leaders and accelerated career growth.',
    icon: Users,
  },
  {
    title: 'Core Member of Social & Cultural Club, Bengaluru Tech Center',
    company: 'JP Morgan Chase & Co',
    date: 'August 2023 - June 2024',
    description:
      'Played a pivotal role in planning and executing large-scale corporate engagement events that enhanced workplace culture and employee participation. Served as the lead vocalist in the official Bengaluru Tech Center band, performing at multiple cultural events to boost team spirit and inclusivity.',
    icon: Building,
  },
  {
    title: 'Moderator of Fireside Chat with Alison McPherson',
    company: 'JP Morgan Chase & Co',
    date: 'March 2023',
    description:
      'Facilitated a Fireside Chat with Alison McPherson, Head of New Joiner Experience, Digital and Data & Analytics, for an audience of 100+ early-career engineers. Curated discussion around early-career mobility, corporate visibility, and leadership development. Enabled meaningful interaction with senior leadership and shared actionable career insights.',
    icon: Mic,
  },
  {
    title: 'Finalist in Code for Good Hackathon (CFG)',
    company: 'JP Morgan Chase & Co',
    date: 'June 2021',
    description:
      'Selected as a top 3 finalist in India\'s largest social-impact hackathon, where I co-developed an advanced scheduling framework for the Apni Shala Foundation. This solution optimized facilitator-student class scheduling to boost student engagement in rural areas. Proudly contributed to driving educational equity through technology during the 24-hour event.',
    icon: Code,
  },
  {
    title: 'Executive Member of Information Technology Association',
    company: 'PSG College of Technology',
    date: '2021-2022',
    description:
      'Facilitated technical symposiums and hackathons to nurture a culture of innovation and continuous learning. Supported junior students\' placement readiness through curated mock interviews and skill-building challenges on HackerRank, significantly improving their technical competencies and confidence.',
    icon: Users,
  },
];

const leadershipImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const leadershipCaptions = [
  "CFG'23 Event Support Volunteer @ JPMorgan Chase",
  "SEP Welcome Week Leadership Team @ JPMorgan Chase",
  "Fireside Chat with Alison McPherson - Head of New Joiner Experience, Digital and Data & Analytics @ JPMorgan Chase",
  "Early Career Outreach – SEP Talent Acquisition Kiosk Showcase @ JPMorgan Chase",
  "Honored for Impact – Townhall Recognition at Bengaluru Tech Center 2024",
  "SEP Welcome Week Leadership Team @ JPMorgan Chase",
  "Official Host of SEPathon 2023, leading the event and energizing over 100 participants @ JPMorgan Chase",
  "Speed mentoring with Executive Leadership @ JPMorgan Chase",
  "SEPathon 2023 Organizers & Mentors @ JPMorgan Chase",
  "Live music performance with the official band of the Bengaluru Tech Center @ JPMorgan Chase",
  "Young Leader Spotlight – Excellence Award at Bengaluru Townhall 2024",
];

const Leadership = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % leadershipImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % leadershipImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      (prev - 1 + leadershipImages.length) % leadershipImages.length
    );
  };

  return (
    <section id="leadership" className="min-h-screen p-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-400">
          Leadership Experience
        </h2>

        {/* Leadership Items */}
        <div className="space-y-6 mb-16">
          {leadershipData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="group bg-[#1B1B1B] p-6 rounded-lg border-l-4 border-green-400/30 hover:border-green-400 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.15 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-green-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className="text-left sm:text-right">
                        <div className="text-green-400 font-medium text-lg">{item.company}</div>
                        <div className="text-gray-400 text-sm">{item.date}</div>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-justify">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="relative h-[26rem] flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-4 z-10 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-7 h-7 text-white" />
            </button>

            {/* Image Group */}
            <div className="flex gap-4 overflow-hidden px-6 sm:px-16 w-full max-w-[90rem] justify-center transition-transform duration-500 ease-in-out">
              {Array(isMobile ? 1 : 3)
                .fill(0)
                .map((_, offset) => {
                  const index = (currentImageIndex + offset) % leadershipImages.length;
                  return (
                    <div key={index} className={`w-full sm:w-[30%] px-2`}>
                      <div className="relative h-[20rem] rounded-xl overflow-hidden group shadow-lg">
                        <img
                          src={leadershipImages[index]}
                          alt={leadershipCaptions[index]}
                          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 text-white text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {leadershipCaptions[index]}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-4 z-10 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-7 h-7 text-white" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {leadershipImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-green-400 w-8'
                    : 'bg-gray-600 hover:bg-gray-500 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
