import { create } from "zustand";
import {
  loadLeaderBoard,
  sendLeaderBoard,
  sendProgress,
} from "../pages/Quiz/services/services";
import {  Chronometer } from "../pages/Quiz/services/chronometer";

const useQuizStore = create((set) => {
  const zones = ["symptoms", "cancer", "treatment", "recomendations"];

  const chronometer=new Chronometer();

  

  return {
    index: 0,
    chronometer:chronometer,
    color: "white",
    countCollisions: 0,
    quiz: null,
    name: null,
    timer:0,
    info:true,
    quizloaded:false,
    progress: {
      user_id: null,
      quiz_id: null,
      answers: [],
      total_score: 0,
      completed: false,
      last_updataed: Date.now(),
      timer:0
    },
    setInfo:(info)=>set({info:info}),
    setTimer:(timer)=>set({timer:timer}),
    setName: (name) => set({ name: name }),
    setQuiz: (quiz) => set({ quiz: quiz }),
    setCountCollisions: (countCollisions) =>
      set({ countCollisions: countCollisions }),
    setIndex: (index) => set({ index: index }),
    setColor: (color) => set({ color: color }),
    // setProgress: (progress) => set((state)=>({ progress: {...state.progress,...progress }})),
    setProgress:(progress)=>set({progress:progress}),
    setCollide: (name) => {
      if (!zones.includes(name)) return;

      set((state) => {
        const newCount = state.countCollisions + 1;

        if (
          newCount > 1 ||
          !state.quiz ||
          !state.quiz.questions ||
          state.progress.completed
        )
          return state;

        const actualQuestion = state.quiz.questions[state.index];
        const actualScore = state.progress.total_score;
        const newAnswer = {
          question_id: actualQuestion._id,
          zone: name,
          correct: name === actualQuestion.zone,
        };

        const score = actualScore + (newAnswer.correct ? 1 : -1);

        const total_score = Math.max(0, score);

        const completed = state.index + 1 === state.quiz.questions.length;

        const timer=state.timer;

        const newProgress = {
          ...state.progress,
          answers: [...state.progress.answers, newAnswer],
          total_score,
          completed,
          timer
          
          
          
        };

        // console.log('newProgresstosend:',newProgress)

        async function sendProgressAndLeader() {
          await sendProgress(newProgress);

          if (newProgress.completed)
            await sendLeaderBoard(newProgress.quiz_id, newProgress.user_id);
        }

        sendProgressAndLeader();

        return {
          countCollisions: newCount,
          index: !newProgress.completed ? state.index + 1 : state.index,
          progress: newProgress,
        };
      });
    },
  };
});

export default useQuizStore;
