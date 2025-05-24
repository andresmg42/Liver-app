import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { Cuboid } from 'lucide-react'

const Floor = (props) => {
  return (
    <RigidBody name='floorRB' type='fixed' colliders={false} friction={0} >
        <CuboidCollider args={[4000,0.2,3000]} position={[0,-500,0]}/> 
        <mesh rotation-x={-Math.PI/2} {...props} position={[0,-500,0]}>
            <planeGeometry args={[4000,3000]}/>
            <meshStandardMaterial 
            transparent={true} 
            opacity={0} 
            />
        </mesh>
    </RigidBody>
  )
}

export default Floor