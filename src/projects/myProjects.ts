import { ProjectType } from "../types/ProjectType";

/*
 <h1 align="left">Next Portfólio</h1>

###

<h3 align="left">The Next Portfolio project, is a web page with the purpose, of exposing my developed projects and as a way of putting my skills into practice, I hope you like it.</h3>

###

<h2 align="left">Hard Skills:</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height="40" alt="nextjs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" height="40" alt="eslint logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" alt="git logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" height="40" alt="dotnetcore logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="40" alt="postgresql logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" height="40" alt="threejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height="40" alt="redux logo"  />
</div>

###

<p align="left">Nesse projeto utilizei algumas das tecnologias que tenho mais dominio e vou esplicar por que utilizei cada uma,</p>

###

<div align="center">
  <img src="https://profile-counter.glitch.me/victorgomesc/count.svg?"  />
</div>

###
*/

export const projects: ProjectType[] = [
  {
    name: "Car Showcase",
    techs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", 
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    ],
    images: [
      "/assets/projects/carros1.png",
      "/assets/projects/carros2.png",
      "/assets/projects/carros3.png",
      "/assets/projects/carros4.png",
    ],
    repo: "https://github.com/victorgomesc/Cars_showcase",
    deploy: "https://cars-showcase-livid-omega.vercel.app/"
  },
  {
    name: "Wallet Digital",
    techs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    ],
    images: [
      "/assets/projects/banking.png",
      "/assets/projects/banking2.png",
      "/assets/projects/banking3.png",
    ],
    repo: "https://github.com/victorgomesc/Vg_banking",
    deploy: "https://banking-jet.vercel.app/sign-in"
  },
  {
    name: "Apple Website",
    techs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    ],
    images: [
      "/assets/projects/apple1.png",
      "/assets/projects/apple2.png",
      "/assets/projects/apple3.png",
      "/assets/projects/apple4.png",
      "/assets/projects/apple5.png",
    ],
    repo: "https://github.com/victorgomesc/apple_website",
    deploy: "https://iphone-doc.vercel.app/"
  },
  {
    name: "Colaborative Tasks",
    techs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    ],
    images: [
      "/assets/projects/tarefas1.png",
      "/assets/projects/tarefas2.png",
      "/assets/projects/tarefas3.png",
    ],
    repo: "https://github.com/victorgomesc/Collaborative-Task",
    deploy: "https://collaborative-tasks.vercel.app/"
  },
  {
    name: "Spotfy Clone",
    techs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "/assets/projects/tailwind-css-2.webp",
    ],
    images: [
      "/assets/projects/spotfy.png",
      "/assets/projects/spotfy2.png",
    ],
    repo: "https://github.com/victorgomesc/Clone-Spotify",
    deploy: "https://spotfy-clone-apc5waum5-victorgomescs-projects.vercel.app/"
  },
  {
    name: "DTmoney",
    techs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      "/assets/projects/tailwind-css-2.webp",
    ],
    images: [
      "/assets/projects/dtmoney.png",
      "/assets/projects/dtmoney2.png",
    ],
    repo: "https://github.com/victorgomesc/DT_Money",
    deploy: "https://dt-money-amber-two.vercel.app/"
  },
  {
    name: "Next Portfolio",
    techs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "/assets/projects/tailwind-css-2.webp",
    ],
    images: [
      "/assets/projects/portfolio.png",
      "/assets/projects/portfolio1.png",
      "/assets/projects/portfolio2.png",
      "/assets/projects/portfolio4.png",
    ],
    repo: "https://github.com/victorgomesc/DT_Money",
    deploy: "https://dt-money-amber-two.vercel.app/"
  },
];
