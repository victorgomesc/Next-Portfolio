"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { FaLocationArrow, FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const Experiences = () => {
  const { theme } = useContext(ThemeContext);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const experiences = [
    {
      company: "IncursoNET",
      location: "Jucás, Ceará, Brazil",
      period: "August 2019 - January 2020",
      image: "/assets/experiences/incurso.png",
      linkCompany: "https://incursonet.com.br/index.php?tipo=artigo&id=15",
      role: "Software Engineer Trainee",
      description: [
        "I work on the development and maintenance of internal web platforms using C# and .NET Core, focusing on efficient and scalable solutions for the company's industrial processes.",
        "Applied object-oriented programming principles and implemented responsive interfaces with HTML, CSS, and JavaScript.",
        "Collaborated in an agile team environment to deliver new features and debug existing functionalities."
      ]
    },
    {
      company: "Federal University of Ceará",
      location: "Quixadá, Ceará, Brazil",
      period: "March 2021 - December 2022",
      image: "/assets/experiences/ufc.png",
      linkCompany: "https://www.quixada.ufc.br/",
      role: "Software Engineer Scholarship Holder",
      description: [
        "Worked on research and development projects focused on embedded systems and automation.",
        "Designed and implemented C-based software for microcontrollers, using interrupt routines and memory manipulation.",
        "Gained hands-on experience with hardware integration, circuit design, and Linux-based system programming."
      ]
    },
    {
      company: "Agro Coop Solutions",
      location: "Quixadá, Ceará, Brazil",
      period: "January 2023 - January 2024",
      image: "/assets/experiences/logo.webp",
      linkCompany: "https://inove.quixada.ufc.br/",
      role: "Entry-Level Software Engineer",
      description: [
        "Developed a full-stack web platform using Next.js, Tailwind CSS, and Node.js for cooperative agriculture management.",
        "Implemented RESTful APIs and authentication systems with JWT and MongoDB.",
        "Practiced agile methodologies and version control using Git and GitHub."
      ]
    },
    {
      company: "HeavyConnect",
      location: "San Francisco, California, USA",
      period: "January 2024 - Present",
      image: "/assets/experiences/heavyconnect.jpeg",
      linkCompany: "https://www.heavyconnect.com/",
      role: "Entry-Level Software Engineer",
      description: [
        "Participated in the development of mobile and web applications for agricultural compliance and logistics.",
        "Utilized React Native, TypeScript, and Firebase to enhance real-time data capture and synchronization.",
        "Focused on UI/UX improvements, scalability, and code maintainability within a CI/CD pipeline."
      ]
    },
    {
      company: "Aço Verde do Brasil",
      location: "São Luís, Maranhão, Brazil",
      period: "January 2024 - Present",
      image: "/assets/experiences/avb.jpeg",
      linkCompany: "https://avb.com.br/",
      role: "Mid-Level Software Engineer",
      description: [
        "Developing internal enterprise tools using C#, .NET, and SQL Server to optimize operational workflows.",
        "Refactoring legacy code and implementing unit tests using xUnit and Jest.",
        "Collaborating with cross-functional teams to integrate Kafka for real-time data processing and monitoring."
      ]
    }
  ]
  

  return (
    <section
      id="experiences"
      className="dark:text-white md:pt-10 py-8 text-center bg-zinc-100 dark:bg-zinc-900 relative"
    >
      <section className="flex flex-col items-center justify-center" data-aos="fade-down" data-aos-duration="1000">
        {/* Título */}
        <section className="relative text-center">
          <h2 className="md:text-5xl text-4xl uppercase font-semibold py-4 relative z-[2]">
            Experience
          </h2>
          <h2
            className={` ${
              theme === "dark"
                ? "text-black border-text-light"
                : "text-white border-text-dark"
            } md:text-6xl text-5xl uppercase font-semibold py-4 absolute -top-6 md:-left-[11%] -left-[12%] z-[0] opacity-60  whitespace-nowrap`}
          >
            Experience
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

        {/* Swiper com autoplay pausando no hover */}
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop={true}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          navigation
          pagination={{ clickable: true }}
          className="w-full md:w-4/5 mx-auto"
        >
          {experiences.map((exp, index) => (
            <SwiperSlide key={index}>
              <div className="group w-[300px] h-[420px] mx-auto perspective">
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    flippedIndex === index ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Frente */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 backface-hidden transition-all ${
                      flippedIndex === index ? "hidden" : "flex"
                    }`}
                  >
                    <Image
                      src={exp.image}
                      width={80}
                      height={80}
                      layout="intrinsic"
                      alt={exp.company}
                      className="rounded-full border border-gray-300 dark:border-gray-600"
                    />
                    <h3 className="text-xl font-semibold mt-3 dark:text-gray-100">{exp.company}</h3>
                    <span className="text-gray-600 flex items-center justify-center gap-1 dark:text-gray-400">
                      <FaLocationDot size={16} />
                      {exp.location}
                    </span>
                    <p className="text-gray-600 dark:text-gray-400">{exp.role}</p>
                    <p className="text-gray-500 text-sm">{exp.period}</p>

                    <Link href={exp.linkCompany} target="_blank">
                      <p className="mt-4 px-4 py-2 flex w-40 justify-center gap-1 items-center bg-blue-600 dark:bg-blue-500 text-white rounded-full transition-all hover:bg-blue-700">
                        Company <FaLocationArrow />
                      </p>
                    </Link>
                    <button
                      className="mt-4 px-4 py-2 bg-blue-600 w-40 dark:bg-blue-500 text-white rounded-full transition-all hover:bg-blue-700"
                      onClick={() => handleFlip(index)}
                    >
                      See Details
                    </button>
                  </div>

                  {/* Verso */}
                  <div
                    className={`absolute inset-0 flex flex-col items-start justify-start bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-2xl p-6 overflow-y-auto rotate-y-180 backface-hidden ${
                      flippedIndex === index ? "flex" : "hidden"
                    }`}
                  >
                    <ul className="text-sm text-gray-800 dark:text-white space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="mb-2">• {desc}</li>
                      ))}
                    </ul>
                    <button
                      className="mt-4 self-center text-blue-600 dark:text-blue-400 underline"
                      onClick={() => handleFlip(index)}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default Experiences;
