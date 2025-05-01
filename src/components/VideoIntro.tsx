"use client"

import React from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import Image from "next/image";

const VideoIntro = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <section
      id="video"
      className="dark:text-white md:pt-10 py-8 text-center 
      bg-zinc-100 dark:bg-zinc-900 relative"
    >
        <section
        className="flex flex-col items-center justify-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <section className="relative text-center">
          <h2 className="md:text-5xl text-4xl uppercase font-semibold py-4 relative z-[2]">
          Watch My Intro
          </h2>
          <h2
            className={` ${
              theme === "dark"
                ? "text-black border-text-light"
                : "text-white border-text-dark"
            } md:text-6xl text-5xl uppercase font-semibold py-4 absolute -top-6 md:-left-[11%] -left-[12%] z-[0] opacity-60  whitespace-nowrap`}
          >
            Watch My Intro
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
      <div className="relative w-[600px] h-[300px] mt-16 bg-black rounded-[2.5rem] border-8 border-gray-950 shadow-xl overflow-hidden">
        {/* Lateral "notch" (como se fosse o botão lateral do iPhone) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-6 h-24 bg-black rounded-r-2xl z-10" />

        {/* Vídeo horizontal vindo de link direto */}
        <iframe
        className="w-full h-full rounded-[2rem]"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Seu link
        title="Intro Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        />

      </div>
      </section>
    </section>
  );
};

export default VideoIntro;