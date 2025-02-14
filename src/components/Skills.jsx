import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiExpress, SiTailwindcss, SiBootstrap, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["C++", "C", "Python"],
      icon: <FaPython className="text-3xl" />
    },
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
      icon: <FaReact className="text-3xl" />
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Django"],
      icon: <FaNodeJs className="text-3xl" />
    },
    {
      category: "Database",
      items: ["MongoDB"],
      icon: <FaDatabase className="text-3xl" />
    },
    {
      category: "Version Control",
      items: ["Git & GitHub"],
      icon: <FaGithub className="text-3xl" />
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-purple-600 mr-3">{skill.icon}</span>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600">
                    • {item}
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
