import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"



const ModelCard = (props) => {
  return (
    <Canvas>
    
    <OrbitControls enableZoom={false} />
    <ambientLight intensity={2} />
    <directionalLight position={[5, 5, 10]} intensity={4} />
    {/* <LiverCancerFinal scale={5} home={true}/> */}
    {props.model}

  </Canvas>
  )
}

export default ModelCard