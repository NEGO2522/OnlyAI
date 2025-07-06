import React from 'react';
import { FaPython, FaCss3Alt, FaDatabase, FaJs, FaHtml5, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const languages = [
  {
    id: 'python',
    name: 'Python',
    icon: <FaPython className="text-5xl mb-4 text-blue-500" />,
    description: 'A versatile, high-level programming language known for its readability and wide range of applications from web development to data science and AI.',
    level: 'Beginner to Advanced',
    projects: ['Web Apps', 'Data Analysis', 'Machine Learning', 'Automation'],
    youtubeId: 'rfscVS0vtbw' // Python Tutorial for Beginners - Full Course
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: <FaCss3Alt className="text-5xl mb-4 text-cyan-500" />,
    description: 'A utility-first CSS framework for rapidly building custom designs without ever leaving your HTML.',
    level: 'Beginner to Advanced',
    projects: ['Responsive Websites', 'UI Components', 'Landing Pages', 'Web Apps'],
    youtubeId: 'bqmUXxfu5nw' // Tailwind CSS Crash Course

  },
  {
    id: 'sql',
    name: 'SQL',
    icon: <FaDatabase className="text-5xl mb-4 text-yellow-500" />,
    description: 'Structured Query Language for managing and manipulating relational databases efficiently.',
    level: 'Beginner to Intermediate',
    projects: ['Database Design', 'Data Analysis', 'Backend Development', 'Reports'],
    youtubeId: 'HXV3zeQKqGY' // SQL Tutorial - Full Database Course

  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: <FaJs className="text-5xl mb-4 text-yellow-400" />,
    description: 'The programming language of the web, enabling interactive web pages and powerful web applications.',
    level: 'Beginner to Advanced',
    projects: ['Web Apps', 'APIs', 'Games', 'Mobile Apps'],
    youtubeId: 'PkZNo7MFNFg' // JavaScript Tutorial for Beginners

  },
  {
    id: 'html',
    name: 'HTML',
    icon: <FaHtml5 className="text-5xl mb-4 text-orange-500" />,
    description: 'The standard markup language for creating web pages and web applications.',
    level: 'Beginner',
    projects: ['Websites', 'Web Apps', 'Email Templates', 'Documentation'],
    youtubeId: 'pQN-pnXPaVg' // HTML Full Course

  },
  {
    id: 'c',
    name: 'C Programming',
    icon: <FaCode className="text-5xl mb-4 text-blue-400" />,
    description: 'A general-purpose, procedural computer programming language supporting structured programming.',
    level: 'Beginner to Advanced',
    projects: ['System Software', 'Embedded Systems', 'Games', 'Operating Systems'],
    youtubeId: 'KJgsSFOSQv0' // C Programming Tutorial for Beginners

  }
];

const Tutorials = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0F2A3F] via-[#1B3C53] to-[#0F2A3F] text-[#F9F3EF] pt-32 pb-16">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0F2A3F]/70 via-[#1B3C53]/30 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuLWMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMSAxMHYxTTMxIDEwdjFNMTEgMzB2MU0zMSAzMHYxIiBzdHJva2U9IiNGOUYzRUYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuLWMpIi8+PC9zdmc+')] opacity-5"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="fixed top-1/4 -left-10 w-72 h-72 bg-[#D2C1B6]/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>
      <div className="fixed bottom-1/4 -right-10 w-96 h-96 bg-[#456882]/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[#D2C1B6]/10 backdrop-blur-sm border border-[#D2C1B6]/20 text-[#D2C1B6] text-sm font-medium">
            Explore Our Courses
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#F9F3EF] mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#F9F3EF] via-[#D2C1B6] to-[#F9F3EF] bg-opacity-90">
            Programming Tutorials
          </h1>
          <p className="text-xl text-[#D2C1B6]/90 max-w-3xl mx-auto leading-relaxed font-light">
            Master the essential programming languages with our comprehensive tutorials and hands-on projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {languages.map((language, index) => (
            <motion.div
              key={language.id}
              className="relative bg-[#1B3C53]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#D2C1B6]/10 hover:border-[#D2C1B6]/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B3C53]/50 to-[#0F2A3F]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#D2C1B6]/10 mb-6">
                    {React.cloneElement(language.icon, { className: 'w-10 h-10' })}
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-[#F9F3EF]">{language.name}</h2>
                  <p className="text-[#D2C1B6]/90 mb-6 leading-relaxed">{language.description}</p>
                  <div className="mt 6">
                    <div className="flex flex-col items-center gap-4 mt-4">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#D2C1B6]/10 text-[#D2C1B6] border border-[#D2C1B6]/20">
                        {language.level}
                      </span>
                      <button 
                        onClick={() => window.open(`https://www.youtube.com/watch?v=${language.youtubeId}`, '_blank')}
                        className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] text-[#1B3C53] rounded-lg font-medium hover:opacity-90 transition-opacity"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        Watch Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D2C1B6]/5 to-transparent h-px -top-10 w-full"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#F9F3EF] mb-6">Ready to start learning?</h3>
          <p className="text-[#D2C1B6]/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Choose a language above to begin your programming journey. Each tutorial is designed to take you from beginner to advanced level.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] text-[#1B3C53] px-8 py-3.5 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden group shadow-lg hover:shadow-xl hover:shadow-[#D2C1B6]/20"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>View All Tutorials</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#F9F3EF] to-[#D2C1B6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Tutorials;