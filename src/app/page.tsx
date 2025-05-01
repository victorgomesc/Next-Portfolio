"use client"

import dynamic from "next/dynamic";

// Carrega o ThemeProvider apenas no cliente
const ThemeProvider = dynamic(() => import("@/context/ThemeContext").then((mod) => mod.ThemeProvider), { ssr: false });

import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InitialDisplay from "@/components/InitialDisplay";
import Knowledges from "@/components/Knowledges";
import NavbarLinks from "@/components/NavbarLinks";
import Portfolio from "@/components/Portfolio";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Contact from "@/components/Contact";
import MyEducation from "@/components/MyEducation";
import VideoIntro from "@/components/VideoIntro";


export default function Home() {

  useEffect(() => {
    AOS.init(); 
  }, []); 

  return (
      <ThemeProvider>
        <Header />
        <InitialDisplay />
        <NavbarLinks />
        <About />
        <MyEducation />
        <Experiences />
        <Knowledges />
        <Portfolio />
        <VideoIntro />
        <Contact />
        <Footer />
      </ThemeProvider>
  );
}
