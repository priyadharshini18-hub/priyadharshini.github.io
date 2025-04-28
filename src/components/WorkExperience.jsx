import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const experiences = [
  {
    role: 'Graduate Research Assistant',
    company: 'University of California, Davis',
    period: 'April 2025 - Present',
    description: [
      'Served as a Teaching Assistant for the Philosophy Department (PHI 010: Introduction to Cognitive Science).',
      'Assisted Professor Jonathan Dorsey by delivering revision lectures, leading group discussions, grading assignments, and proctoring exams for over 100 students, while maintaining high standards of academic integrity and student support.',
      'Conducted weekly office hours to provide additional academic assistance and mentorship to students.',
    ],
    skills: ['Teaching', 'Grading', 'Communication', 'Student Mentoring'],
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

const WorkExperience = () => {
  return (
    <section id="experience" className="min-h-screen px-6 py-20 bg-[#0F0F0F] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-400">Work Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#1B1B1B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-semibold text-white">{exp.role}</h3>
                  <div className="flex items-center mt-2">
                    <Briefcase size={20} className="text-green-400 mr-2" />
                    <span className="text-lg text-gray-400">{exp.company}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex items-center">
                  <Calendar size={20} className="text-green-400 mr-2" />
                  <span className="text-lg text-gray-400">{exp.period}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-green-400">Responsibilities:</h4>
                <ul className="space-y-2 pl-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle size={18} className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-green-400">Skills:</h4>
                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
