import { Canvas } from "@react-three/fiber";
import RoomStaging from "./staging/RoomStaging";
import { OrbitControls } from "@react-three/drei";
import BattleFIeld from "./BattleFIeld";
import { useEventStore } from "../../stores/use-auth-store";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router";
import { useEffect,useState } from "react";
import QuestionsInterfaz from "./questions/QuestionsInterfaz";
import api from "../../api/user.api";
import useQuizStore from "../../stores/useQuizStore";
import { loadProgress } from "./services/services";
import LeaderBoard from "./questions/LeaderBoard";
import { Chronometer } from "./services/chronometer";
import InformationInterfaz from "./InformationInterfaz";

const Quiz = () => {
  const { setClick } = useEventStore();

  const { userLooged, userEmail } = useAuthStore();


  const { quiz, setQuiz, progress, setProgress, setIndex, setTimer,info,setInfo } =
    useQuizStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user_id")) {
      navigate("/login");
      return;
    }

    async function loadQuiz() {
      try {
        const res = await api.get("/quiz/");
        console.log("quiz:", res.data[0]);

        if (!res.data) return;

        setQuiz(res.data[0]);

        const resProgress = await loadProgress(
          localStorage.user_id,
          res.data[0]._id
        );

        console.log("res progress: ", resProgress);

        if (!resProgress) {
          const newProgress = {
            ...progress,
            user_id: localStorage.getItem("user_id"),
            quiz_id: res.data[0]._id,
          };

          console.log(newProgress);

          setProgress(newProgress);

          setIndex(0);
          return;
        }

        setProgress(resProgress);
        
        const nextIndex = Math.max(0, resProgress.answers.length);
        const maxIndex = res.data[0].questions.length - 1;

        const newindex = Math.min(nextIndex, maxIndex);

        setIndex(newindex);
      } catch (error) {
        console.error("Error loading quiz", error);
      }
    }
    setInfo(true)
    loadQuiz();
  }, []);

  if (!quiz) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-white">Loading Quiz...</h1>
      </div>
    );
  }

  return (
    <>
       {info && <InformationInterfaz/>}
      {progress.completed && !info && <LeaderBoard />}
      {!progress.completed && !info && <QuestionsInterfaz />}
      <div className="fixed top-0 left-0 w-full h-full object-cover  Z-0">
        <Canvas
          onPointerDown={() => {
            setClick(true);
          }}
          onPointerUp={() => {
            setClick(false);
          }}
          camera={{ position: [-50, 20, 0] }}
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
