import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react'

const Experiences = () => {
const { theme } = useContext(ThemeContext);
  return (
    <div>
    <section id="about" className="dark:text-white md:pt-10 py-8 text-center 
    bg-zinc-100 dark:bg-zinc-900 relative">
        <section
        className="flex flex-col items-center justify-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <section className="relative text-center">
          <h2 className="md:text-5xl text-4xl uppercase font-semibold py-4 relative z-[2]">
            Experiences
          </h2>
          <h2
            className={` ${
              theme === "dark"
                ? "text-black border-text-light"
                : "text-white border-text-dark"
            } md:text-6xl text-5xl uppercase font-semibold py-4 absolute -top-6 md:-left-[11%] -left-[12%] z-[0] opacity-60  whitespace-nowrap`}
          >
            Experiences
          </h2>
        </section>
      </section>
    </section>
      
    </div>
  )
}

export default Experiences
