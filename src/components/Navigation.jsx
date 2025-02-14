import { motion } from 'framer-motion';

const Navigation = () => {
  const navItems = [
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Achievements', href: '#achievements' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-gray-900 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6 py-4">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={item.href}
                className="text-white hover:text-purple-400 transition-colors duration-300"
              >
                {item.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
