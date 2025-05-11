
import { useMemo } from "react";
import CancerButtons from "../../../buttons/CancerButtons";
import GenericButton3D from '../float-cards3D/GenericButton3D'
import { LiverCancerFinal } from "../../../../desease/cancer/LiverCancerFinal";
import { Xrays } from "../../../../treatment/Xrays";
import { Alcohol } from "../../../../recomendations/Alcohol";
import { Fever } from "../../../../simptoms/cancer/Fever";
import { useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";


const ResponsiveButtons = (props) => {

    const {viewport}=useThree();

     const responsive=useMemo(()=>{
      console.log('viewport',viewport.width)
    if (viewport.width<2.5) return true
    return false
  },[viewport.width])
  return (
    <>
    {!responsive ?(
             <Float>
           
            <GenericButton3D rute='/cancer' position={[-2.2,0,0]} model={<LiverCancerFinal scale={4} home={true} />} speed='cancer'/>
            <GenericButton3D rute='/symptoms' position={[2.2,0,0]} model={<Fever scale={3} home={true} />} speed='symptoms'/>
            <GenericButton3D rute='/treatment' position={[2.2,-1,0]} model={<Xrays scale={2.5} home={true} />} speed='treatment'/>
            <GenericButton3D rute='/recomendations' position={[-2.2,-1,0]} model={<Alcohol scale={2.5} home={true}  />} speed='recomendations'/>
            </Float>
           ):
           (
            <CancerButtons position={[2,0.2,0]} color={props.color} /> 
           )};
    
    </>
  )
}

export default ResponsiveButtons