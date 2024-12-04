// import { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { ProjectInfo } from "../types/ProjectType";
import { register } from "swiper/element";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ViewAndRepo from "./ViewAndRepo";
import Tilt from "react-parallax-tilt";
import { FaReact } from "react-icons/fa";
register();

const ProjectCard = ({ project }: ProjectInfo) => {
  return (
    <Tilt tiltReverse={true} tiltMaxAngleX={10} tiltMaxAngleY={10}>
      <article
        className="w-full cursor-grab rounded-xl mt-10 relative dark:bg-zinc-800 bg-zinc-200 p-2"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="w-full group overflow-hidden rounded-xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              enabled: true,
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect="fade"
            className="relative overflow-hidden"
          >
            <div className="dark:bg-black bg-white opacity-60 absolute top-0 group-hover:-translate-y-[200%] rounded-t-xl hover:rounded-t-xl duration-700 w-full h-[50%] z-[1] ">
              <h2 className="text-center pt-28 group-hover:-translate-y-[200%] duration-700 dark:text-white text-black text-xl translate-x-[0%] font-bold">
                {project.name}
              </h2>
            </div>
            <div className="text-center flex gap-6 items-center justify-center dark:bg-black bg-white opacity-60 absolute z-[1] bottom-0 group-hover:translate-y-[200%] rounded-b-xl duration-700 w-full h-[50%]">
              {project.techs.map((tech, index) => {
                return (
                  <i
                    key={index}
                    className={`${tech} relative z-[1] dark:text-white text-black text-3xl`}
                  ></i>
                );
              })}
            </div>
            {project.images.map((projectImages: string, index) => (
              <SwiperSlide key={index}>
                <img
                  className="duration-700 blur-sm group-hover:blur-0 w-full h-[300px] object-cover object-center aspect-4/3"
                  src={projectImages}
                  alt={project.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Tilt>
          <ViewAndRepo repo={project.repo} deploy={project.deploy} />
        </Tilt>
      </article>
    </Tilt>
  );
};

export default ProjectCard;