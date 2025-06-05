import React, { useEffect } from "react";
import { useState } from "react";
import { loadLeaderBoard } from "../services/services";
import GenericMedal from "../medals/GenericMedal";
import { ThirdMedal } from "../medals/ThirdMedal";
import { FirstMedal } from "../medals/FirstMedal";
import { SecondMedal } from "../medals/SecondMedal";
import useQuizStore from "../../../stores/useQuizStore";
import { sendProgress } from "../services/services";

const LeaderBoard = () => {
  const [leaderboard, setLeaderboard] = useState();

  const [feedback, setFeedback] = useState(false);

  const { setIndex, setProgress, quiz, progress,chronometer } = useQuizStore();

  const { answers } = progress;

  const { questions } = quiz;

  const models = [
    <FirstMedal scale={3.2} />,
    <SecondMedal scale={3.5} />,
    <ThirdMedal scale={3.8} />,
  ];

  useEffect(() => {
    async function loadLB() {
      await new Promise((resolve) => setTimeout(resolve, 300));

      const board = await loadLeaderBoard();
      setLeaderboard(board);
      console.log("leader board loaded in front:", board);
    }
    loadLB();
  }, []);

  if (!leaderboard)
    return (
      <div className="z-10">
        <h1 className="text-xl text-white font-bold">
          Loading Leader Board ...
        </h1>
      </div>
    );

  const handleTryAgain = async () => {
    const newProgress = {
      user_id: localStorage.getItem("user_id"),
      quiz_id: quiz._id,
      answers: [],
      total_score: 0,
      completed: false,
      timer:0,
      last_updataed: Date.now(),
    };

    setIndex(0);

    await sendProgress(newProgress);

    setProgress(newProgress);

    chronometer.stopChrono();
    chronometer.setStartTime(Date.now())
    chronometer.startChrono();


  };

  return (
    <div className="items-center  gap-8 md:w-[70vh] min-h-[30vh] max-h-[80vh] w-[45vh]  mx-auto px-4 relative bg-black/50 rounded-lg z-10">
      <div className="flex flex-col gap-4 p-4 overflow-y-auto">
        {feedback && (
          <table className="min-w-full shadow-md rounded-lg overflow-hidden">
            <thead className="text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Question
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  your Answer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Correct Answer
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white">
              {answers.map((a, index) => (
                <tr key={index} className="hover:bg-white/15 transition-colors">
                  <td className="px-6 py-4 ">{questions[index].title}</td>
                  <td
                    className="px-6 py-4 whitespace-nowrap"
                    style={
                      questions[index].zone === a.zone
                        ? { color: "white" }
                        : { color: "red" }
                    }
                  >
                    {a.zone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {questions[index].zone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!feedback &&
          leaderboard
            .sort((l) => l.score)
            .map((b, index) => (
              <div
                key={index}
                className="flex items-center justify-between  bg-black/70 rounded-lg p-4 border border-gray-600 "
              >
                <ul className="text-left space-y-2 text-white">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300">Username:</span>
                    <span className="font-semibold">{b.username}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300">Score:</span>
                    <span className="font-bold text-yellow-400">{b.score}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300">Rank:</span>
                    <span className="font-bold text-blue-400">{index + 1}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-300">Time:</span>
                    <span className="font-bold text-blue-400">{b.time}</span>
                  </li>
                </ul>
                {/* thirdMedal */}
                {index < 3 && (
                  <div className=" ml-4 flex-shrink-0 w-20 h-20 md:w-60 md:h-40 flex items-center justify-center averflow-hidden">
                    <GenericMedal model={models[index]} />
                  </div>
                )}
              </div>
            ))}

        {/* Try button */}
      </div>
      <div className="flex relative justify-center items-center gap-2">
        <button
          className="bg-white/50 hover:bg-black text-white font-bold py-2 px-4 rounded-full mt-3 mb-3"
          onClick={handleTryAgain}
        >
          Try Again
        </button>

        {!feedback ? (
          <button
            className="bg-white/50 hover:bg-black text-white font-bold py-2 px-4 rounded-full mt-3 mb-3"
            onClick={() => setFeedback(true)}
          >
            Feedback
          </button>
        ) : (
          <button
            className="bg-white/50 hover:bg-black text-white font-bold py-2 px-4 rounded-full mt-3 mb-3"
            onClick={() => setFeedback(false)}
          >
            Leaderboard
          </button>
        )}
      </div>
    </div>
  );
};

export default LeaderBoard;
