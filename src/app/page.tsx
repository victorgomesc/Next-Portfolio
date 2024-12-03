import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NavbarLinks from "@/components/NavbarLinks";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <NavbarLinks />
      <About />
    </div>
  );
}
