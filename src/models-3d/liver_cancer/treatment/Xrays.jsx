import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export function Xrays(props) {
  const { nodes, materials } = useGLTF('/models/liver_cancer/treatment/treatment-xrays.glb')

   const xraysRef=useRef();
   
    useFrame((satate,delta)=>{
      xraysRef.current.rotation.y+=1*delta;
      
    })

  return (
    <group {...props} dispose={null} ref={xraysRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Xrays.geometry}
        material={materials.XraysMaterial}
        // rotation={[0,0,2]}
      />
    </group>
  )
}

useGLTF.preload('/models/liver_cancer/treatment/treatment-xrays.glb')