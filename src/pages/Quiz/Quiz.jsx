import { Canvas,useThree } from "@react-three/fiber";
import RoomStaging from "./staging/RoomStaging";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Floor from "./models/Floor";
import { Bird } from "./models/Bird";
import GenericFloor from "./models/GenericFloor";
import BattleFIeld from "./BattleFIeld";


const Quiz = () => {
  
  return (
    <div className="fixed top-0 left-0 w-full h-full object-cover  Z-0">
      <Canvas >
        <OrbitControls />
        <RoomStaging />

        <BattleFIeld/>
        
      </Canvas>
    </div>
  );
};

export default Quiz;
