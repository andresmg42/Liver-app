import CancerLiverInPage from "../../../models-3d/liver_cancer/desease/cards/desease/cancer/CancerLiverInPage";
import { useState } from "react";
import cards from "./pageCancerLiverContent";

const PageCancerLiver = () => {
  const [viewImage, setViewImage] = useState(false);
  const [ViewVideo, setViewVideo] = useState(false);

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % cards.length); // vuelve al inicio al llegar al final
    setViewImage(false);
    setViewVideo(false);
  };

  const back = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setViewImage(false);
    setViewVideo(false);
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="videos/login.mp4" type="video/mp4" />
      </video>

      {/* Main Content Container */}
      <div className="w-full mx-auto mt-10 h-screen pt-8 relative z-10 ">
        {/* Page Header */}
        <header className="mb-8 text-center">
          <h1 className="text-[#ff6035] text-2xl md:text-3xl lg:text-4xl font-bold">
            Liver Cancer Information
          </h1>
        </header>

        {/* Single Column Cards Container */}
        <div className=" items-center  gap-8 md:w-[80vh] md:h-[50vh] h-[60vh] mx-auto px-4 relative ">
          {/* Liver Cancer Card */}
          <div className="bg-white/15 p-5 rounded-xl shadow-xl w-full">
            <h2 className="text-[#ff6035] text-2xl font-semibold text-center mb-3">
              {cards[index].titulo}
            </h2>
            <p className="text-[#ff6035] text-sm md:text-xl">
              {cards[index].descripcion}
            </p>
            {(cards[index].imagen ||
              cards[index].video) && (
                <button
                  className="animate-bounce mt-10  flex flex-col items-center mx-auto  text-[#ff6035]"
                  onClick={() => {
                    if (cards[index].imagen) {
                      setViewImage(!viewImage);
        
                    } else {
                      setViewVideo(!ViewVideo);
                    }
                  }}
                >
                  view
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ff6035"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              )}
            {viewImage && (
              <img
                src={cards[index].imagen}
                alt={cards[index].titulo}
                className="rounded-md mb-4 w-full h-100 object-cover"
              />
            )}

            {ViewVideo && (
              <div className="flex items-center justify-center">
                <iframe
                width="560"
                height="315"
                src={cards[index].video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              </div>
              
            )}
          </div>

          {/* Botón Anterior (izquierda) */}
          <button
            onClick={back}
            className="hidden md:block relative  
            md:absolute md:-left-10 md:top-[20vh] md:-translate-y-1/2
            bg-white/15 shadow-md p-2 rounded-full hover:bg-[#797777]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ff6035"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ff6035"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          </button>

          {/* Botón Siguiente (derecha) */}
          <button
            onClick={next}
            className="hidden md:block relative  md:absolute md:-right-10 md:top-[20vh] md:-translate-y-1/2 bg-white/15  shadow-md p-2 rounded-full hover:bg-[#797777]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ff6035"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ff6035"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Buttons for small screens (bottom, side by side) */}
      <div className="flex justify-center gap-4 mt-4 md:hidden">
        <button
          onClick={back}
          className="bg-white/15 shadow-md p-2 rounded-full hover:bg-[#797777]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>
        </button>

        <button
          onClick={next}
          className="bg-white/15 shadow-md p-2 rounded-full hover:bg-[#797777]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Cancer Liver In Page Component */}
      <div className="w-full  h-[50vh] md:h-screen ">
        <CancerLiverInPage />
      </div>
    </div>
  );
};

export default PageCancerLiver;
