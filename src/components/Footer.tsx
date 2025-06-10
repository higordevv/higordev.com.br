export function Footer() {
  return (
    <section className="w-full bg-[#0b1120] border-t border-white/10 py-10 px-4 sm:px-8 md:px-16 lg:px-24 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-[#ccff00]">Higor Dev</h3>
          <p className="text-gray-400 text-sm mt-1">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-[#ccff00] transition">Sobre</a>
          <a href="#projects" className="hover:text-[#ccff00] transition">Projetos</a>
          <a href="#contact" className="hover:text-[#ccff00] transition">Contato</a>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/higordevv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ccff00] transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-higor/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ccff00] transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
