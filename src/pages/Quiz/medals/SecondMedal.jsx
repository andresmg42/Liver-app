import React, { use, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function SecondMedal(props) {

const medalRef=useRef();


useFrame((state,delta)=>{
    medalRef.current.rotation.y+=delta
})

  const { nodes, materials } = useGLTF('models/quiz/medals/SecondMedal.glb')
  return (
    <group {...props} dispose={null} ref={medalRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SecondMedal.geometry}
        material={materials['Material.001']}
      />
    </group>
  )
}

useGLTF.preload('models/quiz/medals/SecondMedal.glb')