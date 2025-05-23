import { Canvas } from '@react-three/fiber'
import React from 'react'
import RoomStaging from './staging/RoomStaging'
import { OrbitControls } from '@react-three/drei'
import { PilotAvatar } from './models/PilotAvatar'

const Quiz = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full object-cover  Z-0">
        <Canvas>
            <OrbitControls/>
            <RoomStaging/>
            <PilotAvatar scale={15} position={[0,-25,-40]}/>


        </Canvas>
    </div>
  )
}

export default Quiz