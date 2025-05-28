import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
import { RigidBody } from '@react-three/rapier'
import { useCallback } from 'react'

export function Bird(props) {
  const group = useRef()

  const birdRef=useRef();

  const { nodes, materials, animations } = useGLTF('models/quiz/phoenix_bird.glb')
  const { actions } = useAnimations(animations, group)


 useEffect(()=>{
    // console.log('actions: ',actions);
    actions['Take 001']?.reset().fadeIn(0.5).play()

  },[actions])

 

  return (
     <RigidBody
        {...props}
        name='pilotRB'
        ref={birdRef}
        colliders='hull'
        type='dynamic'
        // colliders={false}
        mass={0.01}
    
    
        >
    <group ref={group} {...props} dispose={null} >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-0.625, 0, -17.137]}
          rotation={[-Math.PI / 2, 0, 0.053]}>
          <group name="5f59736c86d4457fa045aec4aea6b7e0fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.MatI_Ride_FengHuang_01a}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.MatI_Ride_FengHuang_01b}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="AMesh_Ride_FengHuang_01" rotation={[-Math.PI / 2, 0, 0]} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
    </RigidBody>
  )
}

useGLTF.preload('models/quiz/phoenix_bird.glb')