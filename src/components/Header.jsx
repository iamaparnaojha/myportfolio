import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-gray-900 to-purple-600 text-white py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white"
          whileHover={{ scale: 1.1 }}
        >
          <img src="/photo.jpg" alt="Aparna Ojha" className="w-full h-full object-cover" />
        </motion.div>
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Aparna Ojha
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          BTech IT Undergraduate | Web Developer | Programmer
        </motion.p>
      </div>
    </motion.header>
  );
};

export default Header;
