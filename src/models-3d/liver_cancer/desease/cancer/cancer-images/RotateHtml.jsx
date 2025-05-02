import React, { useState } from "react";
import { Box } from "lucide-react";
import { Html } from "@react-three/drei";
import { useEventStore } from "../../../../../stores/use-auth-store";
const RotateHtml = ({ position }) => {
  const { click } = useEventStore();
  const [overButton, setOverButton] = useState(false);

  return (
    <Html center position={position} distancFactor={2}>
      {overButton ? (
        <div
          className={` flex items-center justify-center shadow-md`}
          onPointerLeave={() => {
            setOverButton(false);
          }}
        >
          <h3 className="text-[#ff6035]">push w,A,S,D to move 3D model</h3>
        </div>
      ) : (
        <div
          className={`${
            click ? "hidden" : "block"
          } flex items-center justify-center w-20 h-20 rounded-full bg-black/15 shadow-md animate-spin-slow`}
          onPointerEnter={() => setOverButton(true)}
        >
          <Box className="w-8 h-8 text-[#ff6035]" />
        </div>
      )}
    </Html>
  );
};

export default RotateHtml;
