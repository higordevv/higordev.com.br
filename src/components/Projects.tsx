import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Portfolio",
    description: "Website pessoal com animações, responsivo e estilo futurista.",
    techs: ["Next.js", "Tailwind", "Framer Motion"],
    liveUrl: "https://seuportfolio.com",
    repoUrl: "https://github.com/seuuser/portfolio",
  },
  {
    title: "Task Manager API",
    description: "API robusta com autenticação JWT e integração MongoDB.",
    techs: ["Node.js", "Express", "MongoDB"],
    liveUrl: "",
    repoUrl: "https://github.com/seuuser/task-api",
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full bg-gradient-to-b from-[#0b1120] to-[#0f172a] py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#ccff00] mb-12"
        >
          Meus Projetos
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/10 text-sm text-gray-100 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#ccff00] hover:underline"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-200 hover:underline"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Repo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
