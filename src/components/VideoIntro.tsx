import React from "react";

const VideoIntro = () => {
  return (
    <section
      id="video"
      className="flex flex-col items-center justify-center py-12 bg-zinc-100 dark:bg-zinc-900"
    >
      <h2 className="text-4xl font-semibold mb-8 text-center text-zinc-800 dark:text-white">
        Watch My Intro
      </h2>

      <div className="relative w-[600px] h-[300px] bg-black rounded-[2.5rem] border-8 border-gray-950 shadow-xl overflow-hidden">
        {/* Lateral "notch" (como se fosse o botão lateral do iPhone) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-6 h-24 bg-black rounded-r-2xl z-10" />

        {/* Vídeo horizontal vindo de link direto */}
        <iframe
        className="w-full h-full rounded-[2rem]"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Seu link
        title="Intro Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        />

      </div>
    </section>
  );
};

export default VideoIntro;