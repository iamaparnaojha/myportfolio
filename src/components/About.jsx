import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          className="glass max-w-4xl mx-auto p-12 rounded-[40px] shadow-2xl relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-center md:text-left">
            <p>
             I’m <span className="text-white font-semibold">Aparna Ojha</span>, a B.Tech (Information Technology) student at JSS Academy of Technical Education, passionate about building scalable web applications and exploring AI-driven solutions. I enjoy turning ideas into real-world products using modern technologies.
            </p>
            <p>
              I have a strong foundation in <span className="text-purple-400">Data Structures and Algorithms</span>, with 600+ problems solved and a consistent 400+ day coding streak. My core tech stack includes <span className="text-cyan-400">MERN</span> (MongoDB, Express.js, React, Node.js) along with tools like Next.js, TypeScript, and cloud services.
            </p>
            <p>
              I actively participate in hackathons and coding contests, achieving milestones such as <span className="text-white font-medium">SIH Semi-Finalist</span> and <span className="text-white font-medium">AIR 844 in TCS CodeVita</span>. I’m always eager to learn, adapt, and grow as a developer, with a keen interest in AI systems and scalable architectures.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
