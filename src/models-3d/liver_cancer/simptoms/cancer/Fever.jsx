import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { useEventStore } from "../../../../stores/use-auth-store";

export function Fever(props) {
  const { nodes, materials } = useGLTF(
    "/models/liver_cancer/symptomps/fever.glb"
  );
  const termometerRef = useRef();
  const {speed_symptoms}=useEventStore();
  const handleKey = (e) => {
    

    switch (e.key) {
      case "w":
        termometerRef.current.rotation.x -= 0.05;
        break;

      case "s":
        termometerRef.current.rotation.x += 0.05;
        break;

      case "a":
        termometerRef.current.rotation.y -= 0.05;
        break;

      case "d":
        termometerRef.current.rotation.y += 0.05;
        break;

      default:
        break;
    }
  };

  if (props.home) {
    useFrame((state, delta) => {
      termometerRef.current.rotation.x += 1 * delta*speed_symptoms;
    });
  } else {
    useEffect(() => {
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }, []);
  }

  return (
    <group {...props} dispose={null} ref={termometerRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fever_1.geometry}
        material={materials.BiggestSurfaceMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fever_2.geometry}
        material={materials.TopSensorMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fever_3.geometry}
        material={materials.BorederButtonSurfaceMaterial2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fever_4.geometry}
        material={materials.BottomTermometerMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fever_5.geometry}
        material={materials.ButtonSurfaceMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fever_6.geometry}
        material={materials.ButtonMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fever_7.geometry}
        material={materials.BorderButtonSurfaceMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fever_8.geometry}
        material={materials.DisplayMaterial}
      />
    </group>
  );
}

useGLTF.preload("/models/liver_cancer/symptomps/fever.glb");
