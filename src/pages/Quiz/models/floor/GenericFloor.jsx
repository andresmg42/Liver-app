import {  RigidBody } from '@react-three/rapier'


const GenericFloor = (props) => {
  return (
    <RigidBody name={props.name} type='fixed' colliders={'cuboid'} friction={0} position={props.position} >
        {/* <CuboidCollider {...props.cuboid}/>  */}
        <mesh rotation-x={-Math.PI/2} >
            <planeGeometry {...props.geometry}/>
            <meshStandardMaterial 
            {...props.meshM}
            />
        </mesh>
    </RigidBody>
  )
}

export default GenericFloor