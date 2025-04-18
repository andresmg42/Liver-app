import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function LiverHome(props) {
  const { nodes, materials } = useGLTF('/models/liver_cancer/desease/liver-home.glb')
  return (
    <group {...props} dispose={null}>
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