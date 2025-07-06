import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/**
 * Header – top navigation bar with glassmorphism effect
 */
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);



  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Languages', path: '/languages' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'About', path: '/about' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0F2A3F]/80 backdrop-blur-md border-b border-[#D2C1B6]/10 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="flex items-center group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D2C1B6] to-[#F9F3EF] flex items-center justify-center mr-3 transition-transform group-hover:rotate-12">
                <span className="text-[#1B3C53] font-bold">CH</span>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF]">
                CodeHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#F9F3EF] bg-[#D2C1B6]/10'
                    : 'text-[#D2C1B6]/80 hover:text-[#F9F3EF] hover:bg-[#D2C1B6]/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/NEGO2522"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-[#D2C1B6] hover:bg-[#D2C1B6]/10 transition-colors"
              aria-label="GitHub profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <button 
              onClick={() => navigate('/login')}
              className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#D2C1B6] to-[#F9F3EF] text-[#1B3C53] text-sm font-medium hover:opacity-90 transition-opacity hidden md:block"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>


    </motion.header>
  );
}
