import { motion } from "framer-motion";

export function Main() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-[#0f172a] to-[#1e293b] overflow-hidden px-4">
      
      <div className="text-center z-10 flex flex-col gap-5">
        <h1 className="text-4xl sm:text-5xl font-semibold">
          I’m <span className="text-lime-400 font-bold">Pedro Higor</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mt-2">
          <span className="bg-white/10 px-2 py-1 rounded-md backdrop-blur-md">
            Full Stack Developer
          </span>
        </h2>
      </div>

    
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        className="mt-6 bg-lime-400 text-black font-medium px-6 py-2 rounded-full shadow-lg z-10"
      >
        MY PROJECTS
      </motion.a>

   

    </section>
  );
}


