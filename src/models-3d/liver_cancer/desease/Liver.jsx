import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Liver(props) {
  const { nodes, materials } = useGLTF('/models/liver_cancer/desease/cirrhotic_liver.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.329, 0.016, 0.181]} rotation={[-1.179, 0.945, 0.232]} scale={0.232}>
        <group position={[-0.679, -1.031, -1.307]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.initialShadingGroup}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.lambert2SG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.lambert3SG}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/liver_cancer/desease/cirrhotic_liver.glb')
