import React, { useEffect } from 'react'
import { questions } from './questions'
import { useState } from 'react';
import useQuizStore from '../../../stores/useQuizStore';
import { sendProgress } from '../services/services';
const QuestionsInterfaz = (props) => {



const {index,setColor,quiz,progress,setProgress,setIndex,timer,setTimer}=useQuizStore();


const  {color,image,title}=quiz.questions[index];




  

  useEffect(()=>{
    
    
    setColor(color)
  },[index])

  

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
    <div
     className={`items-center  gap-8 md:w-[40vh]  w-[45vh]  mx-auto px-4 relative ml-5   z-10`}
    >
      <div
      className={`bg-black/50 p-5 rounded-xl shadow-xl w-full transition-all duration-500 
           h-[30vh] md:h-[50vh] overflow-y-auto `}
      >
        <h1>{`${index}`}</h1>

        <img src={image} alt={title}/>
        <h1 className='text-md mt-10 ' style={{color:color}}> {title}</h1>
        <div>
          <h1 className='text-2xl font-bold' style={{color:color}}>
            {`Score:${progress.total_score}`}
          </h1>
          <h1 id='display'>00:00</h1>
          
        </div>

       


        
        
      </div>

    </div>
  )
}

export default QuestionsInterfaz