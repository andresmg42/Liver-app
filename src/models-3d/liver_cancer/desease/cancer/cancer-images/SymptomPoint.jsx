import { Html } from "@react-three/drei";
import React from "react";
import { Text3D } from "@react-three/drei";
import { Center } from "@react-three/drei";

const SymptomPoint = ({ position, title }) => {
  return (
    <Html center position={position} distancFactor={2}>
      <div className="flex items-center justify-center p-2 gap-2">
        <div className="w-[10vh] h-[10vh] shadow-md rounded-full p-2 hover:bg-black bg-black/15 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff6035"
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

        <div className="w-[10vh] h-[10vh] shadow-md rounded-full p-2 hover:bg-black bg-black/15 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff6035"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-pill-icon lucide-pill"
          >
            <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
            <path d="m8.5 8.5 7 7" />
          </svg>
        </div>

        <div className="w-[10vh] h-[10vh] shadow-md rounded-full p-2 hover:bg-black bg-black/15 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff6035"
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

export default SymptomPoint;
