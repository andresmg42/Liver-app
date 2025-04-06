import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { LiverCancerFinal } from '../../../LiverCancerFinal'
import StagingCancerLiver from '../../../staging/cancer/StagingCancerLiver'


const CancerLiverInPage = () => {
  return (
    <Canvas>
    <StagingCancerLiver/>
    <OrbitControls enableZoom={false} />
    <ambientLight intensity={2} />
    <directionalLight position={[5, 5, 10]} intensity={4} />
    <LiverCancerFinal scale={5}/>

  </Canvas>
  )
}

export default CancerLiverInPage