import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, useKeyboardControls } from "@react-three/drei";
import { LiverCancerFinal } from "../../../cancer/LiverCancerFinal";
import Recipient from "../../../resipients/Resipient";
import CancerText3D from "../../../texts/cancer/CancerText3D";
import CancerButtons from "../../../cancer/cancer-images/cancerButtons";
import RotateHtml from "../../../cancer/cancer-images/RotateHtml";
import { useEventStore } from "../../../../../../stores/use-auth-store";
import { KeyboardControls } from "@react-three/drei";


const CancerLiverInPage = () => {

  

  const map = useMemo(
    () => [
      { name: "up", keys: ["ArrowUp", "KeyW"] },
      { name: "down", keys: ["ArrowDown", "KeyS"] },
      { name: "left", keys: ["ArrowLeft", "KeyA"] },
      { name: "right", keys: ["ArrowRight", "KeyD"] },
    ],
    []
  );


  const { setClick } = useEventStore();

  
  return (
    <KeyboardControls map={map}>
      
        <Canvas
          camera={{ position: [0,0,2.5] }}
          shadows={true}
          onPointerDown={setClick}
          onPointerUp={setClick}
        >

          <Float
           speed={2} 
          >
          <CancerText3D title={"LIVER CANCER"} position={[0, 1.5, 0]} />
          </Float>

          <RotateHtml position={[0, 0, 0]} />

          

          <CancerButtons position={[0, -1.5, 0]} />

          <OrbitControls enableZoom={false} target={[0,0,0]} />
          <ambientLight intensity={4} />
          <directionalLight
            position={[0, 5, 5]}
            intensity={3}
            castShadow={true}
          />

          <LiverCancerFinal scale={2} home={false}/>

          
          <Recipient />
          
        </Canvas>
      
    </KeyboardControls>
  );
};

export default CancerLiverInPage;
