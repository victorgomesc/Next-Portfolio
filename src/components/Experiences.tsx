import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';
import React, { useContext } from 'react'

const Experiences = () => {
const { theme } = useContext(ThemeContext);
  return (
    <div>
    <section id="about" className="dark:text-white md:pt-10 py-8 text-center 
    bg-zinc-100 dark:bg-zinc-900 relative">
        <section
        className="flex flex-col items-center justify-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <section className="relative text-center">
          <h2 className="md:text-5xl text-4xl uppercase font-semibold py-4 relative z-[2]">
            Experiences
          </h2>
          <h2
            className={` ${
              theme === "dark"
                ? "text-black border-text-light"
                : "text-white border-text-dark"
            } md:text-6xl text-5xl uppercase font-semibold py-4 absolute -top-6 md:-left-[11%] -left-[12%] z-[0] opacity-60  whitespace-nowrap`}
          >
            Experiences
          </h2>
        </section>

        <img
          className="absolute top-0 right-0 md:w-[250px] md:h-[250px] w-[110px] h-[110px] text-center z-[-1] blur-3xl opacity-50 rounded-full"
          src="/assets/bg-gradient.webp"
          alt="bg-gradient"
        />
        <img
          className="absolute bottom-0 left-0 md:w-[250px] md:h-[250px] w-[110px] h-[110px] text-center z-[-1] blur-3xl opacity-50 rounded-full"
          src="/assets/bg-gradient.webp"
          alt="bg-gradient"
        />

        <section className="flex md:flex-row flex-col items-center h-full">
          <div className="md:w-4/1 w-6/12 flex items-center justify-center">
            <Image
              className="text-center z-10 rounded-xl"
              src="/assets/experiences/incurso.png"
              quality={100}
              alt="about-me"
              width={300}
              height={300}
            />
          </div>
          <div className="md:w-8/12 md:pt-0 pt-4 flex flex-col items-start justify-center">
            <p className="text-justify px-8 py-4">
            <strong className="text-2xl">Desenvolvedor Full Stack - Estágio</strong><br />
            <span className="text-xl font-semibold">IncursoNet - Jucás, CE (Ago/2019 – Dez/2019)</span><br />
              <li>
                Desenvolvi sistemas web que atendian as nessecidades dos clientes utilizando as seguintes tecnologias: 
                Type Script, React, Next.js, Node.js, SQL, MySQL.
              </li>
              <li>
                Implementei metodologias ágeis de desenvolvimento com Scrum e Kanbam.
              </li>
              <li>
              Desenvolvi e aprimorei minhas habilidades (Hard Skills, Soft Skills) na pratica com ajuda de colegas de 
              trabalho mais experientes.
              </li>
            </p>
          </div>
        </section>

        <section className="flex md:flex-row flex-col mt-12 items-center h-full">
          <div className="md:w-4/1 w-6/12 flex items-center justify-center">
            <Image
              className="text-center z-10 rounded-xl"
              src="/assets/experiences/ufc.png"
              quality={100}
              alt="about-me"
              width={300}
              height={300}
            />
          </div>
          <div className="md:w-8/12 md:pt-0 pt-4 flex flex-col items-start justify-center">
            <p className="text-justify px-8 py-4">
            <strong className="text-2xl">Desenvolvedor Full Stack - Bolsista</strong><br />
            <span className="text-xl font-semibold">Universidade Federal do Ceara - Quixadá, CE (Jan/2023 - Jan/2024)</span><br />
              <li>
              Colaborei com o professor e Doutor da Universidade Federal do Ceara, João Ferreira de Lavor na construção 
              de um sistema web chamado Prontuario Eletrônico para os postos de saúde da cidade de orós no ceara.
              </li>
              <li>
              Utilizei todos meus conhecimentos  nas tecnologias Type script, React, Next.js, Node.js, Tailwind CSS, 
              Nest.js, SQL, MongoDB, Git, Github.
              </li>
              <li>
              Implementei também a cultura de testes unitários utilizando o Jest e Testing-library.
              </li>
              <li>
              Implementei conceitos de arquitetura e engenharia de software para garantir um fluxo mais fluido de 
              desenvolvimento e uma fácil manutenção, assim como boas praticas de programação.
              </li>
            </p>
          </div>
        </section>

        <section className="flex md:flex-row flex-col mt-12 items-center h-full">
          <div className="md:w-4/1 w-6/12 flex items-center justify-center">
            <Image
              className="text-center z-10 rounded-xl"
              src="/assets/experiences/logo.webp"
              quality={100}
              alt="about-me"
              width={300}
              height={300}
            />
          </div>
          <div className="md:w-8/12 md:pt-0 pt-4 flex flex-col items-start justify-center">
            <p className="text-justify px-8 py-4">
            <strong className="text-2xl">Desenvolvedor Full Stack - Junior</strong><br />
            <span className="text-xl font-semibold">Agro Coop Solutions - Quixadá, CE (Mar/2023 - Hoje)</span><br />
              <li>
              Montei minha própria Startup em parceria com com a Universidade Federal do ceará e colegas da 
              universidade para solucionar um problema vigente na nossa sociedade que se tratava da falta de sistemas 
              de controle de atividades das cooperativas locais.
              </li>

              <li>
              Criei com a colaboração de colegas e da própria universidade uma plataforma de gerenciamento de 
              cooperativas.
              </li>

              <li>
              Utilizei as seguintes tecnologias: Type Script, React, Next.js, Tailwind CSS, Dotnet e Net core, 
              PostgreSQL, Prisma, SQL, Jest e Testing-library.
              </li>

              <li>
              Implementei conceitos de arquitetura e engenharia de software para garantir um fluxo mais fluido de 
              desenvolvimento e uma fácil manutenção, assim como boas praticas de programação.
              </li>
            </p>
          </div>
        </section>

      </section>
    </section>
      
    </div>
  )
}

export default Experiences
