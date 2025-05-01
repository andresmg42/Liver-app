import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { LiverCancerFinal } from '../../../cancer/LiverCancerFinal'
import StagingCancerLiver from '../../../staging/cancer/StagingCancerLiver'
import Recipient from '../../../resipients/Resipient'
import { SoftShadows } from '@react-three/drei'
import { Float } from '@react-three/drei'
import Description from '../../../texts/cancer/Description'
import DescriptionHtml from '../../../texts/cancer/DescriptionHtml'
import CancerImages from '../../../cancer/cancer-images/CancerImages'
import SymptomPoint from '../../../cancer/cancer-images/symptomPoint'
const CancerLiverInPage = () => {

  
  return (
    <Canvas  camera={{ position: [0, 0, 2.5] }} shadows={true}>


    <CancerImages title={'LIVER CANCER'} position={[0, 1.5, 0]}/>

    {/* acces points */}

    <SymptomPoint position={[0, -1.2, 0]} />

    <OrbitControls enableZoom={false} />
    <ambientLight intensity={4} />
    <directionalLight position={[0, 5, 5]} 
    intensity={3}  
    
    castShadow={true}
     />


     <Float
     speed={4} 
     rotationIntensity={0.5} 
     floatIntensity={0.3} 
     floatingRange={[1,3]}
     >
     
     <LiverCancerFinal scale={2}/>

     </Float>
    <Recipient/>

  </Canvas>
  )
}

export default CancerLiverInPage