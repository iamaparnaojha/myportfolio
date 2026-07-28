import { motion } from 'framer-motion';
import { 
  FaCode, FaLaptopCode, FaDatabase, FaBrain, 
  FaCloud, FaTools, FaTerminal 
} from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Python", "JavaScript", "TypeScript", "Java"],
      icon: <FaCode className="text-3xl" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Frontend Development",
      items: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "React.js", "Next.js"],
      icon: <FaLaptopCode className="text-3xl" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      category: "Backend and Databases",
      items: ["Node.js", "Express.js", "Django RESTful APIs", "JWT authentication", "MongoDB", "SQL", "NoSQL"],
      icon: <FaDatabase className="text-3xl" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "AI and LLM Systems",
      items: ["Retrieval-Augmented Generation (RAG)", "LangChain", "Pinecone", "OpenAI APIs", "AI Agents", "Tool Calling", "Knowledge Graphs"],
      icon: <FaBrain className="text-3xl" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      category: "Version Control & Deployment Tools/ Cloud and DevOps",
      items: ["Git", "GitHub", "Postman", "JSON", "VS Code", "Vercel", "Netlify", "Render", "Azure Blob Storage", "AWS S3", "Docker", "CI/CD Pipelines", "Cloudinary"],
      icon: <FaTools className="text-3xl" />,
      color: "from-orange-500 to-amber-500"
    },
    {
      category: "Core Computer Science",
      items: ["Data Structures and Algorithms (DSA)", "Operating system", "Database Management System", "Object-Oriented Programming (OOPs)", "REST API Development"],
      icon: <FaTerminal className="text-3xl" />,
      color: "from-gray-500 to-slate-600"
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build robust digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-3xl relative group hover:bg-white/10 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5)"
              }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <div className="w-full h-full bg-[#0f172a] rounded-[14px] flex items-center justify-center text-white">
                  {skill.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-purple-400 transition-colors">
                {skill.category}
              </h3>
              
              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
