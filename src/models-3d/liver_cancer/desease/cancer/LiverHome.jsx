import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function LiverHome(props) {
  const { nodes, materials } = useGLTF('/models/liver_cancer/desease/liver-home.glb')

  const liverRef=useRef();
      useFrame((satate,delta)=>{
        liverRef.current.rotation.y+=1*delta;
      })

  return (
    <group {...props} dispose={null} ref={liverRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Liver_1.geometry}
        material={materials.liverMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Liver_2.geometry}
        material={materials.joinLiverMaterial}
      />
    </group>
  )
}

useGLTF.preload('/models/liver_cancer/desease/liver-home.glb')