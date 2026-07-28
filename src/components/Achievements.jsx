import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaCheckCircle, FaFire, FaGithub} from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {title: "SIH Semi-Finalist",
      description: "Secured a spot in the semi-finals of the Smart India Hackathon (SIH) 2025, showcasing innovative problem-solving skills and teamwork",
      icon: <FaTrophy className="text-4xl text-pink-500" />
    },
     {title: "844 AIR in TCS CodeVita",
      description: "Achieved an All India Rank of 844 in the prestigious TCS CodeVita coding competition, demonstrating strong algorithmic and programming skills",
      icon: <FaTrophy className="text-4xl text-purple-500" />
    },
    {title: "GeeksforGeeks 21 Days Challenge Winner",
      description: "Successfully completed and won the 21-day coding challenge on GeeksforGeeks",
      icon: <FaTrophy className="text-4xl text-red-500" />
    },
    {
      title: "Convergex Hackathon Winner",
      description: "First place at JSS University hackathon with innovative secure document sharing solution",
      icon: <FaMedal className="text-4xl text-yellow-500" />
    },
    {
      title: "Code Showdown DSA Contest",
      description: "Runner-up in the DSA contest at BVCOE, Delhi",
      icon: <FaAward className="text-4xl text-blue-500" />
    },
    {
      title: "700+ Problems Solved",
      description: "Solved over 700 problems across platforms like LeetCode and GeeksforGeeks",
      icon: <FaCheckCircle className="text-4xl text-green-500" />
    },
    {
      title: "500+ Days Learning Streak",
      description: "Maintained a 500+ day consistent learning streak, demonstrating dedication and persistence",
      icon: <FaFire className="text-4xl text-red-500" />
    },
{
  title: "Student placement coordinator at JSSATE",
  description: "Serving as student placement coordinater, coordinating with companies, organizing placement drives, and bridge the gap between students and recruiters to facilitate successful placements",
  icon: <FaGithub className="text-4xl text-purple-500" />
},
{
  title: "Strong academic record",
  description: "3rd rank in my college with a overall average CGPA Of 8.9; 1st rank in 6th semester scoring 9.5 SGPA, consistently performing well in academics and maintaining a strong academic record throughout my studies",
  icon: <FaGithub className="text-4xl text-purple-500" />
},
    
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Milestones & Recognition
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-3xl relative group hover:bg-white/10 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)"
              }}
            >
              <div className="flex justify-center mb-8 relative">
                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative group-hover:scale-110 transition-transform duration-500">
                  {achievement.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-center mb-4 text-white group-hover:text-purple-400 transition-colors">
                {achievement.title}
              </h3>
              
              <p className="text-gray-400 text-center leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
