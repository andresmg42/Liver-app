import { useEffect, useState } from "react";
import { useEventStore } from "../../../stores/use-auth-store";
import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
const HtmlQuestions = (props) => {
  const { click,setClickQuestion } = useEventStore();

  const {camera}=useThree();

  const targetRef=useRef();

 

  

  const cards=props.cards
  const color=props.color

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % cards.length); 
    
  };

  const back = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    
  };

  return (
    <Html
    {...props}
    ref={targetRef}
    >
    <div
      className={` 
            items-center  gap-8 md:w-[70vh]  w-[45vh]  mx-auto px-4 relative  z-10`}
    >
      <div
        className={`bg-black/50 p-5 rounded-xl shadow-xl w-full transition-all duration-500 
           h-[30vh] md:h-[50vh] overflow-y-auto `}
      >
        <div className=" flex justify-end w-full mb-3">
          <button onClick={()=>{setClickQuestion(false)
            
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
            {cards[index].title}
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
          {cards[index].a}
        </p>
        
    
      </div>
    </div>
    </Html>
  );
};

export default HtmlQuestions;
