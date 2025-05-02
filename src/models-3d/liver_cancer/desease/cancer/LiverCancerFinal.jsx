import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export function LiverCancerFinal(props) {
  const { nodes, materials } = useGLTF(
    "/models/liver_cancer/desease/cancer-liver.glb"
  );

  const cancerLiverRef=useRef();
  

  

  if(props.home){
    useFrame((state,delta)=>{
      cancerLiverRef.current.rotation.y+=1*delta;
    });

  }else{

    const [sub,get] = useKeyboardControls();
    useEffect(() => {
    

      sub((press) => {
        if (press.up) {
          cancerLiverRef.current.rotation.x -= 0.05;
        }
  
        if (press.down) {
          cancerLiverRef.current.rotation.x += 0.05;
        }
  
        if (press.left) {
          cancerLiverRef.current.rotation.y -= 0.05;
        }
  
        if (press.right) {
          cancerLiverRef.current.rotation.y += 0.05;
        }
      });
    }, [sub]);

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
