import { useState } from "react";
import { useEventStore } from "../../../../../stores/use-auth-store";


const HtmlInterfaz = ({ color, cards }) => {
  const { click, setClick, setClickView, clickview,setClickCancer } = useEventStore();

  const [viewImage, setViewImage] = useState(false);

  const [ViewVideo, setViewVideo] = useState(false);

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % cards.length); 
    setViewImage(false);
    setViewVideo(false);
  };

  const back = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setViewImage(false);
    setViewVideo(false);
  };

  return (
    <div
      className={`${click ? "hidden" : "block"} 
            items-center  gap-8 md:w-[70vh]  w-[45vh]  mx-auto px-4 relative  z-10`}
    >
      <div
        className={`bg-black/50 p-5 rounded-xl shadow-xl w-full transition-all duration-500 ${
          viewImage || ViewVideo ? "max-h-[70vh]" : "h-[30vh] md:h-[50vh]"
        } overflow-y-auto `}
      >
        <div className=" flex justify-end w-full mb-3">
          <button onClick={()=>{setClickCancer(false)
            setClickView(false)
          }}  >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>


        <div className=" flex justify-between gap-2 items-center mb-3">
          <button onClick={back} className="animate-bounce-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          </button>

          <h2
            className="text-base md:text-2xl font-semibold text-center"
            style={{ color }}
          >
            {cards[index].titulo}
          </h2>

          <button onClick={next} className="animate-bounce-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
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
              setClickView(!clickview);
            }}
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
    </div>
  );
};

export default HtmlInterfaz;
