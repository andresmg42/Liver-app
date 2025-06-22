import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function FirstMedal(props) {


    const medalRef=useRef();

    useFrame((state,delta)=>{
        medalRef.current.rotation.y+=delta
    
    
      });

  const { nodes, materials } = useGLTF('models/quiz/medals/FirstMedalglb.glb')
  return (
    <group {...props} dispose={null} ref={medalRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FirsMedal.geometry}
        material={materials['18884_Medal_Wislawy_04_FIN_Material_u1_v1']}
      />
    </group>
  )
}

useGLTF.preload('models/quiz/medals/FirstMedalglb.glb')