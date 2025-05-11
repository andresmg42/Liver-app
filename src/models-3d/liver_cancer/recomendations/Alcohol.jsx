import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export function Alcohol(props) {
  const { nodes, materials } = useGLTF('/models/liver_cancer/recomendations/alcohol.glb')
  const alcoholRef=useRef();
    
const handleKey = (e) => {
    

    switch (e.key) {
      case "w":
        alcoholRef.current.rotation.x -= 0.05;
        break;

      case "s":
        alcoholRef.current.rotation.x += 0.05;
        break;

      case "a":
        alcoholRef.current.rotation.y -= 0.05;
        break;

      case "d":
        alcoholRef.current.rotation.y += 0.05;
        break;

      default:
        break;
    }
  };

  if (props.home) {
    useFrame((state, delta) => {
      alcoholRef.current.rotation.y += 1 * delta;
    });
  } else {
    useEffect(() => {
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }, []);
  }

  return (
    <group {...props} dispose={null} ref={alcoholRef}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Alcohol_1.geometry}
      material={materials.LavelMaterial2}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Alcohol_2.geometry}
      material={materials.GlassMaterial}
    />
  </group>
  )
}

useGLTF.preload('/models/liver_cancer/recomendations/alcohol.glb')