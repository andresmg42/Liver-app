import { Canvas } from "@react-three/fiber";
import RoomStaging from "./staging/RoomStaging";
import { OrbitControls } from "@react-three/drei";
import BattleFIeld from "./BattleFIeld";
import { useEventStore } from "../../stores/use-auth-store";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import QuestionsInterfaz from "./questions/QuestionsInterfaz";
import { useState } from "react";
import api from "../../api/user.api";
import useQuizStore from "../../stores/useQuizStore";

const Quiz = () => {
  const { setClick } = useEventStore();

  const { userLooged } = useAuthStore();

  const {quiz,setQuiz}=useQuizStore()

  const navigate = useNavigate();

  useEffect(() => {
    if (!userLooged) {
      navigate("/login");
      return;
    }

    async function loadQuiz(){
        try {

          const res= await api.get('/quiz/')
          console.log('quiz:',res.data[0])

          setQuiz(res.data[0])

        } catch (error) {

          console.Error('error cargando quiz: ',error)

        }
      }

      loadQuiz();
  }, []);


    if(!quiz){
      return <div><h1 className="text-3xl font-bold text-white">Loading Quiz...</h1></div>;
    }

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
