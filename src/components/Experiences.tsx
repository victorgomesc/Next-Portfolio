import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';
import React, { useContext } from 'react'

const Experiences = () => {
const { theme } = useContext(ThemeContext);
  return (
    <div>
    <section id="experiences" className="dark:text-white md:pt-10 py-8 text-center 
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
          <div className="md:w-4/1 w-6/12 flex items-center justify-center ml-18">
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
            <strong className="text-2xl">Full Stack Developer - Internship</strong><br />
            <span className="text-xl font-semibold">IncursoNet - Jucás, CE (Ago/2019 – Dez/2019)</span><br />
              <li>
              I developed web systems that met customer needs using the following technologies: Type Script, React, 
              Next.js, Node.js, SQL, MySQL, Jira, Gitflow, apirest.
              </li>
              <li>
              Implemented agile development methodologies with Scrum and Kanbam.
              </li>
              <li>
              I developed and improved my skills (Hard Skills, Soft Skills) in practice with the help of colleagues from 
              more experienced work.
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
            <strong className="text-2xl">Full Stack Developer - Scholarship Holder</strong><br />
            <span className="text-xl font-semibold">Universidade Federal do Ceara - Quixadá, CE (Jan/2023 - Jan/2024)</span><br />
              <li>
              I collaborated with the professor and PhD from the Federal University of Ceara, João Ferreira de Lavor in the construction 
              of a web system called Electronic Record for health centers in the city of Orós in Ceara.
              </li>
              <li>
              I used all my knowledge in Type script, React, Next.js, Node.js, Tailwind CSS, 
              Nest.js, SQL, MongoDB, Git, Github.
              </li>
              <li>
              I also implemented the unit testing culture using Jest and Testing-library.
              </li>
              <li>
              Implemented architecture and software engineering concepts to ensure a more fluid flow of 
              development and easy maintenance, as well as good programming practices.
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
            <strong className="text-2xl">Full Stack Developer - Junior</strong><br />
            <span className="text-xl font-semibold">Agro Coop Solutions - Quixadá, CE (Mar/2023 - Hoje)</span><br />
              <li>
              I set up my own Startup in partnership with the Federal University of Ceará and colleagues from 
              university to solve a current problem in our society, which was the lack of systems 
              control of activities of local cooperatives.
              </li>

              <li>
              I created, with the collaboration of colleagues and the university itself, a management platform 
              cooperatives.
              </li>

              <li>
              I used the following technologies: Type Script, React, Next.js, Tailwind CSS, Dotnet and Net core, 
              PostgreSQL, Prisma, SQL, Jest and Testing-library.
              </li>

              <li>
              Implemented architecture and software engineering concepts to ensure a more fluid flow of 
              development and easy maintenance, as well as good programming practices.
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
