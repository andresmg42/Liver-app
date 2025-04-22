import { Html } from '@react-three/drei'
import React from 'react'

const CancerImages = ({path,position}) => {
  return (
    <Html
    
    center
    position={position}
    distancFactor={2}
    

    

    >
        <div className='w-[50vh] h-[50vh]'>
            <img src={path} alt="" />
        </div>
        
    </Html>
  )
}

export default CancerImages