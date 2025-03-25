import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Xrays(props) {
  const { nodes, materials } = useGLTF('/models/liver_cancer/treatment/x-ray_machine_free.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material_0}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/liver_cancer/treatment/x-ray_machine_free.glb')
