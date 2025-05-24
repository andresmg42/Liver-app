import { Canvas } from '@react-three/fiber'
import React from 'react'
import RoomStaging from './staging/RoomStaging'
import { OrbitControls } from '@react-three/drei'
import { PilotAvatar } from './models/PilotAvatar'
import { Physics } from '@react-three/rapier'
import Floor from './models/Floor'

const Quiz = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full object-cover  Z-0">
        <Canvas>
            <OrbitControls/>
            <RoomStaging/>
            <Physics debug>
            <PilotAvatar scale={15} position={[0,-25,-40]}/>
            <Floor/>
            </Physics>

        </Canvas>
    </div>
  )
}

export default Quiz