"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";

const MyEducation = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="education"
      className="dark:text-white md:pt-10 py-8 text-center bg-zinc-100 dark:bg-zinc-900 relative"
    >
      <section
        className="flex flex-col items-center justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <section className="relative text-center">
          <h2 className="md:text-5xl text-4xl uppercase font-semibold py-4 relative z-[2]">
            My Education
          </h2>
          <h2
            className={`${
              theme === "dark"
                ? "text-black border-text-light"
                : "text-white border-text-dark"
            } md:text-6xl text-5xl uppercase font-semibold py-4 absolute -top-6 md:-left-[11%] -left-[12%] z-[0] opacity-60 whitespace-nowrap`}
          >
            My Education
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

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 px-6 py-12 w-full max-w-6xl">
          {/* Card 1 */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden h-[400px] flex flex-col">
            <div className="relative h-1/2 w-full">
              <Image
                src="/assets/education/ufc.jpg"
                alt="UFC"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 h-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-2">Federal University of Ceará (UFC)</h3>
              <p className="text-sm text-justify">
                Enrolled in the Computer Engineering program. Focused on software development, AI, and embedded systems with hands-on academic and real-world projects.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden h-[400px] flex flex-col">
            <div className="relative h-1/2 w-full">
              <Image
                src="/assets/education/mit.jpg"
                alt="Full Cycle"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 h-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-2">Massachusetts Institute of Technology</h3>
              <p className="text-sm text-justify">
              International program focused on applying data science, AI, and digital transformation in business. Gained hands-on experience with predictive analytics, machine learning, and data-driven decision-making through high-impact projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MyEducation;
