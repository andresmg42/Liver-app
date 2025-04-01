import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Alcohol(props) {
  const { nodes, materials } = useGLTF('/models/liver_cancer/recomendations/alcohol.glb')
  const alcoholRef=useRef();
    useFrame((satate,delta)=>{
      alcoholRef.current.rotation.y+=1*delta;
    })
  return (
    <group {...props} dispose={null} ref={alcoholRef}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Alcohol_1.geometry}
      material={materials.LavelMaterial2}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Alcohol_2.geometry}
      material={materials.GlassMaterial}
    />
  </group>
  )
}

useGLTF.preload('/models/liver_cancer/recomendations/alcohol.glb')