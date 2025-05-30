import React, { useEffect } from 'react'
import { questions } from './questions'
import { useState } from 'react';
import useQuizStore from '../../../stores/useQuizStore';
const QuestionsInterfaz = (props) => {



const {index,setColor,quiz}=useQuizStore();

const  {color,image,title}=quiz.questions[index];


  

  

  useEffect(()=>{
    console.log('index',index)
    
    setColor(color)
  },[index])


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


        
        
      </div>

    </div>
  )
}

export default QuestionsInterfaz