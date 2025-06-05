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
      className={`bg-black/50 p-5 gap-2 rounded-xl shadow-xl w-full transition-all duration-500 
            flex flex-col  `}
      >
        <h1 className='font-bold text-xl' style={{color:color}}>{`Question: ${index}`}</h1>

        <img src={image} alt={title}/>

        <div className='bg-white/15 p-4 rounded-lg'>
          <p className='text-md mt-4 font-bold ' style={{color:color}}> {title}</p>

        </div>
        
        <div>
          <h1 className='text-2xl font-bold' style={{color:color}}>
            {`Score:${progress.total_score}`}
          </h1>
          <h1 id='display' className='font-bold' style={{color:color}}>00:00</h1>
          
        </div>

       


        
        
      </div>

    </div>
  )
}

export default QuestionsInterfaz