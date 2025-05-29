import { meshBounds, useAnimations, useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { useCallback } from "react";

const RareHuman = (props) => {
  const dronRef = useRef();

  const group = useRef();

  const {scene,nodes,materials,animations} = useGLTF("models/quiz/rareh.glb");
  

  const { actions } = useAnimations(animations, group);

  useEffect(()=>{
    // console.log('actions',actions)
    actions['anim']?.reset().fadeIn(0.5).play()
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
      name="symptoms"
      ref={dronRef}
      colliders='cuboid'
      type="dinamic"
      mass={0.01}
    >
       
      <group ref={group} rotation={[0,Math.PI,0]} >
        <mesh {...props}>
          <primitive object={scene} />
        </mesh>
         {/* <CuboidCollider 
         args={[3,10,2]}
         position={[0,0,0]}
         rotation={[0,2*Math.PI,0]}
         /> */}
      </group>
    </RigidBody>
  );
};

export default RareHuman;

useGLTF.preload("models/quiz/rareh.glb");
