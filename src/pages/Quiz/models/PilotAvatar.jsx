import React, { useCallback, useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { CuboidCollider } from '@react-three/rapier'

export function PilotAvatar(props) {
  const group = useRef()
  const pilotRef= useRef();
  const { nodes, materials, animations } = useGLTF('models/quiz/pilot_avatar.glb')
  const { actions } = useAnimations(animations, group)


  useEffect(()=>{
    // console.log('actions: ',actions);
    actions['Idle Loop']?.reset().fadeIn(0.5).play()

  },[actions])

const handlePilot=useCallback(
  (e)=>{
    // console.log('se hiso click')
    e.stopPropagation();
    // console.log(pilotRef.current)
    pilotRef.current.wakeUp();
    pilotRef.current.applyImpulse({x:-200,y:0,z:-50},true);
  },[pilotRef]
)

  return (
    <RigidBody
    {...props}
    name='pilotRB'
    ref={pilotRef}
    colliders='hull'
    type='dynamic'
    // colliders={false}
    mass={1}


    >
    {/* <CuboidCollider args={[0.2, 1, 0.2]} position={[0, 1, 0]} /> */}
    <group ref={group} {...props} dispose={null}  >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
          <group name="29ba07499ff34978869b44fd608274b9fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Animation" />
                <group name="Armature" scale={100}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint}  />
                    <skinnedMesh
                      onClick={handlePilot}
                      name="Object_67"
                      geometry={nodes.Object_67.geometry}
                      material={materials['Scene_-_Root']}
                      skeleton={nodes.Object_67.skeleton}
                    />
                    <group name="Object_66" scale={100} />
                  </group>
                </group>
                <group name="Pilot_Avatar" scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
      
    </group>
    </RigidBody>
  )
}

useGLTF.preload('models/quiz/pilot_avatar.glb')