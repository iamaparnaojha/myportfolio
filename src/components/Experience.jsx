import { motion } from 'framer-motion';
import { FaCodeBranch, FaLaptopCode, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: "Freelancer Web Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      description: "Designing and developing custom web solutions for diverse clients, focusing on responsive design, performance optimization, and seamless user experiences. Specializing in modern frameworks like React and Next.js.",
      icon: <FaLaptopCode className="text-2xl" />,
      color: "from-purple-500 to-indigo-500",
      skills: ["React", "Next.js", "Tailwind CSS", "Client Relations"]
    },
    {
      role: "Open Source Contributor",
      company: "GitHub Community",
      period: "2023 - Present",
      description: "Actively contributing to various open-source projects, fixing bugs, and implementing new features. Collaborating with developers worldwide to improve software quality and accessibility.",
      icon: <FaCodeBranch className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["Git", "GitHub", "Collaborative Development", "Documentation"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Professional Journey
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A snapshot of my professional growth and contributions to the tech ecosystem.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-3xl relative overflow-hidden group hover:bg-white/10 transition-all duration-500"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} p-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <div className="w-full h-full bg-[#0f172a] rounded-[14px] flex items-center justify-center text-white">
                    {exp.icon}
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-purple-500 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                      <FaCalendarAlt className="mr-2 text-sm" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, sIndex) => (
                      <span 
                        key={sIndex} 
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
