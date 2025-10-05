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
           I’m a B.Tech 3rd year Information Technology student passionate about full-stack development, problem solving, and cloud technologies. I’ve solved 400+ DSA problems and maintained a 300+ day coding streak, which has built my consistency and logical thinking.

I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) with hands-on experience in Next.js, Django, Firebase, and Pinecone. I’ve also explored cloud and DevOps tools like Microsoft Azure, Docker, Cloudinary, and Vercel for scalable deployments.

I’ve participated and won in multiple hackathons, developing real-world solutions using AI, LLMs (LangChain, GPT, Gemini), and modern web frameworks. I love learning, experimenting with new technologies, and turning ideas into impactful products.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
