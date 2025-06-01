
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function ThirdMedal(props) {
  const { nodes, materials } = useGLTF('models/quiz/medals/ThirdMedal.glb')

  const medalRef=useRef();

  useFrame((state,delta)=>{
    medalRef.current.rotation.y+=delta


  })
  return (
    <group {...props} dispose={null} ref={medalRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.medal.geometry}
        material={materials.Textured_mesh_12_tex0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.medal_1.geometry}
        material={materials.Textured_mesh_12_tex1}
      />
    </group>
  )
}

useGLTF.preload('models/quiz/medals/ThirdMedal.glb')