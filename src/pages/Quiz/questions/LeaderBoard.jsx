import React, { useEffect } from "react";
import { useState } from "react";
import { loadLeaderBoard } from "../services/services";

const LeaderBoard = () => {
  const [leaderBoard, setLeaderBoard] = useState([]);

  useEffect(() => {
    async function loadLB() {
      const board = await loadLeaderBoard();
      setLeaderBoard(board);
      console.log("leader board loaded in front:", board);
    }
    loadLB();
  }, []);

  if (leaderBoard.length === 0)
    return (
      <div className="z-10">
        <h1 className="text-xl text-white font-bold">
          Loading Leader Board ...
        </h1>
      </div>
    );

  return (
    <div className="items-center  gap-8 md:w-[70vh] md:h-[70vh]  w-[45vh]  mx-auto px-4 relative bg-black/50 rounded-lg z-10">
      <div className="flex flex-col gap-4 p-4">
        {leaderBoard.map((b, index) => (
          <div
            key={index}
            className="bg-black/70 rounded-lg p-4 border border-gray-600 "
          >
            <ul className="text-left space-y-2 text-white">
              <li className="flex jutify-between items-center">
                <span className="text-gray-300">Username:</span>
                <span className="font-semibold">{b.username}</span>
              </li>
              <li className="flex jutify-between items-center">
                <span className="text-gray-300">Score:</span>
                <span className="font-bold text-yellow-400">{b.score}</span>
              </li>
              <li className="flex jutify-between items-center">
                <span className="text-gray-300">Rank:</span>
                <span className="font-bold text-blue-400">{b.rank}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
