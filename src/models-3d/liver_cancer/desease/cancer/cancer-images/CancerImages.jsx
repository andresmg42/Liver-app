import { Html } from '@react-three/drei'
import React from 'react'
import { Text3D } from '@react-three/drei'
import { Center } from '@react-three/drei'

const CancerImages = ({position,title}) => {
  return (
    // <Html
    
    // center
    // position={position}
    // distancFactor={2}
    

    

    // >
    //     <div className='w-[50vh] h-[50vh]'>
    //         <img src={path} alt="" />
    //     </div>
        
    // </Html>

    <Center position={position}>
  <Text3D
    font="fonts/Bebas Neue_Regular.json"
    bevelEnabled
    bevelThickness={0.02}
    height={0.01}
    lineHeight={0.8}
    letterSpacing={0.02}
    size={0.3}
  >
    {title}
    <meshStandardMaterial color="red" />
  </Text3D>
</Center>

  )
}

export default CancerImages