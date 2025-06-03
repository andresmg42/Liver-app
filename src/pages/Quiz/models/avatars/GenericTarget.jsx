import { useLoader } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier'
import React from 'react'
import { useRef } from 'react';
import {TextureLoader} from 'three'

const GenericTarget = (props) => {
    const treatmentRef=useRef();
    const texture=useLoader(TextureLoader,props.path)
  return (
    

       <RigidBody
       name={props.name}
          ref={treatmentRef}
          colliders='cuboid'
          type={props.collider}
          mass={1}
        
          
       >
         <mesh  {...props}>
            <boxGeometry/>
            <meshStandardMaterial map={texture}/>

        </mesh>
       </RigidBody>
    
  )
}

export default GenericTarget