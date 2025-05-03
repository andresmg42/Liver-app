import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import Recipient from "./resipients/Resipient";

import CancerButtons from '../common/buttons/CancerButtons'
import RotateHtml from '../common/buttons/RotateHtml';
import { useEventStore } from "../../../stores/use-auth-store";
import { KeyboardControls } from "@react-three/drei";


const ModelCancerInPage = (props) => {

  

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
           speed={3}
          //  floatingRange={[0.5,1]}  
          >
          {/* <CancerText3D title={"LIVER CANCER"} position={[0, 1.5, 0]} /> */}
          {props.text}
          </Float>

          <RotateHtml position={[0, 0, 0]} color={props.color} />

          

          <CancerButtons position={[0, -1.5, 0]} color={props.color} />

          <OrbitControls enableZoom={false} target={[0,0,0]} />
          <ambientLight intensity={4} />
          <directionalLight
            position={[0, 5, 5]}
            intensity={3}
            castShadow={true}
          />

          {/* <LiverCancerFinal scale={2} home={false}/> */}
          {props.model}

          
          <Recipient />
          
        </Canvas>
      
    </KeyboardControls>
  );
};

export default ModelCancerInPage;
