import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <section id="about-me" className="w-full bg-gradient-to-b from-[#0b1120] to-[#0f172a] py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#ccff00] mb-10"
        >
          Sobre Mim
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-md"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            laboriosam. Adipisci, vitae similique. Ratione ullam laborum quo
            accusantium harum, sint dolor illum quis nemo qui? Veniam pariatur
            esse ullam aut.
          </p>

          <ul className="space-y-3 text-gray-200 text-sm sm:text-base">
            <li>💡 Curioso por natureza e movido por desafios.</li>
            <li>
              ⚙️ Tecnologias favoritas: React, Next.js, Node.js, Tailwind.
            </li>
            <li>
              🌍 Experiência com clientes internacionais e trabalho remoto.
            </li>
            <li>
              ☕ Apaixonado por café, boas conversas e design centrado no
              usuário.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
