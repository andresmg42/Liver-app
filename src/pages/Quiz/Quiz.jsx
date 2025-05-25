import { Canvas,useThree } from "@react-three/fiber";
import RoomStaging from "./staging/RoomStaging";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Bird } from "./models/avatars/Bird";
import GenericFloor from "./models/floor/GenericFloor";
import BattleFIeld from "./BattleFIeld";
import { useEventStore } from "../../stores/use-auth-store";

const Quiz = () => {
  const {setClick}=useEventStore();
  
  return (
    <div className="fixed top-0 left-0 w-full h-full object-cover  Z-0">
      <Canvas
       onPointerDown={() => {
          setClick(true);
        }}
        onPointerUp={() => {
          setClick(false);
        }}

        // camera={{
        //   position:[0,30,0],
           
        
        // }}
        
      >
        <OrbitControls
        // target={[0, 30, 0]}
        />
        <RoomStaging />

        <BattleFIeld/>
        
      </Canvas>
    </div>
  );
};

export default Quiz;
