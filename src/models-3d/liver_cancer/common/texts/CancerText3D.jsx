
import React from 'react'
import { Text3D } from '@react-three/drei'
import { Center } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useThree } from '@react-three/fiber'
import { useMemo } from 'react'


const CancerText3D = ({position,title,color}) => {

  const textRef=useRef();
  const {camera}= useThree()

  const {viewport}=useThree();

  useFrame(()=>{
    if (textRef.current){
      textRef.current.quaternion.copy(camera.quaternion);
    }
  })

  const size = useMemo(() => {
      console.log(viewport.width)
      if (viewport.width < 2) return 0.2;
      // if (viewport.width < 3 && viewport.width > 2) return [0, 0, 0];
      return 0.3;
    }, [viewport.width]);

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
    size={size}
  >
    {title}
    <meshStandardMaterial color={color} />
  </Text3D>
</Center>

  )
}

export default CancerText3D