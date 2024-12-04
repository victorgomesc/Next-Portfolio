import { ProjectType } from "../types/ProjectType";

export const projects: ProjectType[] = [
  {
    name: "Fullstack CRUD",
    techs: ["devicon-react-original", "devicon-express-original", "devicon-typescript-original", "devicon-sass-original", "devicon-mongodb-plain"],
    images: [
      "/utils/img/projects/fs1.png",
      "/utils/img/projects/fs2.png",
      "/utils/img/projects/fs3.png",
    ],
    repo: "https://github.com/YuriLRodrigues/First-Fullstack-Project",
    deploy: "https://first-fs-project-with-hookform-zod.vercel.app/"
  },
  {
    name: "Apple Ecommerce",
    techs: ["devicon-nextjs-original", "devicon-typescript-original", "devicon-tailwindcss-plain"],
    images: [
      "/utils/img/projects/ecommercenext1.png",
      "/utils/img/projects/ecommercenext2.png",
      "/utils/img/projects/ecommercenext3.png",
      "/utils/img/projects/ecommercenext4.png",
    ],
    repo: "https://github.com/YuriLRodrigues/next-auth",
    deploy: "https://ecommerce-next-swart-eta.vercel.app/cart"
  },
  {
    name: "PokeReact",
    techs: ["devicon-react-original", "devicon-sass-original"],
    images: [
      "/utils/img/projects/poke1.png",
      "/utils/img/projects/poke2.png",
      "/utils/img/projects/poke3.png",
    ],
    repo: "https://github.com/YuriLRodrigues/Pokedex-Api-React",
    deploy: "https://pokedex-api-react-six.vercel.app/"
  },
  {
    name: "Ecommerce ML",
    techs: ["devicon-react-original", "devicon-sass-original"],
    images: [
      "/utils/img/projects/ecommerce1.png",
      "/utils/img/projects/ecommerce2.png",
      "/utils/img/projects/ecommerce3.png",
    ],
    repo: "https://github.com/YuriLRodrigues/Pokedex-Api-React",
    deploy: "https://mercado-livre-react.vercel.app/"
  }
];
