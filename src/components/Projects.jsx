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
      title: "Kawach - Secure Document Sharing",
      description: "A privacy-focused document-sharing web application built during the Convergex hackathon. Kawach emphasizes user data security and confidentiality, featuring JWT-based authentication, encrypted document handling, and secure storage using Cloudinary. Designed for seamless and safe file sharing with a responsive and intuitive UI.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      bgColor: "from-yellow-500 to-cyan-500",
      github: "https://github.com/iamaparnaojha/kawach",
      demo: "https://kawach-git-main-sujal862s-projects.vercel.app/" 
    },
    {
      title: "Artify - Social Media Platform",
      description: "A full-stack social media platform tailored for artists to showcase and share their creative work. It enables users to create profiles, upload artwork, and engage with others through likes and comments. The platform includes user authentication, content moderation, and responsive UI for a seamless experience.",
      tech: ["Django", "Python", "SQLite", "Bootstrap"],
      bgColor: "from-yellow-500 to-black-500",
      github: "https://github.com/iamaparnaojha/artify",
      demo: "https://artify-1.onrender.com/" 
    },
    {
      title: "SmartCalendar- Interactive calendar",
      description: "An interactive calendar with smooth animations, reminders, favorite dates, holiday markers, dates highlighting and smart notes feature.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      bgColor: "from-yellow-500 to-pink-500",
      github: "https://github.com/iamaparnaojha/SmartCalendar",
      demo: "https://smart-calendar-khaki.vercel.app/" 
    },
     {
      title: "Moneysphere- Personal Finance Manager",
      description: "A personal finance management application designed to help users track their expenses, set budgets, and visualize their financial data through interactive charts and reports.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      bgColor: "from-yellow-500 to-red-500",
      github: "https://github.com/iamaparnaojha/Moneysphere",
      demo: "https://moneysphere-ten.vercel.app//" 
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
      title: "Mini Audit Trail Generator",
      description: "A minimal full-stack app that tracks text changes and produces an audit trail of added and removed words per version.",
      tech: ["React+vite", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      bgColor: "from-yellow-500 to-green-500",
      github: "https://github.com/iamaparnaojha/mini_audit_trail_generator",
      demo: "https://mini-audit-trail-generator-bay.vercel.app/" 
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
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of my recent work, ranging from AI assistants to full-stack platforms and creative web experiments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass rounded-3xl overflow-hidden group hover:bg-white/10 transition-all duration-500 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`h-2 w-full bg-gradient-to-r ${project.bgColor}`} />
              
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 rounded-full hover:bg-white/20 text-gray-400 hover:text-white transition-all shadow-inner"
                      title="View Code"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 rounded-full hover:bg-white/20 text-gray-400 hover:text-white transition-all shadow-inner"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300 tracking-wider group-hover:border-white/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
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
