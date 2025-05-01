
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';



export function LiverCancerFinal(props) {
  const { nodes, materials } = useGLTF('/models/liver_cancer/desease/cancer-liver.glb')

  

  const cancerLiverRef=useRef();
    useFrame((satate,delta)=>{
      cancerLiverRef.current.rotation.y+=1*delta;
    })

  return (
    <group  {...props} dispose={null} ref={cancerLiverRef} >
      <mesh
        
        castShadow
        receiveShadow
        geometry={nodes.CancerLiver.geometry}
        material={materials.CancerLiverMaterial}
      />
    </group>
  )
}

useGLTF.preload('/models/liver_cancer/desease/cancer-liver.glb')