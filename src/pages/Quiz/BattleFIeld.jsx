import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Bird } from "./models/avatars/Bird";
import GenericFloor from "./models/GenericFloor";
import BattelFloor from "./models/floor/BattelFloor";
import Dron from "./models/avatars/Dron";



const BattleFIeld = () => {

    const {camera}=useThree();

  useEffect(()=>{

    camera.position.set(60,40,0)
    camera.lookAt(0,0,0)
  },[])

  

  return (
    <Physics  gravity={[0,-9.8,0]}>


          <group position={[0,0,0]} >

            <Bird scale={0.3} position={[-50,0,0]}/>

          {/* Bird Floor */}
          <BattelFloor
          geometry={{
            args:[200,200]
          }}
          />

          <Dron scale={4} position={[0,20,-12]}/>

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