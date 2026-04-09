import { motion } from 'framer-motion';

const Navigation = () => {
  const navItems = [
    { title: 'About', href: '#about' },
    { title: 'Experience', href: '#experience' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Achievements', href: '#achievements' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="glass-dark sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4 text-center">
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ 
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={item.href}
                className="text-gray-300 hover:text-white font-medium tracking-wide transition-all duration-300 relative group"
              >
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
