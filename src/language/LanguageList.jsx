import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaReact, 
  FaCode, 
  FaJava, 
  FaPython, 
  FaJs,
  FaBolt 
} from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

/**
 * LanguageList – grid of language cards displayed on the Home page.
 */
export default function LanguageList() {
  const languages = [
    {
      slug: "python",
      label: "Python",
      icon: FaPython,
      color: "from-amber-400 to-amber-600",
      bg: "bg-gradient-to-br from-amber-50 to-amber-100",
      description: "Versatile and beginner-friendly"
    },
    {
      slug: "javascript",
      label: "JavaScript",
      icon: FaJs,
      color: "from-yellow-400 to-yellow-600",
      bg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      description: "The language of the web"
    },
    {
      slug: "java",
      label: "Java",
      icon: FaJava,
      color: "from-red-500 to-red-700",
      bg: "bg-gradient-to-br from-red-50 to-red-100",
      description: "Enterprise-grade applications"
    },
    {
      slug: "csharp",
      label: "C#",
      icon: FaCode,
      color: "from-purple-500 to-purple-700",
      bg: "bg-gradient-to-br from-purple-50 to-purple-100",
      description: "Microsoft's versatile language"
    },
    {
      slug: "tailwind",
      label: "Tailwind CSS",
      icon: FaBolt,
      color: "from-cyan-500 to-cyan-700",
      bg: "bg-gradient-to-br from-cyan-50 to-cyan-100",
      description: "Utility-first CSS framework"
    },
    {
      slug: "react",
      label: "React",
      icon: FaReact,
      color: "from-sky-500 to-sky-700",
      bg: "bg-gradient-to-br from-sky-50 to-sky-100",
      description: "JavaScript library for UIs"
    },
  ];

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {languages.map(({ slug, label, icon: Icon, bg, color, description }) => (
        <motion.div key={slug} variants={item}>
          <Link
            to={`/language/${slug}`}
            className={`block h-full p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${bg} hover:ring-2 hover:ring-opacity-50 hover:ring-indigo-200 overflow-hidden group`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-xl shadow-sm ${bg} bg-opacity-50 flex items-center justify-center`}>
                <Icon className={`text-3xl text-white`} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors">
                  {label}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {description}
                </p>
                <div className="mt-3 flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors">
                  Start learning
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
