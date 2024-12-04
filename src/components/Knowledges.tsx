import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker, FaGitAlt, FaGithub, FaReact } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";


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
          Conhecimentos
        </h2>
        <h2
          className={` ${
            theme === "dark"
              ? "text-black border-text-light"
              : "text-white border-text-dark"
          } md:text-6xl text-4xl uppercase font-semibold py-4 absolute md:-top-6 -top-4 md:-left-[11%] -left-[10%] z-[0] opacity-60  whitespace-nowrap mb-6`}
        >
          Conhecimentos
        </h2>

        <section
        style={{ perspective: 2000 }}
        className="grid-cols-auto-fit-100 pt-12 gap-y-4 flex md:gap-6 w-11/12  md:px-4"
        data-aos="fade-right"
        data-aos-duration="1300"
        >
        <article className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-28 w-28 h-28 p:14 md:h-36 overflow-hidden">
            <BiLogoPostgresql size={80} className="group-hover:translate-y-[-10%] text-green300 group-hover:scale-110 duration-500 text-4xl md:text-6xl flex items-center justify-center" />
            <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 text-green300 font-semibold text-sm">
                PostgreSql
            </p>
        </article>

        <article className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-28 w-28 h-28 p:14 md:h-36 overflow-hidden">
            <FaReact size={80} className="group-hover:translate-y-[-10%] text-green300 group-hover:scale-110 duration-500 text-4xl md:text-6xl flex items-center justify-center" />
            <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 text-green300 font-semibold text-sm">
                React
            </p>
        </article>

        <article className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-28 w-28 h-28 p:14 md:h-36 overflow-hidden">
            <SiNextdotjs size={80} className="group-hover:translate-y-[-10%] text-green300 group-hover:scale-110 duration-500 text-4xl md:text-6xl flex items-center justify-center" />
            <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 text-green300 font-semibold text-sm">
                Next
            </p>
        </article>

        <article className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-28 w-28 h-28 p:14 md:h-36 overflow-hidden">
            <IoLogoJavascript  size={80} className="group-hover:translate-y-[-10%] text-green300 group-hover:scale-110 duration-500 text-4xl md:text-6xl flex items-center justify-center" />
            <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 text-green300 font-semibold text-sm">
                Java script
            </p>
        </article>

        <article className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-28 w-28 h-28 p:14 md:h-36 overflow-hidden">
            <SiTypescript  size={80} className="group-hover:translate-y-[-10%] text-green300 group-hover:scale-110 duration-500 text-4xl md:text-6xl flex items-center justify-center" />
            <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 text-green300 font-semibold text-sm">
                Type script
            </p>
        </article>

        <article className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-28 w-28 h-28 p:14 md:h-36 overflow-hidden">
            <FaDocker  size={80} className="group-hover:translate-y-[-10%] text-green300 group-hover:scale-110 duration-500 text-4xl md:text-6xl flex items-center justify-center" />
            <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 text-green300 font-semibold text-sm">
                Docker
            </p>
        </article>

        <article className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-28 w-28 h-28 p:14 md:h-36 overflow-hidden">
            <FaGitAlt  size={80} className="group-hover:translate-y-[-10%] text-green300 group-hover:scale-110 duration-500 text-4xl md:text-6xl flex items-center justify-center" />
            <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 text-green300 font-semibold text-sm">
                Git
            </p>
        </article>

        <article className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-28 w-28 h-28 p:14 md:h-36 overflow-hidden">
            <FaGithub  size={80} className="group-hover:translate-y-[-10%] text-green300 group-hover:scale-110 duration-500 text-4xl md:text-6xl flex items-center justify-center" />
            <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 text-green300 font-semibold text-sm">
                Github
            </p>
        </article>

        <article className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-28 w-28 h-28 p:14 md:h-36 overflow-hidden">
            <SiMongodb  size={80} className="group-hover:translate-y-[-10%] text-green300 group-hover:scale-110 duration-500 text-4xl md:text-6xl flex items-center justify-center" />
            <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 text-green300 font-semibold text-sm">
                MongoDB
            </p>
        </article>

      </section>
      </section>
    </section>
  );
};

export default Knowledges;