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

const experiences = [/* ... mesma lista ... */];

const Experiences = () => {
  const { theme } = useContext(ThemeContext);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const experiences = [
    {
      company: "Tech Solutions",
      location: "São Paulo, Brasil",
      period: "Jan 2022 - Atual",
      image: "/assets/experiences/incurso.png",
      linkCompany: "#",
      role: "Empresa de tecnologia focada em soluções de software para o setor financeiro.",
      description: [
         "Empresa de tecnologia focada em soluções de software",
      "Atuação com equipes ágeis e inovação financeira."
      ]
    },
    {
      company: "Green Energy",
      location: "Lisboa, Portugal",
      period: "Mar 2020 - Dez 2021",
      image: "/assets/experiences/ufc.png",
      linkCompany: "#",
      role: "Startup especializada em energias renováveis e sustentabilidade ambiental.",
      description: [
         "Empresa de tecnologia focada em soluções de software",
      "Atuação com equipes ágeis e inovação financeira."
      ]
    },
    {
      company: "EduNext",
      location: "Toronto, Canadá",
      period: "Ago 2018 - Fev 2020",
      image: "/assets/experiences/logo.webp",
      linkCompany: "#",
      role: "Plataforma educacional que oferece cursos online para estudantes de todo o mundo.",
      description: [
         "Empresa de tecnologia focada em soluções de software",
         "Atuação com equipes ágeis e inovação financeira."
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
        <section className="relative text-center mb-6">
          <h2 className="md:text-5xl text-4xl uppercase font-semibold py-4 relative z-[2]">Experiences</h2>
          <h2
            className={`absolute -top-6 md:-left-[11%] -left-[12%] z-[0] opacity-60 whitespace-nowrap md:text-6xl text-5xl uppercase font-semibold ${
              theme === "dark" ? "text-black" : "text-white"
            }`}
          >
            Experiences
          </h2>
        </section>

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
