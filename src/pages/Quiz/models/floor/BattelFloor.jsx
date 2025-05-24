import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier"
import { useMemo } from "react"


const BattelFloor = (props) => {

    const PATH=useMemo(()=>'textures/floor/speckled-granite-tiles_',[]);

    const floorTexture=useTexture({
        map:`${PATH}albedo.png`,
        normalMap:`${PATH}normal-ogl.png`,
        roughnessMap:`${PATH}roughness.png`,
        displacementMap:`${PATH}height.png`,
        aoMap:`${PATH}ao.png`,
        metalnessMap: `${PATH}metallic.png`,

    });
  return (
    <RigidBody name='floorRB' type='fixed' colliders={'cuboid'} friction={0} position={props.position}>
            {/* <CuboidCollider {...props.cuboid}/>  */}
            <mesh rotation-x={-Math.PI/2} >
                <planeGeometry {...props.geometry}/>
                <meshStandardMaterial 
                map={floorTexture.map}
                nomralMap={floorTexture.normalMap}
                displacementMap={floorTexture.displacementMap}
                aoMap={floorTexture.aoMap}
                metalnessMap={floorTexture.metalnessMap}
                />
            </mesh>
        </RigidBody>
  )
}

export default BattelFloor