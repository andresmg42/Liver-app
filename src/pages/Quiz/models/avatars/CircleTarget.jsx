import { RigidBody } from "@react-three/rapier";
import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import { useTexture } from "@react-three/drei";

const CircleTarget = (props) => {
  const circleRef = useRef();

  const PATH=useMemo(()=>'textures/sphere-platform/cloudy-veined-quartz-light_',[]);
  
      const verticalPlatformTexture=useTexture({
          map:`${PATH}albedo.png`,
          normalMap:`${PATH}normal-ogl.png`,
          roughnessMap:`${PATH}roughness.png`,
          // displacementMap:`${PATH}height.png`,
          aoMap:`${PATH}ao.png`,
          metalnessMap: `${PATH}metallic.png`,
  
      });
  

  return (
    <group ref={circleRef} {...props}>
      <group >
        <mesh scale={1}>
          <cylinderGeometry args={[2, 2, 20, 32]} />
          <meshStandardMaterial {...verticalPlatformTexture}/>
        </mesh>
      </group>
    </group>
  );
};

export default CircleTarget;
