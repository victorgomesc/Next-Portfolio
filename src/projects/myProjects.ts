import { FaReact } from "react-icons/fa";
import { ProjectType } from "../types/ProjectType";

export const projects: ProjectType[] = [
  {
    name: "Fullstack CRUD",
    techs: ["devicon-react-original", "devicon-express-original", "devicon-typescript-original", "devicon-sass-original", "devicon-mongodb-plain"],
    images: [
      "/assets/projects/fs1.png",
      "/assets/projects/fs2.png",
      "/assets/projects/fs3.png",
    ],
    repo: "https://github.com/YuriLRodrigues/First-Fullstack-Project",
    deploy: "https://first-fs-project-with-hookform-zod.vercel.app/"
  },
  {
    name: "Apple Ecommerce",
    techs: ["devicon-nextjs-original", "devicon-typescript-original", "devicon-tailwindcss-plain"],
    images: [
      "/assets/projects/ecommerce1.png",
      "/assets/projects/ecommerce2.png",
      "/assets/projects/ecommerce3.png",
    ],
    repo: "https://github.com/YuriLRodrigues/next-auth",
    deploy: "https://ecommerce-next-swart-eta.vercel.app/cart"
  },
  {
    name: "PokeReact",
    techs: ["devicon-react-original", "devicon-sass-original"],
    images: [
      "/assets/projects/poke1.png",
      "/assets/projects/poke2.png",
      "/assets/projects/poke3.png",
    ],
    repo: "https://github.com/YuriLRodrigues/Pokedex-Api-React",
    deploy: "https://pokedex-api-react-six.vercel.app/"
  },
  {
    name: "Ecommerce ML",
    techs: ["devicon-react-original", "devicon-sass-original"],
    images: [
      "/assets/projects/portfolio1.png",
      "/assets/projects/portfolio2.png",
      "/assets/projects/portfolio3.png.png",
    ],
    repo: "https://github.com/YuriLRodrigues/Pokedex-Api-React",
    deploy: "https://mercado-livre-react.vercel.app/"
  }
];
