import { RigidBody } from "@react-three/rapier";
import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const CircleTarget = () => {
  const circleRef = useRef();
  
  useFrame(() => {
    if (circleRef.current) {
      circleRef.current.rotation.y += 0.01; // Rotate around Y axis
    }
  });

  return (
    <group ref={circleRef} position={[0,0,0]}>
      <group rotation={[0,Math.PI,0]}>
        <mesh scale={1}>
          <cylinderGeometry args={[5, 5, 20, 32]} />
          <meshStandardMaterial />
        </mesh>
      </group>
    </group>
  );
};

export default CircleTarget;
