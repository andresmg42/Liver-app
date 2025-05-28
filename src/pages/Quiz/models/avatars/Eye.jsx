import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function Eye(props) {
  const group = useRef()

  const eyeRef=useRef()


  const { nodes, materials, animations } = useGLTF('models/quiz/realistic_human_eye.glb')
  const { actions } = useAnimations(animations, group)

useEffect(()=>{

    actions['Animation']?.reset().fadeIn(0.5).play();

},[])


  return (
    <RigidBody
    // position={props.position}
    {...props}
      name="dronRB"
      ref={eyeRef}
      colliders='ball'
      type="dinamic"
      mass={0.01}
    
    >
    <group ref={group} {...props} dispose={null} rotation={[0,Math.PI/2,0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Eye_Baked_2" rotation={[Math.PI / 2, 0, 0]} scale={2.383}>
                <mesh
                  name="mesh_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0.geometry}
                  material={materials.Eye_Ball_Baked}
                  morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
                />
              </group>
              <group name="Cornea_3" rotation={[1.504, -0.011, 0.156]} scale={2.412}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Cornea_Baked}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
    </RigidBody>
  )
}

useGLTF.preload('models/quiz/realistic_human_eye.glb')