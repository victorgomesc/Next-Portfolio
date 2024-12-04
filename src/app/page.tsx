"use client"

import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InitialDisplay from "@/components/InitialDisplay";
import Knowledges from "@/components/Knowledges";
import NavbarLinks from "@/components/NavbarLinks";
import { ThemeProvider } from "@/context/ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Home() {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <InitialDisplay />
        <NavbarLinks />
        <About />
        <Knowledges />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
