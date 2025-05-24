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
          {/* <PilotAvatar scale={15} position={[0,-25,-40]}/> */}
          <Bird scale={0.1} />

          {/* Bird Floor */}
          <GenericFloor
            cuboid={{
              args: [10, 0.2, 10],
              position: [0, 0, 0],
            }}
            mesh={{
              position: [0, 0, 0],
            }}
            geometry={{
              args: [10, 10],
            }}
            meshM={{
              transparent: true,
              opacity: 0,
            }}
          />

          {/* Room Floor */}

          <GenericFloor
            cuboid={{
              args: [4000, 0.2, 3000],
              position: [0, -500, 0],
            }}
            mesh={{
              position: [0, -500, 0],
            }}
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
