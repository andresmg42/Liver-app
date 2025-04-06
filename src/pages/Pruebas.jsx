import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Liver } from '../models-3d/liver_cancer/desease/Liver'
import Liver2 from '../models-3d/liver_cancer/desease/Liver2'
import { Fever } from '../models-3d/liver_cancer/simptoms/Fever'
import { LiverCancer3 } from '../models-3d/liver_cancer/desease/LiverCancer3'
import { LiverCancer2 } from '../models-3d/liver_cancer/desease/LiverCancer2'
import { HepatoCellularCancer } from '../models-3d/liver_cancer/desease/HepatoCellularCancer'
import { Xrays } from '../models-3d/liver_cancer/treatment/Xrays'

import LiverMeat from '../models-3d/liver_cancer/desease/LiverMeat'
import StagingLiver from '../models-3d/liver_cancer/desease/staging/cancer/StagingLiver'
import { Loader } from '@react-three/drei'
import { Suspense } from 'react'
import { LiverCancerFinal } from '../models-3d/liver_cancer/desease/LiverCancerFinal'
import { Alcohol } from '../models-3d/liver_cancer/recomendations/Alcohol'


const Pruebas = () => {

  


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
      <Alcohol scale={3}/>





    </Canvas>
  )
}

export default Pruebas