import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Graduate Research Assistant',
    company: 'University of California, Davis',
    period: 'April 2025 - Present',
    description: [
      'Served as a Teaching Assistant for the Philosophy Department (PHI 010: Introduction to Cognitive Science).',
      'Assisted Professor Jonathan Dorsey by delivering revision lectures, leading group discussions, grading assignments for over 100 students, while maintaining high standards of academic integrity.',
      'Provided mentorship and guidance to students, fostering a collaborative learning environment and promoting critical thinking skills.',
    ],
    skills: ['Teaching', 'Grading', 'Communication', 'Student Mentoring'],
  },
  {
    role: 'Web Developer',
    company: 'University of California, Davis',
    period: 'June 2025 - September 2025',
    description: [
      'Developed and maintained the official Food and Animal Science department website used by the UC Davis student community.',
      'Redesigned key sections of the website, improving navigation and accessibility for over 6000 students annually.',
      'Onboarded faculty and staff to the platform, managing content updates including news feeds, course schedules, and departmental resources.',
      'Worked with Drupal SiteFarm to implement UI improvements and ensure consistent, user-friendly design across pages.',
    ],
    skills: ['UI Design', 'Website Maintenance', 'Drupal', 'SiteFarm', 'HTML', 'CSS'],
  },
  {
    role: 'Software Engineer 1',
    company: 'JP Morgan Chase & Co.',
    period: 'July 2022 - June 2024',
    description: [
      'Led the application modernization by migrating from legacy VSI to a new data center, reducing batch processing time by 45-60 minutes on downstream interfaces. Conducted regression testing, resolved critical issues, and validated batch operations post DNS switch.',
      'Optimized database management by migrating from PSI Infrastructure to in-house Oracle service GOS, delivering a cost-effective and scalable solution for the application\'s database requirements.',
      'Automated the deployment of Control-M XML in production using ITPAM, removing the dependency on manual uploads. Integrated a one-click solution in the CI/CD pipeline, reducing deployment time by 30 minutes.',
      'Supported production incident management and SFTP migrations ensuring smooth system operations.',
    ],
    skills: ['Oracle', 'SQL Query Optimization', 'CI/CD', 'Control-M', 'React'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'JP Morgan Chase & Co.',
    period: 'January 2022 - June 2022',
    description: [
      'Contributed to the development and regression testing of the core batch during Informatica decommission.',
      'Built an automated comparison utility for table and file data validation across multiple environments and production systems, reducing manual regression testing efforts by over 2 hours per cycle.',
      'Onboarded the application to SQL Loader, resulting in significant cost savings of over $50,251 annually on software recovery.',
    ],
    skills: ['PL/SQL', 'Regression Testing', 'Python', 'Bash Scripting'],
  },
];

const cardVariants = {
  hidden: (isLeft) => ({ opacity: 0, x: isLeft ? -50 : 50 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const WorkExperience = () => {
  return (
    <section id="experience" className="min-h-screen px-6 py-16 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-green-400">Work Experience</h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical center line — hidden on mobile, visible md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-green-500/30" />

          {/* Mobile left-rail line */}
          <div className="block md:hidden absolute left-4 top-0 bottom-0 w-px bg-green-500/30" />

          <div className="space-y-4 md:space-y-2">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative flex items-start md:items-center">

                  {/* ── DESKTOP: alternating left / right ── */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center w-full gap-x-6">

                    {/* Left slot */}
                    {isLeft ? (
                      <motion.div
                        custom={true}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="bg-[#1B1B1B] rounded-xl p-5 shadow-lg border border-green-500/10 hover:border-green-500/30 transition-colors duration-300"
                      >
                        <ExperienceContent exp={exp} />
                      </motion.div>
                    ) : (
                      <div />
                    )}

                    {/* Center dot */}
                    <div className="flex flex-col items-center z-10">
                      <div className="w-10 h-10 rounded-full bg-[#1B1B1B] border-2 border-green-400 flex items-center justify-center shadow-[0_0_12px_rgba(74,222,128,0.3)]">
                        <Briefcase size={16} className="text-green-400" />
                      </div>
                    </div>

                    {/* Right slot */}
                    {!isLeft ? (
                      <motion.div
                        custom={false}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="bg-[#1B1B1B] rounded-xl p-5 shadow-lg border border-green-500/10 hover:border-green-500/30 transition-colors duration-300"
                      >
                        <ExperienceContent exp={exp} />
                      </motion.div>
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* ── MOBILE: single column with left rail ── */}
                  <div className="flex md:hidden items-start w-full">
                    {/* Dot on the left rail */}
                    <div className="flex-shrink-0 w-8 flex justify-center mr-5 mt-1">
                      <div className="w-8 h-8 rounded-full bg-[#1B1B1B] border-2 border-green-400 flex items-center justify-center shadow-[0_0_10px_rgba(74,222,128,0.25)] z-10">
                        <Briefcase size={13} className="text-green-400" />
                      </div>
                    </div>

                    <motion.div
                      custom={false}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.15 }}
                      className="flex-1 bg-[#1B1B1B] rounded-xl p-4 shadow-lg border border-green-500/10"
                    >
                      <ExperienceContent exp={exp} />
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceContent = ({ exp }) => (
  <div>
    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
      <div>
        <h3 className="text-2xl font-semibold text-white leading-snug">{exp.role}</h3>
        <div className="flex items-center mt-1 gap-1.5">
          <Briefcase size={15} className="text-green-400 flex-shrink-0" />
          <span className="text-base text-gray-400">{exp.company}</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <Calendar size={15} className="text-green-400" />
        <span className="text-base text-gray-400 whitespace-nowrap">{exp.period}</span>
      </div>
    </div>

    {/* Responsibilities */}
    <ul className="space-y-2 mb-4">
      {exp.description.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <CheckCircle size={15} className="text-green-400 mt-0.5 flex-shrink-0" />
          <span className="text-gray-300 text-base leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>

    {/* Skills */}
    <div className="flex flex-wrap gap-2">
      {exp.skills.map((skill, idx) => (
        <span
          key={idx}
          className="bg-green-500/10 text-green-400 px-3 py-0.5 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default WorkExperience;
