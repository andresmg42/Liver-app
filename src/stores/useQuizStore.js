import { create } from "zustand";
import {
  loadLeaderBoard,
  sendLeaderBoard,
  sendProgress,
} from "../pages/Quiz/services/services";
import LeaderBoard from "../pages/Quiz/questions/LeaderBoard";

const useQuizStore = create((set) => {
  const zones = ["symptoms", "cancer", "treatment", "recomendations"];

  return {
    index: 0,
    color: "white",
    countCollisions: 0,
    quiz: null,
    name: null,
    progress: {
      user_id: null,
      quiz_id: null,
      answers: [],
      total_score: 0,
      completed: false,
      last_updataed: Date.now(),
    },
    setLeaderBoard: (leaderboard) => set({ leaderboard: leaderboard }),
    setName: (name) => set({ name: name }),
    setQuiz: (quiz) => set({ quiz: quiz }),
    setCountCollisions: (countCollisions) =>
      set({ countCollisions: countCollisions }),
    setIndex: (index) => set({ index: index }),
    setColor: (color) => set({ color: color }),
    setProgress: (progress) => set({ progress: progress }),
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

        const newProgress = {
          ...state.progress,
          answers: [...state.progress.answers, newAnswer],
          total_score,
          completed,
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
