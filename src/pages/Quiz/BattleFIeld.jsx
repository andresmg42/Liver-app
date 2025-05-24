import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Bird } from "./models/Bird";
import GenericFloor from "./models/GenericFloor";



const BattleFIeld = () => {

    const {camera}=useThree();

  useEffect(()=>{

    camera.position.set(60,40,0)
    camera.lookAt(0,0,0)
  },[])

  return (
    <Physics debug gravity={[0,-9.8,0]}>


          <group position={[0,0,0]} >

            <Bird scale={0.2}/>

          {/* Bird Floor */}
          <GenericFloor

            geometry={{
              args: [30, 30],
            }}
            meshM={{
              // transparent: true,
              // opacity: 0,
              color:'white'

            }}
          />
          </group>
          
          


          <GenericFloor

          position={[0,-500,0]}
            
            geometry={{
              args: [4000, 3000],
            }}
            meshM={{
              transparent: true,
              opacity: 0,
              
            }}
          />

          
        </Physics>
  )
}

export default BattleFIeld