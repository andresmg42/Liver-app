import { Html } from "@react-three/drei";
import React from "react";
import { useState } from "react";
import { useEventStore } from "../../../../../stores/use-auth-store";
import { useThree } from "@react-three/fiber";
import { useMemo } from "react";

const HtmlInterfaz = ({ color, cards, position }) => {
  const { click, setClick,setClickView,clickview } = useEventStore();

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

  const { viewport } = useThree();

  // position={[-2.5, -0.5, 0]} //desktop
  // position={[0, 1, 0]} //movil
  // position={[0, 0.5, 0]}//tablet

  const pos = useMemo(() => {
    
    if (viewport.width < 2) return [0, 0.28, 0];
    if (viewport.width < 3 && viewport.width > 2) return [0, 0, 0];
    return position;
  }, [viewport.width]);

  return (
    <Html
      center
      position={pos}
      //   distanceFactor={1}
      style={{ pointerEvents: "auto" }}
      
    >
      {/* Single Column Cards Container */}
      <div
        className={`${click ? "hidden" : "block"} 
            items-center  gap-8 md:w-[50vh] md:h-[70vh] h-[70vh] w-[45vh]  mx-auto px-4 relative`}
      >
        {/* Liver Cancer Card */}
        <div
          onPointerDown={(e)=>e.stopPropagation()}
          onPointerUp={(e)=>e.stopPropagation()}
          className={`bg-black/50 p-5 rounded-xl shadow-xl w-full transition-all duration-500 ${
            viewImage || ViewVideo ? "max-h-[70vh]" : "h-[30vh] md:h-[50vh]"
          } overflow-y-auto`}
        >
          <h2
            className="text-base md:text-2xl font-semibold text-center mb-3"
            style={{ color }}
          >
            {cards[index].titulo}
          </h2>
          <p className="text-sm md:text-xl md:font-bold " style={{ color }}>
            {cards[index].descripcion}
          </p>
          {(cards[index].imagen || cards[index].video) && (
            <button
              className="animate-bounce mt-10  flex flex-col items-center mx-auto text-sm"
              style={{ color }}
              onClick={() => {
                if (cards[index].imagen) {
                  setViewImage(!viewImage);
                } else {
                  setViewVideo(!ViewVideo);
                }
                setClickView(!clickview)
              }
            
            
            
            }
            >
              view
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke={color}
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
        onPointerDown={(e)=>e.stopPropagation()}
        onPointerUp={(e)=>e.stopPropagation()}
          onClick={back}
          className=" relative  
            md:absolute md:-left-10 md:top-[20vh] md:-translate-y-1/2
            bg-black/50 shadow-md p-2 rounded-full hover:bg-black mt-5 mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke={color}
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
        onPointerDown={(e)=>e.stopPropagation()}
        onPointerUp={(e)=>e.stopPropagation()}
          onClick={next}
          className=" relative  md:absolute md:-right-10 md:top-[20vh] md:-translate-y-1/2 bg-black/50  shadow-md p-2 rounded-full hover:bg-black ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke={color}
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
    </Html>
  );
};

export default HtmlInterfaz;
