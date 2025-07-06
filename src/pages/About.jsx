import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';

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
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#3498DB] text-white mb-6 shadow-lg shadow-[#3498DB20]">
        {React.cloneElement(icon, { className: 'w-6 h-6' })}
      </div>
      <h3 className="text-xl font-bold text-[#1B3C53] mb-3 group-hover:text-[#456882] transition-colors">{title}</h3>
      <p className="text-[#456882] leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const About = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & Lead Developer',
      bio: 'Passionate about creating educational platforms that make learning to code accessible to everyone.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'Content Creator',
      bio: 'Dedicated to creating high-quality programming tutorials and learning resources.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      name: 'Alex Johnson',
      role: 'UI/UX Designer',
      bio: 'Focused on creating intuitive and engaging user experiences for our learning platform.',
      image: 'https://randomuser.me/api/portraits/men/2.jpg'
    }
  ];

  const features = [
    {
      icon: <FaCode className="w-8 h-8 mb-4 text-blue-500" />,
      title: 'Learn by Doing',
      description: 'Practice coding directly in your browser with our interactive code editor.'
    },
    {
      icon: <FaLightbulb className="w-8 h-8 mb-4 text-yellow-500" />,
      title: 'Expert Guidance',
      description: 'Learn from industry professionals with years of teaching experience.'
    },
    {
      icon: <FaUsers className="w-8 h-8 mb-4 text-green-500" />,
      title: 'Community Support',
      description: 'Join a community of like-minded learners and grow together.'
    },
    {
      icon: <FaRocket className="w-8 h-8 mb-4 text-purple-500" />,
      title: 'Fast Track Learning',
      description: 'Structured learning paths to help you master programming faster.'
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0F2A3F] via-[#1B3C53] to-[#0F2A3F]">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0F2A3F]/70 via-[#1B3C53]/30 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuLWMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMSAxMHYxTTMxIDEwdjFNMTEgMzB2MU0zMSAzMHYxIiBzdHJva2U9IiNGOUYzRUYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhl/aWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuLWMpIi8+PC9zdmc+')] opacity-5"></div>
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
              🚀 Our Story
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-[#F9F3EF] mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#F9F3EF] via-[#D2C1B6] to-[#F9F3EF] bg-opacity-90"
            >
              About CodeHub
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-[#D2C1B6]/90 mb-8 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Empowering the next generation of developers through accessible, high-quality programming education.
            </motion.p>
          </div>
        </section>

      {/* Mission Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#F9F3EF] mb-6">
              Our Mission
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#D2C1B6] to-transparent mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-[#D2C1B6] leading-relaxed">
              At CodeHub, we believe that everyone should have the opportunity to learn programming. 
              Our mission is to break down barriers to tech education and provide a platform where 
              anyone, regardless of their background, can develop valuable coding skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#F9F3EF]">
                Why Choose CodeHub?
              </h2>
            </motion.div>
            <div className="h-1 w-24 bg-gradient-to-r from-[#D2C1B6] to-transparent mx-auto mb-8 rounded-full"></div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-[#F9F3EF] max-w-3xl mx-auto leading-relaxed font-light"
            >
              We offer a unique learning experience designed to help you succeed in your coding journey.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLightbulb className="text-4xl mb-6" />,
                title: 'Interactive Learning',
                description: 'Engage with hands-on exercises and real-world projects that make learning to code fun and effective.'
              },
              {
                icon: <FaUsers className="text-4xl mb-6" />,
                title: 'Expert Community',
                description: 'Join a supportive community of learners and get help from experienced developers when you need it.'
              },
              {
                icon: <FaRocket className="text-4xl mb-6" />,
                title: 'Career Growth',
                description: 'Build a portfolio of projects and gain the skills needed to advance your career in tech.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#112240]/30 p-8 rounded-xl border border-[#233554] hover:border-[#64FFDA] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-4 text-[#64FFDA]">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#F9F3EF] mb-4">{feature.title}</h3>
                  <p className="text-[#D2C1B6] leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F9F3EF]">Meet Our Team</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#D2C1B6] to-transparent mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1B3C53] bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 text-center border border-[#D2C1B6]/10 hover:border-[#D2C1B6]/30 transition-all duration-300"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#D2C1B6]/20">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#F9F3EF] mb-2">{member.name}</h3>
                <p className="text-[#D2C1B6] font-medium mb-4">{member.role}</p>
                <p className="text-[#D2C1B6]/80">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D2C1B6] to-[#456882] opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F9F3EF]">Ready to Start Your Coding Journey?</h2>
            <p className="text-xl text-[#D2C1B6] mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of students who have already transformed their lives with CodeHub.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] text-[#1B3C53] font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 text-lg"
            >
              Get Started for Free
            </motion.button>
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default About;