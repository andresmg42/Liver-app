
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import Recipient from "../../resipients/Resipient";

import CancerButtons from "../../buttons/CancerButtons";
import RotateHtml from "../../buttons/RotateHtml";
import { useEventStore } from "../../../../../stores/use-auth-store";
import ResponsiveModel from "./ResponsiveModel";
import CancerButton from './float-buttons/CancerButton'
import DescriptionButton from "./float-buttons/descriptionButton";


const StagerExperiment = (props) => {
 

  const { setClick } = useEventStore();

  return (
    <div className="fixed top-0 left-0 w-full h-full object-cover  Z-0">
      
        <Canvas
          camera={{ position: [0, 0, 2.5] }}
          shadows={true}
          onPointerDown={()=>{setClick(true)}}
          onPointerUp={()=>{setClick(false)}}
        >
          
          {/* {props.htmlinterfaz} */}

          
          {props.staging}

          <Float
            speed={3}
            
          >
            <CancerButton position={[-1.6,0,0]}/>

            <DescriptionButton position={[1.5,0,0]}/>
            {props.text}
          </Float>

          <RotateHtml position={[0, -1, 0]} color={props.color} />

          {/* <CancerButtons position={[2,0.2,0]} color={props.color} /> */}

         

          <OrbitControls enableZoom={false} target={[0, 0, 0]} />
          <ambientLight intensity={4} />
          <directionalLight
            position={[0, 5, 5]}
            intensity={3}
            castShadow={true}
          />

          <ResponsiveModel originalScale={3}>
            <>
            {props.model}
            <Recipient />
            </>

          </ResponsiveModel>
          {/* {props.model} */}

         
        </Canvas>
     
    </div>
  );
};

export default StagerExperiment;