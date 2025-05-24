import { Canvas } from "@react-three/fiber";
import RoomStaging from "./staging/RoomStaging";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Floor from "./models/Floor";
import { Bird } from "./models/Bird";
import GenericFloor from "./models/GenericFloor";

const Quiz = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full object-cover  Z-0">
      <Canvas>
        <OrbitControls />
        <RoomStaging />

        <Physics debug gravity={[0,-9.8,0]}>


          <group >

            <Bird scale={0.2}
          
          // position={[-100,0,0]}
          
          />

          {/* Bird Floor */}
          <GenericFloor

          //  position={[-100,0,0]}
            
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
          
          

          {/* Room Floor */}

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

          {/* <Floor/> */}
        </Physics>
      </Canvas>
    </div>
  );
};

export default Quiz;
