import React from 'react'
import { useGLTF } from '@react-three/drei'

const HBvaccine = () => {
    const liver=useGLTF('/models/liver_cancer/recomendations/hepatitis_b.glb')
  return (

    <mesh>
        <primitive object={liver.scene}/>
    </mesh>
   
  )
}

export default HBvaccine

useGLTF.preload('/models/liver_cancer/recomendations/hepatitis_b.glb')