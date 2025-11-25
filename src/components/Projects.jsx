import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "CampusQuery",
description: "An AI-powered campus assistant designed to answer student queries using GPT-4 and RAG (Retrieval-Augmented Generation) search. It provides multilingual voice support, context-aware responses, and multi-platform access via Web, WhatsApp, and Telegram. Features include an admin dashboard, automated document ingestion, and a human-in-the-loop system for improved accuracy.",
tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Pinecone", "Azure Blob Storage", "GPT-4", "ASR", "TTS"],
bgColor: "from-yellow-500 to-red-500",
github: "https://github.com/iamaparnaojha/CampusQuery",
demo: "https://curious-gingersnap-fcf0db.netlify.app/"

    },
    {
      title: "Artify - Social Media Platform",
      description: "A full-stack social media platform tailored for artists to showcase and share their creative work. It enables users to create profiles, upload artwork, and engage with others through likes and comments. The platform includes user authentication, content moderation, and responsive UI for a seamless experience.",
      tech: ["Django", "Python", "SQLite", "Bootstrap"],
      bgColor: "from-yellow-500 to-pink-500",
      github: "https://github.com/iamaparnaojha/artify",
      demo: "https://artify-1.onrender.com/" 
    },
    {
      title: "Kawach - Secure Document Sharing",
      description: "A privacy-focused document-sharing web application built during the Convergex hackathon. Kawach emphasizes user data security and confidentiality, featuring JWT-based authentication, encrypted document handling, and secure storage using Cloudinary. Designed for seamless and safe file sharing with a responsive and intuitive UI.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      bgColor: "from-yellow-500 to-cyan-500",
      github: "https://github.com/iamaparnaojha/kawach",
      demo: "https://kawach-git-main-sujal862s-projects.vercel.app/" 
    },
    {
      title: "StudyBuddy - AI Study Assistant(FlashLearn)",
      description: "An AI-powered study assistant that helps students learn more effectively by providing personalized study resources, quizzes, and progress tracking. Built with a focus on user engagement and adaptive learning techniques.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Youtube Data API", "AI services"],
      bgColor: "from-yellow-500 to-blue-500",
      github: "https://github.com/iamaparnaojha/studybuddy",
      demo: "https://flash-learn-ten.vercel.app/" 
    },
    {
      title: "Q-ease",
      description: "A smart queue management system that streamlines service waiting by digitizing token generation and providing real-time queue status for both users and service providers. Built with MERN stack, it integrates WebSockets for live updates and Twilio API for notifications, ensuring a seamless and efficient experience.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Websockets", "Twilio Api"],
      bgColor: "from-yellow-500 to-indigo-500",
      github: "https://github.com/iamaparnaojha/Q-ease",
      demo: "https://github.com/iamaparnaojha/Q-ease" 
    },
    {
      title: "Moon - E-commerce Platform",
      description: "A beautiful frontend e-commerce website built with HTML, CSS, and JavaScript, featuring modern UI design for women's essentials and luxury items.",
      tech: ["HTML", "CSS", "JavaScript"],
      bgColor: "from-yellow-500 to-indigo-500",
      github: "https://github.com/iamaparnaojha/Moon",
      demo: "https://iamaparnaojha.github.io/Moon/" 
    },
    {
      title: "Healthcare Appointment System",
      description: "An ongoing project focused on streamlining doctor-patient appointments, making healthcare services more accessible (In Development).",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      bgColor: "from-yellow-500 to-pink-500",
      github: "https://github.com/iamaparnaojha/Healthcare",
      demo: "https://iamaparnaojha.github.io/Healthcare/" 
    },
    {
      title: "Spotify Clone",
      description: "Explored frontend basics by building a Spotify clone using HTML, CSS & JS during my learning phase",
      tech: ["HTML", "CSS", "Javascript"],
      bgColor: "from-yellow-500 to-cyan-500",
      github: "https://github.com/iamaparnaojha/spotify_clonegdsc",
      demo: "https://iamaparnaojha.github.io/spotify_clonegdsc/" 
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-r ${project.bgColor} rounded-lg shadow-xl overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-white/20 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
               {/* { <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
                    <FaGithub />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </button>
                </div> } */}
<div className="flex space-x-4">
    <a 
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-gray-200 transition-colors"
    >
        <FaGithub className="text-xl" />
        <span>Code</span>
    </a>
    <a 
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-gray-200 transition-colors"
    >
          <FaExternalLinkAlt className="text-xl" />
        <span>Live Demo</span>
    </a>
</div>
              </div>
            </motion.div> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
