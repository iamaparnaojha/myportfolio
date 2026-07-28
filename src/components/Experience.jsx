import { motion } from 'framer-motion';
import { FaCodeBranch, FaLaptopCode, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
   {
  role: "Software Engineering Intern",
  company: "Site Guru",
  period: "July 2026 - Present",
  description:
    "Developing scalable full-stack applications using Next.js, Node.js, SQL, and Agile/SDLC practices. Building secure REST APIs, RBAC-based authentication, real-time messaging with Socket.IO, responsive dashboards, OTP authentication, and optimizing application performance.",
  icon: <FaLaptopCode className="text-2xl" />,
  color: "from-emerald-500 to-teal-500",
  skills: [
    "Next.js",
    "Node.js",
    "SQL",
    "REST APIs",
    "Socket.IO",
    "RBAC",
    "SSR",
    "OTP Authentication",
    "Agile",
    "SDLC"
  ]
},
{
  role: "Student Placement Coordinator",
  company: "JSS Academy of Technical Education",
  period: "Feb 2026 - Present",
  description:
    "Coordinating placement activities, assisting recruiters and students throughout the hiring process, managing communication, organizing campus recruitment drives, and collaborating with placement teams to ensure smooth execution of recruitment events.",
  icon: <FaCalendarAlt className="text-2xl" />,
  color: "from-indigo-500 to-violet-500",
  skills: [
    "Communication",
    "Team Management",
    "Event Coordination",
    "Leadership"
  ]
},
{
  role: "Gen AI & Cloud Computing Intern",
  company: "BharatCares (IBM SkillsBuild)",
  period: "Jun 2026 - Jul 2026",
  description:
    "Completed a 6-week internship focused on Generative AI, Prompt Engineering, IBM Cloud, and cloud-native application development. Built AI-powered solutions, explored LLM workflows, and gained hands-on experience with real-world AI implementation through guided projects and masterclasses.",
  icon: <FaCodeBranch className="text-2xl" />,
  color: "from-orange-500 to-red-500",
  skills: [
    "Generative AI",
    "Prompt Engineering",
    "IBM Cloud",
    "Cloud Computing"
  ]
},
{
  role: "Freelance Full Stack Developer",
  company: "Self-Employed",
  period: "Oct 2025 - Mar 2026",
  description:
    "Designed, developed, and deployed MERN Stack and Next.js applications including portfolio websites, event registration platforms, and AI-powered RAG applications. Integrated LLM APIs, vector databases, SEO optimization, and database-backed workflows for client projects.",
  icon: <FaCodeBranch className="text-2xl" />,
  color: "from-purple-500 to-pink-500",
  skills: [
    "MERN Stack",
    "Next.js",
    "MongoDB",
    "React",
    "Node.js",
    "RAG",
    "LLMs",
    "SEO"
  ]
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
