import { Html } from "@react-three/drei";
import React from "react";
import { useEventStore } from "../../../../stores/use-auth-store";
import { useNavigate } from "react-router";


const CancerButtons = ({ position, color }) => {
  const navigate = useNavigate();
  const { click, setClick } = useEventStore();

  const handleClickSymptoms = (e) => {
    e.stopPropagation();
    navigate("/symptoms");
  };

  const handleClickCancer = (e) => {
    e.stopPropagation();
    navigate('/cancer')
  };

  const handleClickRecomendations = () => {};

  const handleClickTreatment = () => {};

  return (
    <Html
      center
      position={position}
      distancFactor={2}
      style={{ pointerEvents: "auto" }}
    >
      <div className="flex flex-col items-center justify-center p-2 gap-2"
      onPointerDown={(e)=>e.stopPropagation()}
      onPointerUp={(e)=>e.stopPropagation()}
      >

      <div
          onClick={handleClickCancer}
          
          className={`${
            click ? "hidden" : "block"
          } w-[10vh] h-[10vh] shadow-md rounded-full p-2 hover:bg-black bg-black/50 flex items-center justify-center`}
        >
          <svg viewBox="0 0 32 32" 
          xmlns="http://www.w3.org/2000/svg" 
          fill={`${color}`}
          width="40"
          height="40"
          >
            <title />
            <g id="liver">
              <path d="M27.49,5H11.28A14.06,14.06,0,0,1,20,17.94c0,.24,0,.49,0,.75l1.37-1.38a2.21,2.21,0,0,1,.88-.53l1.61-.52a4.2,4.2,0,0,0,2.68-2.66,2.2,2.2,0,0,1,1.13-1.28L29,11.68A3.51,3.51,0,0,0,27.49,5Z" />
              <path d="M7.78,5.08a.61.61,0,0,0-.27,0A7.57,7.57,0,0,0,1,12.54v9.79A4.67,4.67,0,0,0,5.67,27h.81a6.85,6.85,0,0,0,5.85-3.24,2.15,2.15,0,0,1,1.51-1A7.52,7.52,0,0,0,18,20.62l.58-.58a1,1,0,0,0,.29-.59A13.54,13.54,0,0,0,19,17.94,13,13,0,0,0,7.78,5.08Z" />
            </g>
          </svg>
        </div>

        <div
          onClick={handleClickSymptoms}
          className={`${
            click ? "hidden" : "block"
          } w-[10vh] h-[10vh] shadow-md rounded-full p-2 hover:bg-black bg-black/50 flex items-center justify-center`}
          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke={`${color}`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-triangle-alert-icon lucide-triangle-alert"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        </div>

        <div
          onClick={handleClickTreatment}
          className={`${
            click ? "hidden" : "block"
          } w-[10vh] h-[10vh] shadow-md rounded-full p-2 hover:bg-black bg-black/50 flex items-center justify-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke={`${color}`}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-pill-icon lucide-pill"
          >
            <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
            <path d="m8.5 8.5 7 7" />
          </svg>
        </div>

        <div
          onClick={handleClickRecomendations}
          className={`${
            click ? "hidden" : "block"
          } w-[10vh] h-[10vh] shadow-md rounded-full p-2 hover:bg-black bg-black/50 flex items-center justify-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke={`${color}`}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-wine-off-icon lucide-wine-off"
          >
            <path d="M8 22h8" />
            <path d="M7 10h3m7 0h-1.343" />
            <path d="M12 15v7" />
            <path d="M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198" />
            <line x1="2" x2="22" y1="2" y2="22" />
          </svg>
        </div>
      </div>
    </Html>
  );
};

export default CancerButtons;
