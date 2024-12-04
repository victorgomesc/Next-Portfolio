"use client";

import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext, useEffect, useRef } from 'react'
import { Typewriter, Cursor } from 'react-simple-typewriter'

const InitialDisplay = () => {

  const { theme } = useContext(ThemeContext);
  const root = useRef<HTMLElement>(null);
  const bg = useRef<HTMLDivElement>(null);
  
  const handleBg = (e: MouseEvent) => {
    if (bg.current !== null){
      bg.current.style.left = `${e.clientX}px`
      bg.current.style.top = `${e.clientY}px`
    }
  }

  useEffect(() => {
    root.current?.addEventListener("mousemove", handleBg)
  }, [])

  return (
    <main className="overflow-x-hidden">
      <section
        className={` ${
          theme === "dark" ? "hexagon-img-dark" : "hexagon-img-light"
        } w-full overflow-hidden md:py-52 py-32 flex flex-col items-center justify-center z-[-1] h-screen dark:text-white text-center gap-3 duration-500`}
        ref={root}
      >
        <section data-aos="fade-down" data-aos-duration="1000">
          <h2 className="text-4xl font-semibold">Olá, eu sou</h2>
          <h1 className="font-semibold text-4xl">&lt; <Typewriter
            words={['Victor Gomes da Costa']}
            loop={3}
            cursor
            cursorStyle=''
            typeSpeed={62}
            deleteSpeed={30}
            delaySpeed={800}
          /> /&gt;</h1>
          <h2 className="font-semibold text-4xl">
            Desenvolvedor{" "}
            <span className="gradientText">
            <b>
            <Typewriter
            words={['Full Stack']}
            loop={3}
            typeSpeed={90}
            deleteSpeed={80}
            delaySpeed={1000}
            />
            </b>
            </span>
            <Cursor />
          </h2>
        </section>
        <div className="bg" ref={bg}></div>
      </section>
    </main>
  )
}

export default InitialDisplay
