import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEventStore } from "../../../../stores/use-auth-store";


export function LiverCancerFinal(props) {
  const { nodes, materials } = useGLTF(
    "/models/liver_cancer/desease/cancer-liver.glb"
  );

  const {speed_cancer}=useEventStore()

  const cancerLiverRef = useRef();

  const handleKey = (e) => {

    
    switch (e.key) {
      case "w":
        
        cancerLiverRef.current.rotation.x -= 0.05;
        break;

      case "s":
       
        cancerLiverRef.current.rotation.x += 0.05;
        break;

      case "a":
        cancerLiverRef.current.rotation.y -= 0.05;
        break;

      case "d":
        cancerLiverRef.current.rotation.y += 0.05;
        break;

      default:
        break;
    }
  };

  if (props.home) {
    useFrame((state, delta) => {
      cancerLiverRef.current.rotation.y += 1 * delta*speed_cancer;
    });
  } else {
    useEffect(() => {
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }, []);
  }

  return (
    <group {...props} dispose={null} ref={cancerLiverRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CancerLiver.geometry}
        material={materials.CancerLiverMaterial}
      />
    </group>
  );
}

useGLTF.preload("/models/liver_cancer/desease/cancer-liver.glb");
