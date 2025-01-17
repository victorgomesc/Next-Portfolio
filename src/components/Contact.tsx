// src/components/Contact.jsx
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { theme } = useContext(ThemeContext);
    const { t } = useTranslation();


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      const form = e.currentTarget; // Aqui estamos afirmando que é um HTMLFormElement
      const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
      const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
      const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();
  
      if (!name || !email || !message || !/\S+@\S+\.\S+/.test(email)) {
        e.preventDefault();
        alert(t("Por favor, preencha todos os campos corretamente."));
      }
    };

  return (
    <section id="contact" className="py-10 relative overflow-hidden min-h-screen dark:bg-neutral-900">
      <section
        className="flex flex-col items-center justify-center pt-10"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <section className="relative text-center">
          <h2 className="md:text-5xl text-4xl uppercase font-semibold py-4 relative z-[2] dark:text-white">
            Contact
          </h2>
          <h2
            className={` ${
              theme === "dark"
                ? "text-black border-text-light"
                : "text-white border-text-dark"
            } md:text-6xl text-5xl uppercase font-semibold py-4 absolute -top-6 md:-left-[11%] -left-[12%] z-[0] opacity-60  whitespace-nowrap`}
          >
            Contact
          </h2>
        </section>
    

      <Image
                className="absolute top-0 right-0 md:w-[250px] md:h-[250px] w-[110px] h-[110px] text-center z-[-1] blur-3xl opacity-50 rounded-full"
                src="/assets/bg-gradient.webp"
                alt="bg-gradient"
                width={250}
                height={250}
              />
              <Image
                className="absolute bottom-0 left-0 md:w-[250px] md:h-[250px] w-[110px] h-[110px] text-center z-[-1] blur-3xl opacity-50 rounded-full"
                src="/assets/bg-gradient.webp"
                alt="bg-gradient"
                width={250}
                height={250}
              />

        <section className="flex w-full md:flex-row flex-col items-center justify-center">
          <form
            action="https://getform.io/f/ajjjxrya"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder='Your Name'
              className={`
                    ${ theme === "dark"
                        ? "text-Withe border-Withe" 
                        : "text-black border-black"
                    }
                    p-2 bg-transparent border-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500
                `}
              required
            />
            <input
              type="email"
              name="email"
              placeholder='Your Email'
              className={`
                ${ theme === "dark"
                    ? "text-Withe border-Withe" 
                    : "text-black border-black"
                }
                p-2 my-4 bg-transparent border-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500
            `}
              required
            />
            <textarea
              name="message"
              placeholder='Your Message'
              rows={10}
              className={`
                ${ theme === "dark"
                    ? "text-Withe border-Withe" 
                    : "text-black border-black"
                }
                p-2 bg-transparent border-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500
            `}
              required
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-r from-blue-950 via-blue-500 to-cyan-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Submit
            </button>
          </form>
        </section>
        </section>
      </section>
  );
};

export default Contact;