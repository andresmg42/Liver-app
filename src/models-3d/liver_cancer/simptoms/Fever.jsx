import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export function Fever(props) {
  const { nodes, materials } = useGLTF('/models/liver_cancer/symptomps/fever.glb')
  const termometerRef=useRef();
  useFrame((satate,delta)=>{
    termometerRef.current.rotation.y+=1*delta;
  })

  return (
    <group {...props} dispose={null} ref={termometerRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fever_1.geometry}
        material={materials.BiggestSurfaceMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fever_2.geometry}
        material={materials.TopSensorMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fever_3.geometry}
        material={materials.BorederButtonSurfaceMaterial2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fever_4.geometry}
        material={materials.BottomTermometerMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fever_5.geometry}
        material={materials.ButtonSurfaceMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fever_6.geometry}
        material={materials.ButtonMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fever_7.geometry}
        material={materials.BorderButtonSurfaceMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fever_8.geometry}
        material={materials.DisplayMaterial}
      />
    </group>
  )
}

useGLTF.preload('/models/liver_cancer/symptomps/fever.glb')