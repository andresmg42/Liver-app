import { CuboidCollider, RigidBody } from '@react-three/rapier'


const GenericFloor = (props) => {
  return (
    <RigidBody name='floorRB' type='fixed' colliders={false} friction={0} >
        <CuboidCollider {...props.cuboid}/> 
        <mesh rotation-x={-Math.PI/2} {...props.mesh}>
            <planeGeometry {...props.geometry}/>
            <meshStandardMaterial 
            {...props.meshM}
            />
        </mesh>
    </RigidBody>
  )
}

export default GenericFloor