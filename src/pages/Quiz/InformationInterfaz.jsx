import React from 'react'
import useQuizStore from '../../stores/useQuizStore'

const InformationInterfaz = () => {
    const {setInfo,chronometer,progress,setTimer}=useQuizStore();

    const handleStart=()=>{
        setInfo(false)
        chronometer.setTimerChrono(setTimer);
        chronometer.stopChrono();
        chronometer.setStartTime(Date.now()-progress.timer);
        chronometer.startChrono()

    }

  return (
    <div className="items-center flex flex-col py-4 gap-8 md:w-[70vh] min-h-[30vh] max-h-[80vh] w-[45vh]  mx-auto px-4 relative bg-black/50 rounded-lg z-10">
Information Interfaz

<button className='bg-white/50 hover:bg-black px-4 py-2 rounded-full text-white font-bold my-3'
onClick={handleStart}
>
    Start
</button>

    </div>
  )
}

export default InformationInterfaz