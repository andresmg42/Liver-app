import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React from "react";
import { useRef } from "react";
import { TextureLoader } from "three";
import { useMemo } from "react";
import { useTexture } from "@react-three/drei";

const GenericTarget = (props) => {
  const treatmentRef = useRef();
  const texture = useLoader(TextureLoader, props.path);

  const PATH = useMemo(() => "textures/metalic/silver_", []);

  const boxTexture = useTexture({
    normalMap: `${PATH}normal-ogl.png`,
    roughnessMap: `${PATH}roughness.png`,
    // displacementMap: `${PATH}height.png`,

    aoMap: `${PATH}ao.png`,
    metalnessMap: `${PATH}metallic.png`,
  });

  return (
    <RigidBody
      name={props.name}
      ref={treatmentRef}
      colliders="cuboid"
      type={props.collider}
      mass={1}
      restitution={0.2}
      friction={0.4}
    >
      <mesh {...props}>
        <boxGeometry />
        <meshStandardMaterial map={texture} {...boxTexture} />
      </mesh>
    </RigidBody>
  );
};

export default GenericTarget;
