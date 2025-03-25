import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function LiverCancer3(props) {
  const { nodes, materials } = useGLTF('public/models/liver_cancer/desease/LiverCancerLuma.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.high_poly.geometry}
        material={materials.Material_0}
        scale={1.797}
      />
    </group>
  )
}

useGLTF.preload('public/models/liver_cancer/desease/LiverCancerLuma.glb')