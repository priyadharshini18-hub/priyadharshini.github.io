import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Code,
  Building,
} from 'lucide-react';

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
    title: "Lead of Bengaluru SEP Engineers Committee",
    company: "JP Morgan Chase & Co",
    date: "March 2023 - April 2024",
    description:
      'Led the Software Engineers Committee in Bangalore, organizing social events, leadership connect sessions, and mentoring programs to help early-career engineers and campus hires transition from college to corporate environment.',
    icon: Users,
  },
  {
    title: 'Social & Cultural Club Core Member',
    company: 'JP Morgan Chase & Co',
    date: 'August 2023 - June 2024',
    description:
      'Organized large-scale corporate events at the Bangalore Tech Center to increase employee engagement and foster a better workplace environment.',
    icon: Building,
  },
  {
    title: 'Code for Good Finalist',
    company: 'JP Morgan Chase & Co',
    date: 'June 2021',
    description:
      'Top 3 finalist in India\'s largest hackathon, developed a sophisticated framework for Apni Shala Foundation to enhance social and emotional competencies among students in rural areas.',
    icon: Code,
  },
  {
    title: 'Information Technology Association Executive',
    company: 'College',
    date: '2021-2022',
    description:
      'Facilitated placement journey of juniors through mock interviews and created challenging questions on HackerRank for community skill enhancement.',
    icon: Users,
  },
];

const leadershipImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const leadershipCaptions = [
  "CFG'23 Event Support Volunteer @ JPMorgan Chase",
  "SEP Welcome Week Leadership Team @ JPMorgan Chase",
  "Fireside Chat with Alison McPherson - Head of New Joiner Experience, Digital and Data & Analytics @ JPMC",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % leadershipImages.length);
      }, 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % leadershipImages.length);
    }, 3);
  };

  const prevImage = () => {
    setTimeout(() => {
      setCurrentImageIndex((prev) =>
        (prev - 1 + leadershipImages.length) % leadershipImages.length
      );
    }, 3);
  };

  return (
    <div className="min-h-screen bg-[#1B1B1B]">
      <section id="leadership" className="min-h-screen p-6 text-white bg-[#1B1B1B]">
        <div className="max-w-[90rem] mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-green-400">
            Leadership Experience
          </h2>

          {/* Leadership Items */}
          <div className="space-y-1 mb-4">
            {leadershipData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group hover:bg-[#2A2A2A] p-6 rounded-lg transition-all duration-300 border-l-4 border-green-400/30 hover:border-green-400"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-green-400" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <div className="text-right">
                          <div className="text-green-400 font-medium text-lg">{item.company}</div>
                          <div className="text-gray-400 text-sm">{item.date}</div>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-justify">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
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
              <div className="flex gap-4 overflow-hidden px-16 w-full max-w-[90rem] justify-center transition-transform duration-500 ease-in-out">
                {[0, 1, 2].map((offset) => {
                  const index = (currentImageIndex + offset) % leadershipImages.length;
                  return (
                    <div key={index} className="w-[30%] px-2">
                      <div
                        className="relative h-[20rem] rounded-xl overflow-hidden group shadow-lg"
                        style={{ willChange: 'transform' }}
                      >
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
            <div className="flex justify-center mt-2 space-x-1">
              {leadershipImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setTimeout(() => setCurrentImageIndex(index), 3)
                  }
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-green-400 w-8'
                      : 'bg-gray-600 hover:bg-gray-500 w-2'
                  }`}
                  style={{ minWidth: '0.5rem' }}
                />
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default Leadership;