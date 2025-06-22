import { useMemo } from "react";
import { useTexture } from "@react-three/drei";


const Recipient = (props) => {
  // const path=useMemo(()=>props.texture_path,[])
  // const path=props.texture_path

  // const textureFloor=useTexture({
  //   map:`${path}albedo.png`,
  //   normalMap:`${path}normal-ogl.png`,
  //   roughnessMap:`${path}roughness.png`,
  //   metalnessMap:`${path}metallic.png`,
  //   aoMap:`${path}ao.png`
  // })

    const textureFloor=useTexture({
    ...props.texture
  })



  return (
    <group position={props.position_floor}>
      <mesh
    
      rotation-x={-Math.PI / 2}
      receiveShadow={true}
      
      
    >
      <circleGeometry args={[2, 32]} />
      <meshStandardMaterial roughness={0.8} metalness={1} {...textureFloor}  />
    </mesh>
    </group>
  );
};

export default Recipient;
  
  