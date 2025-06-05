import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
function Nabar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="w-full bg-white/5 backdrop-blur-md shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 bg-[#1a1d23] bg-opacity-70 px-4 py-2 rounded-sm">
            <h1 className="text-2xl font-extrabold font-sans text-white">
              HigorDev
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-6 text-white">
            <a href="#about-me" className="hover:underline">
              About me
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#skils" className="hover:underline">
              Skills
            </a>
            <a
              href="#contact"
              className="bg-[#1a1d23] bg-opacity-70 px-4 py-2 rounded-md hover:bg-opacity-90 transition"
            >
              Contato
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-[#1a1d23] bg-opacity-95 backdrop-blur-md text-white"
          >
            <a
              href="#about-me"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              Sobre mim
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              Projetos
            </a>
            <a href="#skils" onClick={() => setIsOpen(false)} className="block">
              Habilidades
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block bg-white/10 p-2 rounded-md text-center"
            >
              Contato
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export { Nabar };
