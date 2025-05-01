import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { LiverCancerFinal } from '../../../cancer/LiverCancerFinal'
import Recipient from '../../../resipients/Resipient'
import { Float } from '@react-three/drei'
import CancerImages from '../../../cancer/cancer-images/CancerImages'
import SymptomPoint from '../../../cancer/cancer-images/symptomPoint'
import RotateHtml from '../../../cancer/cancer-images/RotateHtml'
import { useEventStore } from '../../../../../../stores/use-auth-store'

const CancerLiverInPage = () => {
  const {setClick}=useEventStore();
  return (
    <Canvas  camera={{ position: [0, 0, 2.5] }} shadows={true} onPointerDown={setClick} onPointerUp={setClick}>


    <CancerImages title={'LIVER CANCER'} position={[0, 1.5, 0]}/>
    
    <RotateHtml  position={[0,0,0]}/>

    {/* acces points */}

    <SymptomPoint position={[0, -1.5, 0]} />

    <OrbitControls enableZoom={false} />
    <ambientLight intensity={4} />
    <directionalLight position={[0, 5, 5]} 
    intensity={3}  
    
    castShadow={true}
     />


     {/* <Float
     speed={4} 
     rotationIntensity={0.5} 
     floatIntensity={0.3} 
     floatingRange={[1,3]}
     > */}
     
     <LiverCancerFinal scale={2}/>

     {/* </Float> */}
    <Recipient/>

  </Canvas>
  )
}

export default CancerLiverInPage