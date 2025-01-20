import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
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

  const skills = [
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <RiNextjsFill /> },
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "Tailwind", icon: <RiTailwindCssFill /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
    { name: "MySQL", icon: <GrMysql /> },
    { name: "Python", icon: <FaPython /> },
    { name: "CSharp", icon: <TbBrandCSharp /> },
    { name: "NestJS", icon: <SiNestjs /> },
  ];

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
          className={`${
            theme === "dark"
              ? "text-black border-text-light"
              : "text-white border-text-dark"
          } md:text-6xl text-4xl uppercase font-semibold py-4 absolute md:-top-6 -top-4 md:-left-[11%] -left-[10%] z-[0] opacity-60 whitespace-nowrap`}
        >
          Knowledges
        </h2>
      </section>

      <section
        style={{ perspective: 2000 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 mt-16 pt-10 w-11/12"
        data-aos="fade-right"
        data-aos-duration="1300"
      >
        {skills.map(({ name, icon }, index) => (
          <Tilt key={index} tiltReverse={true} scale={1.05}>
            <article
              className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 p-4 overflow-hidden"
            >
              <div className="group-hover:translate-y-[-10%] group-hover:scale-110 text-purple-700 duration-500 gradientText text-3xl sm:text-4xl md:text-5xl">
                {icon}
              </div>
              <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 text-purple-700 font-semibold text-xs sm:text-sm md:text-base">
                {name}
              </p>
            </article>
          </Tilt>
        ))}
      </section>
    </section>
  );
};

export default Knowledges;
