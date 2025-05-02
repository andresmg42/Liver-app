
import React from 'react'
import { Text3D } from '@react-three/drei'
import { Center } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useThree } from '@react-three/fiber'

const CancerText3D = ({position,title,color}) => {

  const textRef=useRef();
  const {camera}= useThree()

  useFrame(()=>{
    if (textRef.current){
      textRef.current.quaternion.copy(camera.quaternion);
    }
  })
  return (
  
    <Center position={position}>
  <Text3D
    ref={textRef}
    font="fonts/Bebas Neue_Regular.json"
    bevelEnabled
    bevelThickness={0.02}
    height={0.01}
    lineHeight={0.8}
    letterSpacing={0.02}
    size={0.3}
  >
    {title}
    <meshStandardMaterial color={color} />
  </Text3D>
</Center>

  )
}

export default CancerText3D