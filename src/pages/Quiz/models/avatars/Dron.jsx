import { meshBounds, useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { useCallback } from "react";

const Dron = (props) => {
  const dronRef = useRef();

  const group = useRef();

  const {scene,nodes,materials,animations} = useGLTF("models/quiz/buster_drone.glb");
  

  const { actions } = useAnimations(animations, group);

  useEffect(()=>{
    // console.log('actions',actions)
     actions['Start_Liftoff']?.reset().fadeIn(0.5).play()
  },[actions])


  // const handleDron=useCallback(
  //     (e)=>{
  //       // console.log('se hiso click')
  //       e.stopPropagation();
  //       // console.log(pilotRef.current)
  //       dronRef.current.wakeUp();
  //       dronRef.current.applyImpulse({x:0,y:0,z:-500000},true);
  //     },[dronRef]
  //   )

  return (
    <RigidBody
      {...props}
      name="recomendations"
      ref={dronRef}
      colliders='cuboid'
      type="dinamic"
      mass={0.01}
    >
      <group ref={group} >
        <mesh {...props}>
          <primitive object={scene} />
        </mesh>
      </group>
    </RigidBody>
  );
};

export default Dron;

useGLTF.preload("models/quiz/buster_drone.glb");
