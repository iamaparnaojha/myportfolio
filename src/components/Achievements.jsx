import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: "GeeksforGeeks 21 Days Challenge Winner",
      description: "Successfully completed and won the 21-day coding challenge on GeeksforGeeks",
      icon: <FaTrophy className="text-4xl text-yellow-500" />
    },
    {
      title: "Convergex Hackathon Winner",
      description: "First place at JSS University hackathon with innovative secure document sharing solution",
      icon: <FaMedal className="text-4xl text-yellow-500" />
    },
    {
      title: "Code Showdown DSA Contest",
      description: "Secured 7th rank in the DSA contest at BVCOE, Delhi",
      icon: <FaAward className="text-4xl text-yellow-500" />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-400 text-center">
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
