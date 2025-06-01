import { Canvas } from '@react-three/fiber'
import React from 'react'

const GenericMedal = (props) => {
  return (
        <Canvas>
            <ambientLight intensity={1}/>
            <pointLight intensity={250} position={[0, 5, 3]}/>
            {props.model}
        </Canvas>
  )
}

export default GenericMedal