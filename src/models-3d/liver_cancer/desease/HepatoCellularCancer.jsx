
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function HepatoCellularCancer(props) {
  const { nodes, materials } = useGLTF('/models/liver_cancer/desease/Hepatocelular.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geometry_0.geometry}
        material={nodes.geometry_0.material}
      />
    </group>
  )
}

useGLTF.preload('/models/liver_cancer/desease/Hepatocelular.glb')