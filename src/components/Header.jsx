import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: 'url("/hero.png")' }}
      />
      <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-[2px]" />

      <div className="container mx-auto px-4 z-20">
        <motion.div 
          className="glass-dark max-w-4xl mx-auto p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated border/glow effect */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl flex-shrink-0 relative group"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <img src="/photo.jpg" alt="Aparna Ojha" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <div className="text-center md:text-left">
              <motion.h1 
                className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Aparna Ojha
              </motion.h1>
              
              <motion.div 
                className="text-lg md:text-xl text-gray-300 space-y-2 font-light tracking-wide"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span>BTech IT Undergraduate</span>
                  <span className="hidden md:inline text-purple-500">|</span>
                  <a 
                    href="https://github.com/iamaparnaojha" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 border border-white/10 hover:border-purple-500"
                  >
                    <span className="text-white">Web Developer</span>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-75" />
                  </a>
                  <span className="hidden md:inline text-purple-500">|</span>
                  <a 
                    href="https://leetcode.com/u/iamaparnaojha/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 border border-white/10 hover:border-orange-500"
                  >
                    <span className="text-white">Programmer</span>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse opacity-75" />
                  </a>
                </p>
              </motion.div>

              <motion.div 
                className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <a 
                  href="#contact" 
                  className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                >
                  Hire Me
                </a>
                <a 
                  href="/aparna_ojha_resume.pdf" 
                  target="_blank"
                  className="px-8 py-3 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 border border-white/20"
                >
                  View Resume
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
