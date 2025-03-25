import React from 'react'
import { useGLTF } from '@react-three/drei'

const LiverMeat = () => {
    const liver=useGLTF('/models/liver_cancer/desease/liver_meat.glb')
  return (

    <mesh>
        <primitive object={liver.scene} scale={2}/>
    </mesh>
   
  )
}

export default LiverMeat

useGLTF.preload('/models/liver_cancer/recomendations/liver_meat.glb')