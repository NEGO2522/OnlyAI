import React from 'react';
import { motion } from "framer-motion";
import { FiCode, FiLayers, FiZap, FiBookOpen, FiSend } from "react-icons/fi";
import { SiJavascript, SiPython, SiCplusplus, SiTypescript } from "react-icons/si";
import { FaJava, FaGem } from "react-icons/fa";

// Feature card component
const FeatureCard = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)' }}
    transition={{ duration: 0.3, delay, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="relative bg-[#F7F7F7] backdrop-blur-sm p-8 rounded-2xl border border-[#C9C9C9] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#F7F7F7] to-[#E5E5E5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#3498DB] text-[#FFFFFF] mb-6 shadow-lg shadow-[#3498DB20]">
        {React.cloneElement(icon, { className: 'w-6 h-6' })}
      </div>
      <h3 className="text-xl font-bold text-[#1B3C53] mb-3 group-hover:text-[#456882] transition-colors">{title}</h3>
      <p className="text-[#456882] leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const features = [
  {
    icon: <FiCode className="w-5 h-5" />,
    title: "Learn by Doing",
    description: "Practice with interactive coding exercises and real-world projects.",
  },
  {
    icon: <FiLayers className="w-5 h-5" />,
    title: "Structured Paths",
    description: "Follow curated learning paths from beginner to advanced levels.",
  },
  {
    icon: <FiZap className="w-5 h-5" />,
    title: "Quick Challenges",
    description: "Test your skills with bite-sized coding challenges and exercises.",
  },
  {
    icon: <FiBookOpen className="w-5 h-5" />,
    title: "Comprehensive Docs",
    description: "Access detailed documentation and references for each concept.",
  },
];

const popularLanguages = [
  { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5 text-yellow-500" /> },
  { name: 'Python', icon: <SiPython className="w-5 h-5 text-blue-500" /> },
  { name: 'Java', icon: <FaJava className="w-5 h-5 text-red-500" /> },
  { name: 'C++', icon: <SiCplusplus className="w-5 h-5 text-blue-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5 text-blue-600" /> },
  { name: 'Ruby', icon: <FaGem className="w-5 h-5 text-red-600" /> },
];

/**
 * Home page – landing screen for the Programming Hub
 */
function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0F2A3F] via-[#1B3C53] to-[#0F2A3F]">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0F2A3F]/70 via-[#1B3C53]/30 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuLWMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMSAxMHYxTTMxIDEwdjFNMTEgMzB2MU0zMSAzMHYxIiBzdHJva2U9IiNGOUYzRUYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuLWMpIi8+PC9zdmc+')] opacity-5"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Floating Elements */}
        <div className="fixed top-1/4 -left-10 w-72 h-72 bg-[#D2C1B6]/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="fixed bottom-1/4 -right-10 w-96 h-96 bg-[#456882]/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 rounded-full bg-[#D2C1B6]/10 backdrop-blur-sm border border-[#D2C1B6]/20 text-[#D2C1B6] text-sm font-medium"
            >
              🚀 Start Your Coding Journey
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-[#F9F3EF] mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#F9F3EF] via-[#D2C1B6] to-[#F9F3EF] bg-opacity-90"
            >
              Master Programming
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-[#D2C1B6]/90 mb-8 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Learn to code with interactive tutorials, hands-on examples, and real-world projects. 
              <span className="block mt-2 text-[#F9F3EF]/80">Start your journey today.</span>
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] text-[#1B3C53] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden group shadow-lg hover:shadow-xl hover:shadow-[#D2C1B6]/20"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Start Learning</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#F9F3EF] to-[#D2C1B6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
              
              <motion.a
                href="#how-it-works"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-4 bg-transparent text-[#F9F3EF] font-medium rounded-xl border-2 border-[#D2C1B6]/30 hover:border-[#D2C1B6]/60 transition-all flex items-center justify-center gap-2 group"
              >
                <span>How It Works</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center gap-6"
            >
              {['Trusted by 50,000+ developers', '100+ hours of content', 'Interactive exercises', 'Real-world projects'].map((text, index) => (
                <div key={index} className="flex items-center gap-2 text-[#D2C1B6]/80 text-sm">
                  <svg className="w-4 h-4 text-[#D2C1B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {text}
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Hero Illustration */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 md:mt-24 relative"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D2C1B6]/20 to-transparent rounded-3xl blur-2xl -z-10"></div>
              <div className="relative bg-[#0F2A3F]/30 backdrop-blur-sm border border-[#D2C1B6]/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'Interactive', desc: 'Hands-on coding exercises', icon: '💻' },
                    { title: 'Structured', desc: 'Step-by-step learning paths', icon: '📚' },
                    { title: 'Community', desc: 'Join 50,000+ developers', icon: '👥' }
                  ].map((item, i) => (
                    <div key={i} className="bg-[#1B3C53]/50 backdrop-blur-sm p-6 rounded-xl border border-[#D2C1B6]/10 hover:border-[#D2C1B6]/30 transition-all">
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h3 className="text-[#F9F3EF] font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-[#D2C1B6]/80 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#D2C1B6]/5 rounded-full mix-blend-soft-light filter blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#D2C1B6]/10 backdrop-blur-sm border border-[#D2C1B6]/20 text-[#D2C1B6] text-sm font-medium">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F9F3EF] mb-4">
                Everything You Need to
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] mb-6">
                Succeed in Tech
              </h2>
              <p className="text-lg text-[#D2C1B6]/90 max-w-2xl mx-auto">
                Our platform is designed to take you from beginner to job-ready developer
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative h-full"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    index % 3 === 0 ? 'from-blue-500/20 to-blue-600/10' : 
                    index % 3 === 1 ? 'from-purple-500/20 to-purple-600/10' : 
                    'from-amber-500/20 to-amber-600/10'
                  } rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative h-full bg-[#0F2A3F]/50 backdrop-blur-sm p-6 rounded-2xl border border-[#D2C1B6]/10 group-hover:border-[#D2C1B6]/30 transition-all">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#D2C1B6]/10 text-[#D2C1B6] mb-4 group-hover:bg-[#D2C1B6] group-hover:text-[#1B3C53] transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#F9F3EF] mb-2 group-hover:text-[#D2C1B6] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[#D2C1B6]/80">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mt-16 text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#F9F3EF] mb-4">Ready to start your coding journey?</h3>
              <p className="text-lg text-[#D2C1B6]/90 mb-8 max-w-2xl mx-auto">Join thousands of developers who have already transformed their careers with our platform.</p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] text-[#1B3C53] px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-[#D2C1B6]/20"
              >
                Get Started for Free
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Languages Section */}
        <section id="languages" className="py-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -left-40 top-1/3 w-80 h-80 bg-[#456882]/5 rounded-full mix-blend-soft-light filter blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#D2C1B6]/10 backdrop-blur-sm border border-[#D2C1B6]/20 text-[#D2C1B6] text-sm font-medium">
                Start Learning
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F9F3EF] mb-4">
                Popular Programming
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] mb-6">
                Languages
              </h2>
              <p className="text-lg text-[#D2C1B6]/90 max-w-2xl mx-auto">
                Choose from our most popular programming languages to start your coding journey
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {popularLanguages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 400, 
                    damping: 15,
                    delay: index * 0.05
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative h-full"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    index % 2 === 0 ? 'from-blue-500/15 to-blue-600/5' : 'from-purple-500/15 to-purple-600/5'
                  } rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative h-full bg-[#0F2A3F]/50 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-[#D2C1B6]/10 group-hover:border-[#D2C1B6]/30 transition-all flex flex-col items-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-[#D2C1B6]/10 text-[#D2C1B6] mb-4 group-hover:bg-[#D2C1B6] group-hover:text-[#1B3C53] transition-colors duration-300">
                      {React.cloneElement(lang.icon, { 
                        className: 'w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110' 
                      })}
                    </div>
                    <h3 className="text-center font-semibold text-[#F9F3EF] group-hover:text-[#D2C1B6] transition-colors text-sm md:text-base">
                      {lang.name}
                    </h3>
                    <div className="mt-3 w-8 h-1 bg-gradient-to-r from-transparent via-[#D2C1B6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mt-16 text-center"
            >
              <p className="text-lg text-[#D2C1B6]/90 mb-6">Don't see your language of choice?</p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-xl border-2 border-[#D2C1B6] text-[#D2C1B6] font-medium text-base hover:bg-[#D2C1B6]/10 transition-colors duration-300"
              >
                View All Languages
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -right-40 top-1/4 w-80 h-80 bg-[#D2C1B6]/5 rounded-full mix-blend-soft-light filter blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#D2C1B6]/10 backdrop-blur-sm border border-[#D2C1B6]/20 text-[#D2C1B6] text-sm font-medium">
                Get Started
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F9F3EF] mb-4">
                Start Your Coding Journey
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] mb-6">
                In 4 Simple Steps
              </h2>
              <p className="text-lg text-[#D2C1B6]/90 max-w-2xl mx-auto">
                Follow these easy steps to begin your path to becoming a professional developer
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Animated connecting line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#D2C1B6]/30 to-transparent">
                <motion.div 
                  className="w-full h-full bg-gradient-to-b from-[#D2C1B6] to-[#F9F3EF] origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
                  viewport={{ once: true }}
                />
              </div>
              
              <div className="space-y-12 md:space-y-16">
                {[
                  {
                    step: "01",
                    title: "Create Your Account",
                    description: "Sign up for free and set up your personalized learning dashboard with just your email.",
                    icon: "👤",
                    color: "from-blue-500/20 to-blue-600/10"
                  },
                  {
                    step: "02",
                    title: "Choose Your Path",
                    description: "Select from our curated learning paths or explore individual topics at your own pace.",
                    icon: "🛣️",
                    color: "from-purple-500/20 to-purple-600/10"
                  },
                  {
                    step: "03",
                    title: "Start Learning",
                    description: "Dive into interactive lessons with hands-on coding exercises and real-time feedback.",
                    icon: "🎯",
                    color: "from-amber-500/20 to-amber-600/10"
                  },
                  {
                    step: "04",
                    title: "Build & Share",
                    description: "Apply your knowledge by building real-world projects and sharing them with our community.",
                    icon: "🚀",
                    color: "from-emerald-500/20 to-emerald-600/10"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15,
                      type: 'spring',
                      stiffness: 100
                    }}
                    className={`relative pl-20 md:pl-0 md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                  >
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#1B3C53] to-[#0F2A3F] border-2 border-[#D2C1B6]/20 flex items-center justify-center text-2xl text-[#D2C1B6] z-10">
                      {item.icon}
                    </div>
                    
                    <div className="md:hidden absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#1B3C53] to-[#0F2A3F] border-2 border-[#D2C1B6]/20 flex items-center justify-center text-2xl text-[#D2C1B6] z-10">
                      {item.icon}
                    </div>
                    
                    <motion.div 
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`relative md:w-[calc(50%-4rem)] bg-[#0F2A3F]/50 backdrop-blur-sm p-6 rounded-2xl border border-[#D2C1B6]/10 group hover:border-[#D2C1B6]/30 transition-all`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                      <span className="text-[#D2C1B6] text-sm font-medium">Step {item.step}</span>
                      <h3 className="text-xl font-semibold text-[#F9F3EF] mt-1 mb-3 group-hover:text-[#D2C1B6] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#D2C1B6]/80">{item.description}</p>
                      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#1B3C53] border-2 border-[#D2C1B6] rounded-full hidden md:block"></div>
                      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#D2C1B6] rounded-full hidden md:block"></div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mt-20 text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#F9F3EF] mb-6">Ready to transform your coding skills?</h3>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] text-[#1B3C53] px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-[#D2C1B6]/20"
              >
                Start Learning Now
              </motion.button>
              <p className="text-[#D2C1B6]/80 text-sm mt-4">No credit card required • 7-day free trial</p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-[#1B3C53] to-[#0F2A3F] border-t border-[#D2C1B6]/10 pt-20 pb-12 text-[#F9F3EF] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#D2C1B6]/5 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#456882]/5 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            {/* Brand and description */}
            <div className="md:col-span-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D2C1B6] to-[#F9F3EF] flex items-center justify-center mr-3">
                  <FiCode className="w-5 h-5 text-[#1B3C53]" />
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF]">
                  CodeHub
                </span>
              </div>
              <p className="text-[#D2C1B6]/80 mb-6 max-w-xs">
                Empowering the next generation of developers with interactive learning experiences and quality resources.
              </p>
              <div className="flex space-x-4">
                {['github', 'twitter', 'linkedin', 'youtube'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-9 h-9 rounded-full bg-[#0F2A3F] border border-[#D2C1B6]/10 flex items-center justify-center text-[#D2C1B6] hover:bg-[#D2C1B6] hover:text-[#1B3C53] transition-colors"
                    aria-label={social}
                  >
                    <FiZap className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="md:col-span-2 md:col-start-6">
              <h4 className="text-sm font-semibold text-[#F9F3EF] uppercase tracking-wider mb-5">Explore</h4>
              <ul className="space-y-3">
                {['Languages', 'Tutorials', 'Projects', 'Challenges', 'Blog'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-[#D2C1B6]/80 hover:text-[#F9F3EF] text-sm transition-colors flex items-center group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#D2C1B6] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold text-[#F9F3EF] uppercase tracking-wider mb-5">Resources</h4>
              <ul className="space-y-3">
                {['Documentation', 'API Reference', 'Community', 'Help Center', 'Roadmaps'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-[#D2C1B6]/80 hover:text-[#F9F3EF] text-sm transition-colors flex items-center group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#D2C1B6] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-[#F9F3EF] uppercase tracking-wider mb-5">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Contact', 'Blog', 'Press'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-[#D2C1B6]/80 hover:text-[#F9F3EF] text-sm transition-colors flex items-center group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#D2C1B6] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="md:col-span-4 lg:col-span-3">
              <h4 className="text-sm font-semibold text-[#F9F3EF] uppercase tracking-wider mb-5">Stay Updated</h4>
              <p className="text-[#D2C1B6]/80 text-sm mb-4">Subscribe to our newsletter for the latest updates and resources.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 bg-[#0F2A3F] border border-[#D2C1B6]/20 text-[#F9F3EF] placeholder-[#D2C1B6]/50 text-sm rounded-l-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#D2C1B6]/50 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] text-[#1B3C53] font-medium px-4 rounded-r-lg hover:opacity-90 transition-opacity">
                  <FiSend className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-[#D2C1B6]/60 mt-2">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-[#D2C1B6]/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#D2C1B6]/60 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} CodeHub. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-[#D2C1B6]/60 hover:text-[#F9F3EF] transition-colors">Terms</a>
              <a href="#" className="text-sm text-[#D2C1B6]/60 hover:text-[#F9F3EF] transition-colors">Privacy</a>
              <a href="#" className="text-sm text-[#D2C1B6]/60 hover:text-[#F9F3EF] transition-colors">Cookies</a>
              <a href="#" className="text-sm text-[#D2C1B6]/60 hover:text-[#F9F3EF] transition-colors">Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
