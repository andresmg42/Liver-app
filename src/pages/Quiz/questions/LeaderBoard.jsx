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
  const [leaderBoard, setLeaderBoard] = useState([]);

  const {setIndex,setProgress,quiz,progress}=useQuizStore();

  const models=[
    <FirstMedal  scale={3.5}/>,
    <SecondMedal  scale={3.5}/>,
    <ThirdMedal  scale={3.5}/>

  ]

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


    const handleTryAgain=async ()=>{
       const newProgress= {
                user_id:localStorage.getItem('user_id'),
                quiz_id:quiz._id,
                answers:[],
                total_score:0,
                completed:false,
                last_updataed:Date.now()
    
            }
    
            setIndex(0)
            
            await sendProgress(newProgress)
    
            setProgress(newProgress)
    
    
      }

  return (
    <div className="items-center  gap-8 md:w-[70vh] min-h-[30vh] max-h-[80vh] w-[45vh]  mx-auto px-4 relative bg-black/50 rounded-lg z-10">
      <div className="flex flex-col gap-4 p-4 overflow-y-auto">
        {leaderBoard.map((b, index) => (
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
                <span className="font-bold text-blue-400">{b.rank}</span>
              </li>
            </ul>
            {/* thirdMedal */}
            <div  className=" ml-4 flex-shrink-0 w-20 h-20 md:w-60 md:h-40 flex items-center justify-center averflow-hidden"><GenericMedal model={models[index]}/></div>
          </div>
        ))}

        {/* Try button */}
        
          
         
          
        

      </div>
       <button 
          className="bg-white/50 hover:bg-black text-white font-bold py-2 px-4 rounded-full mt-3 mb-3"
          onClick={handleTryAgain}
          >
            Try Again
          </button>
    </div>
  );
};

export default LeaderBoard;
