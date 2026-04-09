import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const contacts = [
    {
      platform: "Email",
      link: "mailto:ojhaaparna0@gmail.com",
      icon: <FaEnvelope className="text-2xl" />,
      username: "ojhaaparna0@gmail.com"
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/aparna-ojha-b124a72a9/",
      icon: <FaLinkedin className="text-2xl" />,
      username: "aparna-ojha"
    },
    {
      platform: "GitHub",
      link: "https://github.com/iamaparnaojha",
      icon: <FaGithub className="text-2xl" />,
      username: "iamaparnaojha"
    },
    {
      platform: "Twitter",
      link: "https://x.com/iamaparnaojha",
      icon: <FaTwitter className="text-2xl" />,
      username: "@iamaparnaojha"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Let's Collaborate
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-8 rounded-[32px] flex flex-col items-center group hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 border border-white/5 hover:border-purple-500/30 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/10 transition-all duration-500">
                <span className="text-purple-400 text-3xl group-hover:text-purple-300 transition-colors">
                  {contact.icon}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{contact.platform}</h3>
              <p className="text-gray-400 text-center font-medium group-hover:text-gray-300 transition-colors">
                {contact.username}
              </p>
              
              <div className="mt-4 flex items-center text-purple-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Connect</span>
                <svg className="w-4 h-4 ml-2 animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
