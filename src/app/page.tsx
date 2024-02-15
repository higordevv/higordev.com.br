/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-string-refs */

export default function Home() {
  return (
    <main className="container max-w-xl mx-auto ">
      <header className="pt-16 pb-16 px-4 flex justify-between">
        <a href="/"><figure >
          <img src="/h.png" alt="h" className="w-6" /></figure></a>
        <nav className="flex gap-4">
          <a className="text-white text-base font-semibold opacity-50 cursor-default" href="/about" >Sobre</a>
          <a className="text-white text-base font-semibold" href="/#contact">Contato</a>
        </nav>
      </header>
      <main className="px-4">
        <section className="pb-16">
          <h1 className="font-semibold text-4xl mb-4 text-white">Olá, Eu sou Higor Santos. <br />
            <span className="text-white/60">Um programador FullStack do Ceará, Brasil.</span>
          </h1>
          <p className="text-white/70 text-lg text-wrap ">
            Estudo programação há 4 anos, com foco em Javascript/Typescript. Desenvolvo interfaces com React e Next, usando boas praticas de clean code e arquitetura limpa. Trabalho como freelancer fullstack em uma startup e contribuo voluntariamente no Aricode Lab. Busco crescer como programador fullstack.
          </p>
        </section>
        {/* Projetos */}
        <section className="pt-10 pb-16">
          <h2 className="font-semibold text-base mb-4 text-white/90">Projetos</h2>
          <div className="space-y-4">
            <span>🚧</span>

          </div>
        </section>

        <section className="py-8" id="contact">
          <h2 className="font-semibold text-base mb-4 text-white/90">Contato</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-content gap-4">
              <span className="text-white/50">Email</span>
              <a className="text-white/70" href="contato@higordev.com.br" target="_blank">
                contato@higordev.com.br
              </a>
            </div>
            <div className="grid grid-cols-content gap-4">
              <span className="text-white/50">Twitter</span>
              <a className="text-white/70" href="https://twitter.com/higorkkkkkj" target="_blank">
                @higorkkkkkj
              </a>
            </div>
            <div className="grid grid-cols-content gap-4">
              <span className="text-white/50">GitHub</span>
              <a className="text-white/70" href="https://github.com/higordevv" target="_blank">
                git/higordevv
              </a>
            </div>
            <div className="grid grid-cols-content gap-4">
              <span className="text-white/50">LinkedIn</span>
              <a className="text-white/70" href="https://www.linkedin.com/in/pedro-higor/" target="_blank">
                in/pedro-higor
              </a>
            </div>
          </div>
        </section>u
      </main>
    </main>
  );
}
