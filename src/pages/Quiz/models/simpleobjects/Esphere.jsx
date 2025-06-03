import { RigidBody } from "@react-three/rapier";
import { useState } from "react";
import { useRef, useCallback } from "react";
import { useThree } from "@react-three/fiber";
import { Vector2, Vector3 } from "three";
import useQuizStore from "../../../../stores/useQuizStore";

const Esphere = (props) => {
  const sphereRef = useRef();
  const { camera, raycaster } = useThree();

  const {index,color,setCollide,setCountCollisions}=useQuizStore();
  
  
  

  const handleEsphere = useCallback(
    (e) => {
      e.stopPropagation();

      // Get mouse position in normalized device coordinates (-1 to 1)
      const mouse = new Vector2(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );

      // Create a ray from camera through the mouse click position
      raycaster.setFromCamera(mouse, camera);

      // Get the ray direction (this is where we want to shoot toward)
      const shootDirection = raycaster.ray.direction.clone();

      // Scale the direction by desired force
      const force = 800000; //200000 Adjust this value to control shot strength

      // Apply impulse in the shoot direction
      sphereRef.current.wakeUp();
      sphereRef.current.applyImpulse(
        {
          x: shootDirection.x * force,
          y: shootDirection.y * force,
          z: shootDirection.z * force,
        },
        true
      );

      setTimeout(() => {
        console.log("Resetting sphere position after 2 seconds");
        
        // Reset position to initial position
        sphereRef.current.setTranslation(
          { x: 0, y: 10, z: 0 },
          true
        );
        
        // Reset velocity to stop movement
        sphereRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
        sphereRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
        
        // Wake up the rigid body to apply changes
        sphereRef.current.wakeUp();
      }, 2000);

      


    },
    [sphereRef, camera, raycaster]
  );

//   const getCameraDirection = useCallback(() => {
//     const direction = new Vector3();
//     camera.getWorldDirection(direction);
    
//     console.log('Camera is looking toward:', direction);
//     // direction is a normalized vector pointing where camera looks
//     // Example output: { x: 0.5, y: -0.3, z: -0.8 }
    
//     return direction;
//   }, [camera]);

//   getCameraDirection()

  return (
    <RigidBody
      mass={5}
      ref={sphereRef}
      name="esphereRB"
      type="dynamic" // Fixed typo: was "dinamic"
      colliders="ball"
      friction={0}
      {...props}

      onCollisionEnter={({manifold,target,other})=>{
        if(other.rigidBodyObject){

          // console.log(target.rigidBodyObject.name,"collided whit",other.rigidBodyObject.name)
          const othername=other.rigidBodyObject.name

          if (othername==='SphereFloorRB'){
            setCountCollisions(0);
          }

          // console.log('Coliciono con ',othername)
          setCollide(othername)
          

        }
      }}
      // onCollisionExit={()=>console.log("sphere collision exit")}
    
    >
      <mesh onClick={handleEsphere}>
        <sphereGeometry args={[5, 32]} />
        <meshStandardMaterial color={color}/>
      </mesh>
    </RigidBody>
  );
};

export default Esphere;
