
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import Recipient from "../../resipients/Resipient";
import RotateHtml from "../../buttons/RotateHtml";
import { useEventStore } from "../../../../../stores/use-auth-store";
import ResponsiveModel from "./ResponsiveModel";
import DescriptionButton from "./float-cards3D/DescriptionButton";
import CancerButtons from "../../buttons/CancerButtons";
import GenericButton3D from './float-cards3D/GenericButton3D'
import { LiverCancerFinal } from "../../../desease/cancer/LiverCancerFinal";
import { Xrays } from "../../../treatment/Xrays";
import { Alcohol } from "../../../recomendations/Alcohol";
import { Fever } from "../../../simptoms/cancer/Fever";
import { useThree } from "@react-three/fiber";
import { useMemo } from "react";
import ResponsiveButtons from "./float-cards3D/ResponsiveButtons";


const ModelGeneralPage = (props) => {
 

  const { setClick } = useEventStore();
  
  


  return (
    <div className="fixed top-0 left-0 w-full h-full object-cover  Z-0">
      
        <Canvas
          camera={{ position: [0, 0, 2.5] }}
          shadows={true}
          onPointerDown={()=>{setClick(true)}}
          onPointerUp={()=>{setClick(false)}}
        >
          
          
          {props.staging}

          <Float
            speed={3}
            
          >
             <DescriptionButton position={[0,1,0]} color={props.color_description}/>
            {props.text}

          </Float>

          <ResponsiveButtons color={props.color}/>



    
            
          

          <RotateHtml position={[0,0,0]} color={props.color} />

          

         

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
          

         
        </Canvas>
     
    </div>
  );
};

export default ModelGeneralPage;