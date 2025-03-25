import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Fever(props) {
  const { nodes, materials } = useGLTF('/models/liver_cancer/symptomps/fever.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[175.455, 46.487, 0]} rotation={[-1.571, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer_Material002_0.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer_Material006_0.geometry}
            material={materials['Material.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer_Material003_0.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer_Material004_0.geometry}
            material={materials['Material.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer002__0.geometry}
            material={materials['Prop_Termometer.002__0']}
            position={[2.763, 0, 0.414]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer004_Material005_0.geometry}
            material={materials['Material.005']}
            position={[1.144, 0, 0.228]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer003_Display_0.geometry}
            material={materials.Display}
            position={[0.549, 0, 0.255]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer001__0.geometry}
            material={materials['Prop_Termometer.002__0']}
            position={[2.763, 0, 0.328]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.041, 1.041, 1]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/liver_cancer/symptomps/fever.glb')