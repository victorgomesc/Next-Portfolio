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
            My name is Victor Gomes da Costa, and I&apos;m a Software Engineer with over 4 years of experience building scalable, 
            high-performance full-stack applications using modern technologies such as React, Next.js, Node.js, C#, and .NET. 
            I have strong expertise in designing and implementing RESTful APIs, writing automated tests with Jest and Cypress, 
            and deploying applications in cloud-native environments.
            </p>
            <p className="text-justify px-8 py-4">
            Throughout my career, I&apos;ve worked in agile, cross-functional, and international teams, contributing to projects in 
            both startups and large enterprises. I consistently focus on clean architecture, code quality, and delivering impactful 
            solutions that meet real business needs.
            </p>
            <p className="text-justify px-8 py-4">
            I&apos;m currently pursuing a Bachelor&apos;s degree in Computer Engineering at UFC (Federal University of Ceará). I&apos;m actively seeking 
            international opportunities where I can apply my technical and collaborative skills, contribute to innovative teams, and continue 
            growing as a professional by solving meaningful challenges with modern, efficient solutions.
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