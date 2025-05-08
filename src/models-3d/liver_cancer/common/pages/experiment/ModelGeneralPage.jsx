
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import Recipient from "../../resipients/Resipient";

import CancerButtons from "../../buttons/CancerButtons";
import RotateHtml from "../../buttons/RotateHtml";
import { useEventStore } from "../../../../../stores/use-auth-store";



const StagerExperiment = (props) => {
 

  const { setClick } = useEventStore();

  return (
    <div className="fixed top-0 left-0 w-full h-full object-cover  Z-0">
      
        <Canvas
          camera={{ position: [0, 0, 2.5] }}
          shadows={true}
          onPointerDown={setClick}
          onPointerUp={setClick}
        >
          
          {props.htmlinterfaz}

          
          {props.staging}

          <Float
            speed={3}
            
          >
           
            {props.text}
          </Float>

          <RotateHtml position={[0, 0, 0]} color={props.color} />

          <CancerButtons position={[2,0.2,0]} color={props.color} />

          <OrbitControls enableZoom={false} target={[0, 0, 0]} />
          <ambientLight intensity={4} />
          <directionalLight
            position={[0, 5, 5]}
            intensity={3}
            castShadow={true}
          />

          
          {props.model}

          <Recipient />
        </Canvas>
     
    </div>
  );
};

export default StagerExperiment;