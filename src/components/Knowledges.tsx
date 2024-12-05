import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { techs } from "../projects/techs";
import Tilt from "react-parallax-tilt";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiNestjs, SiTypescript } from "react-icons/si";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { TbBrandCSharp } from "react-icons/tb";

const Knowledges = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="knowledges"
      className="py-20 min-h-[80vh] pb-20 dark:bg-neutral-900 overflow-hidden relative flex flex-col items-center justify-center mx-auto"
    >
      <section
        className="md:absolute text-center md:top-20"
        data-aos="fade-down"
        data-aos-duration="1300"
      >
        <h2 className="md:text-5xl text-3xl uppercase font-semibold py-4 dark:text-white relative z-[2]">
        Knowledges
        </h2>
        <h2
          className={` ${
            theme === "dark"
              ? "text-black border-text-light"
              : "text-white border-text-dark"
          } md:text-6xl text-4xl uppercase font-semibold py-4 absolute md:-top-6 -top-4 md:-left-[11%] -left-[10%] z-[0] opacity-60  whitespace-nowrap`}
        >
          Knowledges
        </h2>
      </section>
      <section
        style={{ perspective: 2000 }}
        className="grid grid-cols-8 grid-rows-2 pt-10 gap-y-4 md:gap-4 w-11/12  md:px-4"
        data-aos="fade-right"
        data-aos-duration="1300"
      >
      
          <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article
              className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-24 w-24 h-24 p:14 md:h-28 overflow-hidden"
            >
              <IoLogoJavascript className="group-hover:translate-y-[-10%] group-hover:scale-110 dark:text-purple-700 duration-500 gradientText text-4xl md:text-6xl" />

              <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 dark:text-purple-700 font-semibold text-sm">
                Java script
              </p>
            </article>
          </Tilt>

          <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article
              className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-24 w-24 h-24 p:14 md:h-28 overflow-hidden"
            >
              <SiTypescript  className="group-hover:translate-y-[-10%] dark:text-purple-700 group-hover:scale-110 duration-500 gradientText text-4xl md:text-6xl" />

              <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 dark:text-purple-700 font-semibold text-sm">
                Type script
              </p>
            </article>
          </Tilt>

          <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article
              className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-24 w-24 h-24 p:14 md:h-28 overflow-hidden"
            >
              <FaReact  className="group-hover:translate-y-[-10%] dark:text-purple-700 group-hover:scale-110 duration-500 gradientText text-4xl md:text-6xl" />

              <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 dark:text-purple-700 font-semibold text-sm">
                React
              </p>
            </article>
          </Tilt>

          <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article
              className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-24 w-24 h-24 p:14 md:h-28 overflow-hidden"
            >
              <RiNextjsFill  className="group-hover:translate-y-[-10%] dark:text-purple-700 group-hover:scale-110 duration-500 gradientText text-4xl md:text-6xl" />

              <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 dark:text-purple-700 font-semibold text-sm">
                Next
              </p>
            </article>
          </Tilt>

          <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article
              className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-24 w-24 h-24 p:14 md:h-28 overflow-hidden"
            >
              <FaNodeJs  className="group-hover:translate-y-[-10%] dark:text-purple-700 group-hover:scale-110 duration-500 gradientText text-4xl md:text-6xl" />

              <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 dark:text-purple-700 font-semibold text-sm">
                NodeJS
              </p>
            </article>
          </Tilt>

          <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article
              className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-24 w-24 h-24 p:14 md:h-28 overflow-hidden"
            >
              <RiTailwindCssFill  className="group-hover:translate-y-[-10%] dark:text-purple-700 group-hover:scale-110 duration-500 gradientText text-4xl md:text-6xl" />

              <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 dark:text-purple-700 font-semibold text-sm">
                Tailwind
              </p>
            </article>
          </Tilt>

          <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article
              className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-24 w-24 h-24 p:14 md:h-28 overflow-hidden"
            >
              <FaHtml5  className="group-hover:translate-y-[-10%] dark:text-purple-700 group-hover:scale-110 duration-500 gradientText text-4xl md:text-6xl" />

              <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 dark:text-purple-700 font-semibold text-sm">
                HTML
              </p>
            </article>
          </Tilt>

          <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article
              className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-24 w-24 h-24 p:14 md:h-28 overflow-hidden"
            >
              <FaCss3Alt  className="group-hover:translate-y-[-10%] dark:text-purple-700 group-hover:scale-110 duration-500 gradientText text-4xl md:text-6xl" />

              <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 dark:text-purple-700 font-semibold text-sm">
                CSS
              </p>
            </article>
          </Tilt>

          <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article
              className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-24 w-24 h-24 p:14 md:h-28 overflow-hidden"
            >
              <FaGitAlt  className="group-hover:translate-y-[-10%] dark:text-purple-700 group-hover:scale-110 duration-500 gradientText text-4xl md:text-6xl" />

              <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 dark:text-purple-700 font-semibold text-sm">
                Git
              </p>
            </article>
          </Tilt>

          <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article
              className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-24 w-24 h-24 p:14 md:h-28 overflow-hidden"
            >
              <FaGithub  className="group-hover:translate-y-[-10%] dark:text-purple-700 group-hover:scale-110 duration-500 gradientText text-4xl md:text-6xl" />

              <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 dark:text-purple-700 font-semibold text-sm">
                Github
              </p>
            </article>
          </Tilt>

          <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article
              className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-24 w-24 h-24 p:14 md:h-28 overflow-hidden"
            >
              <SiMongodb  className="group-hover:translate-y-[-10%] dark:text-purple-700 group-hover:scale-110 duration-500 gradientText text-4xl md:text-6xl" />

              <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 dark:text-purple-700 font-semibold text-sm">
                MongoDB
              </p>
            </article>
          </Tilt>

          <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article
              className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-24 w-24 h-24 p:14 md:h-28 overflow-hidden"
            >
              <BiLogoPostgresql  className="group-hover:translate-y-[-10%] dark:text-purple-700 group-hover:scale-110 duration-500 gradientText text-4xl md:text-6xl" />

              <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 dark:text-purple-700 font-semibold text-sm">
                PostgreSQL
              </p>
            </article>
          </Tilt>

          <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article
              className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-24 w-24 h-24 p:14 md:h-28 overflow-hidden"
            >
              <GrMysql  className="group-hover:translate-y-[-10%] dark:text-purple-700 group-hover:scale-110 duration-500 gradientText text-4xl md:text-6xl" />

              <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 dark:text-purple-700 font-semibold text-sm">
                MySQL
              </p>
            </article>
          </Tilt>

          <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article
              className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-24 w-24 h-24 p:14 md:h-28 overflow-hidden"
            >
              <FaPython  className="group-hover:translate-y-[-10%] dark:text-purple-700 group-hover:scale-110 duration-500 gradientText text-4xl md:text-6xl" />

              <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 dark:text-purple-700 font-semibold text-sm">
                Python
              </p>
            </article>
          </Tilt>

          <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article
              className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-24 w-24 h-24 p:14 md:h-28 overflow-hidden"
            >
              <TbBrandCSharp  className="group-hover:translate-y-[-10%] dark:text-purple-700 group-hover:scale-110 duration-500 gradientText text-4xl md:text-6xl" />

              <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 dark:text-purple-700 font-semibold text-sm">
                CSharp
              </p>
            </article>
          </Tilt>

          <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg 
              hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 
              justify-center text-center items-center md:w-24 w-24 h-24 p:14 md:h-28 overflow-hidden">

              <SiNestjs  className="group-hover:translate-y-[-10%] dark:text-purple-700 group-hover:scale-110 
                duration-500 gradientText text-4xl md:text-6xl" />
                <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 dark:text-purple-700 font-semibold text-sm">
                  NestJS
                </p>
            </article>
          </Tilt>
      </section>
    </section>
  );
};

export default Knowledges;