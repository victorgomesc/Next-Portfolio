import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { projects } from "../projects/myProjects";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section id="portfolio" className="py-10 relative overflow-hidden min-h-screen dark:bg-neutral-900">
      <section
        className="flex flex-col items-center justify-center pt-10"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <section className="relative text-center">
          <h2 className="md:text-5xl text-4xl uppercase font-semibold py-4 relative z-[2] dark:text-white">
            Portfolio
          </h2>
          <h2
            className={` ${
              theme === "dark"
                ? "text-black border-text-light"
                : "text-white border-text-dark"
            } md:text-6xl text-5xl uppercase font-semibold py-4 absolute -top-6 md:-left-[11%] -left-[12%] z-[0] opacity-60  whitespace-nowrap`}
          >
            Portfolio
          </h2>
        </section>
      </section>
      <section className="grid w-11/12 grid-cols-auto-fit-300 gap-8 mx-auto relative z-[2] pt-10" >
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </section>
      <Image
        className="absolute top-0 right-0 md:w-[250px] md:h-[250px] w-[110px] h-[110px] z-[1] blur-3xl opacity-50 rounded-full"
        src="/assets/bg-gradient.webp"
        alt="bg-gradient"
        width={250}
        height={250}
      />
      <Image
        className="absolute left-0 top-0 md:w-[250px] md:h-[250px] w-[110px] h-[110px] z-[1] blur-3xl opacity-50 rounded-full"
        src="/assets/bg-gradient.webp"
        alt="bg-gradient"
        width={250}
        height={250}
      />
      <Image
        className="absolute md:-bottom-32 bottom-0 left-[40%] md:w-[250px] md:h-[250px] w-[80px] h-[80px] z-[1] blur-3xl opacity-30 rounded-full"
        src="/assets/bg-gradient.webp"
        alt="bg-gradient"
        width={250}
        height={250}
      />
    </section>
  );
};

export default Contact;