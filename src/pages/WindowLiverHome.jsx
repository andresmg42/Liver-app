import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"


import { Fever } from '../models-3d/liver_cancer/simptoms/Fever'

import { Xrays } from '../models-3d/liver_cancer/treatment/Xrays'

import LiverMeat from '../models-3d/liver_cancer/desease/cancer/LiverMeat'
import StagingLiver from '../models-3d/liver_cancer/desease/staging/cancer/StagingLiver'

import { Alcohol } from '../models-3d/liver_cancer/recomendations/Alcohol'

import { LiverHome } from '../models-3d/liver_cancer/desease/cancer/LiverHome'


const WindowLiverHome = () => {

  


  return (
    <Canvas>
      <StagingLiver/>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 10]} intensity={4} />
      
      {/* <LiverMeat/> */}
      {/* <LiverCancerFinal scale={4}/> */}
      

      {/* <Fever scale={3}/> */}

      {/* <Xrays scale={2}/> */}
      <LiverHome scale={1.7}/>





    </Canvas>
  )
}

export default WindowLiverHome