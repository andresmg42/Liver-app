import React from "react";
import { Box } from "lucide-react";
import { Html } from "@react-three/drei";
import { useEventStore } from "../../../../../stores/use-auth-store";


const RotateHtml = ({position}) => {
  const {click}=useEventStore()
    
  return (
    <Html center position={position}  distancFactor={2}>
      <div  className={`${click ?'hidden':'block'} flex items-center justify-center w-20 h-20 rounded-full bg-black/15 shadow-md animate-spin-slow`}>
        <Box className="w-8 h-8 text-[#ff6035]" />
      </div>
    </Html>
  );
};

export default RotateHtml;
