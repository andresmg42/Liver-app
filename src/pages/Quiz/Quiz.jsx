import { Canvas, useThree } from "@react-three/fiber";
import RoomStaging from "./staging/RoomStaging";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Bird } from "./models/avatars/Bird";
import GenericFloor from "./models/floor/GenericFloor";
import BattleFIeld from "./BattleFIeld";
import { useEventStore } from "../../stores/use-auth-store";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import QuestionsInterfaz from "./questions/QuestionsInterfaz";

const Quiz = () => {
  const { setClick } = useEventStore();

  const { userLooged } = useAuthStore();

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!userLooged) {
  //     navigate("/login");
  //     return;
  //   }
  // }, [userLooged]);

  return (
    <>
     <QuestionsInterfaz/>
    <div className="fixed top-0 left-0 w-full h-full object-cover  Z-0">
     
      <Canvas
        onPointerDown={() => {
          setClick(true);
        }}
        onPointerUp={() => {
          setClick(false);
        }}

        camera={{position:[-50,20,0]}}
      >
        <OrbitControls />
        <RoomStaging />

        <BattleFIeld />
      </Canvas>
    </div>
    </>
  );
};

export default Quiz;
