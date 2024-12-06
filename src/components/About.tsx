"use client"

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
    <section id="about" className="dark:text-white md:pt-10 py-8 text-center 
    bg-zinc-100 dark:bg-zinc-900 relative">
      <section
        className="flex flex-col items-center justify-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
      <section className="relative text-center">
          <h2 className="md:text-5xl text-4xl uppercase font-semibold py-4 relative z-[2]">
            About me
          </h2>
          <h2
            className={` ${
              theme === "dark"
                ? "text-black border-text-light"
                : "text-white border-text-dark"
            } md:text-6xl text-5xl uppercase font-semibold py-4 absolute -top-6 md:-left-[11%] -left-[12%] z-[0] opacity-60  whitespace-nowrap`}
          >
            About me
          </h2>
        </section>
        <Image
          className="absolute top-0 right-0 md:w-[250px] md:h-[250px] w-[110px] h-[110px] text-center z-[-1] blur-3xl opacity-50 rounded-full"
          src="/assets/bg-gradient.webp"
          alt="bg-gradient"
          width={250}
          height={250}
        />
        <Image
          className="absolute bottom-0 left-0 md:w-[250px] md:h-[250px] w-[110px] h-[110px] text-center z-[-1] blur-3xl opacity-50 rounded-full"
          src="/assets/bg-gradient.webp"
          alt="bg-gradient"
          width={250}
          height={250}
        />

        <section className="flex md:flex-row flex-col items-center">
          <div className="md:w-3/1 w-8/12 flex items-center justify-center">
            <Image
              className="text-center z-10 rounded-xl w-auto h-full"
              src="/assets/eu1.jpeg"
              alt="about-me"
              width={300}
              height={200}
            />
          </div>
          <div className="md:w-9/12 md:pt-0 pt-4 flex flex-col items-start justify-center">
            <p className="text-justify px-8 py-4">
            Hello, my name is Victor, I am a committed student and passionate about the area of ​​Technology,
            I am currently enrolled in the Computer Engineering course at the Federal University of Ceará UFC.
            My goal is to acquire vast knowledge in my area of ​​expertise and, mainly, to master various technical
            and social skills, in addition to advancing my professional career.{" "}
            </p>
            <p className="text-justify px-8 py-4">
            I am currently dedicating my efforts to improving my skills in Typescript, Nodejs and React and Next.js, Dotnet 
            and Net core. My goal is to become a FullStack Developer.
            </p>
            <p className="text-justify px-8 py-4">
            I am a person committed to my area of ​​knowledge and work,
            always looking to collaborate and contribute with my experience and skills.
            My biggest interest is to continue developing innovative projects that positively impact people&apos;s lives.
            </p>
            <p className="text-justify px-8 py-4">
            I am looking for opportunities to grow professionally and apply my knowledge in challenging projects,
            as I believe this will allow me to further expand my vision and skills.
            I believe that my motivation and determination are fundamental to achieving my goals and, above all,
            to contributing to projects that have a great impact on society.
            </p>
          </div>
        </section>
      </section>
      </section>
    </>
    
  );
};

export default About;