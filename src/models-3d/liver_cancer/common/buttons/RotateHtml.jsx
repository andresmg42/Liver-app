import React, { useState } from "react";
import { Box } from "lucide-react";
import { Html } from "@react-three/drei";
import { useEventStore } from "../../../../stores/use-auth-store";

const RotateHtml = ({ position,color }) => {
  const { click,clickview } = useEventStore();
  const [overButton, setOverButton] = useState(false);
 

  return (
    <Html center position={position} distancFactor={1} >
      {overButton ? (
        <div
          className={` flex items-center justify-center shadow-md`}
          onPointerLeave={() => {
            setOverButton(false);
          }}
        >
          <h3 className="md:text-base text-sm" style={{color}}>push w,A,S,D to move 3D model</h3>
        </div>
      ) : (
        <div
          className={`${click? 'hidden':'block'} flex items-center justify-center md:w-20 md:h-20  w-10 h-10 rounded-full bg-black/15  animate-spin-slow ${clickview? "hidden md:flex":"flex"}`}
          onPointerEnter={() => setOverButton(true)}
        >
          <Box className="w-8 h-8" style={{color}} />
        </div>
      )}
    </Html>
  );
};

export default RotateHtml;
