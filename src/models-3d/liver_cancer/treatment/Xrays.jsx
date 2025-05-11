import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export function Xrays(props) {
  const { nodes, materials } = useGLTF('/models/liver_cancer/treatment/treatment-xrays.glb')

   const xraysRef=useRef();
   
    const handleKey = (e) => {
        
    
        switch (e.key) {
          case "w":
            xraysRef.current.rotation.x -= 0.05;
            break;
    
          case "s":
            xraysRef.current.rotation.x += 0.05;
            break;
    
          case "a":
            xraysRef.current.rotation.y -= 0.05;
            break;
    
          case "d":
            xraysRef.current.rotation.y += 0.05;
            break;
    
          default:
            break;
        }
      };
    
      if (props.home) {
        useFrame((state, delta) => {
          xraysRef.current.rotation.y += 1 * delta;
        });
      } else {
        useEffect(() => {
          window.addEventListener("keydown", handleKey);
          return () => window.removeEventListener("keydown", handleKey);
        }, []);
      }

  return (
    <group {...props} dispose={null} ref={xraysRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Xrays.geometry}
        material={materials.XraysMaterial}
        
      />
    </group>
  )
}

useGLTF.preload('/models/liver_cancer/treatment/treatment-xrays.glb')