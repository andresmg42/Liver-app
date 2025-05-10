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
          <h3 style={{color:"black"}}>push w,A,S,D to move 3D model</h3>
        </div>
      ) : (
        <div
          className={` flex items-center justify-center w-20 h-20 rounded-full bg-black/15  animate-spin-slow ${clickview? "hidden md:flex":"flex"}`}
          onPointerEnter={() => setOverButton(true)}
        >
          <Box className="w-8 h-8" style={{color}} />
        </div>
      )}
    </Html>
  );
};

export default RotateHtml;
