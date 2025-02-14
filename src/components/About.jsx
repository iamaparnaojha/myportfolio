import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a second-year BTech student in Information Technology at JSS Academy of Technical Education, Noida. 
            Passionate about programming, web development, and learning new technologies. I enjoy building innovative 
            solutions and participating in hackathons to solve real-world problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
