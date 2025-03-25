import React from 'react'
import { useGLTF } from '@react-three/drei'

const Liver2 = () => {
    const liver=useGLTF('/models/liver_cancer/desease/cirrotic_liver_modificado.glb')
  return (

    <mesh>
        <primitive object={liver.scene}/>
    </mesh>
   
  )
}

export default Liver2

useGLTF.preload('/models/liver_cancer/desease/cirrotic_liver_modificado.glb')