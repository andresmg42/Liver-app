import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"



const ModelCard = (props) => {
  return (
    <Canvas>
    
    {/* <OrbitControls enableZoom={false} /> */}
    <ambientLight intensity={0.5} />
    {/* <directionalLight position={[5, 5, 10]} intensity={4} /> */}

    {/* '0xff0040' */}

    <pointLight color='0xffffff ' intensity={300} position={[0, 5, 3]}/>
    
    {/* <directionalLight
            position={[0, 5, 5]}
            intensity={7}
            power={5}
          /> */}
    {/* <LiverCancerFinal scale={5} home={true}/> */}
    {props.model}

  </Canvas>
  )
}

export default ModelCard