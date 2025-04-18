import React, { useEffect } from 'react'
import CancerLiverCard from '../../models-3d/liver_cancer/desease/cards/desease/cancer/CancerLiverCard'
import CancerLiverInPage from '../../models-3d/liver_cancer/desease/cards/desease/cancer/CancerLiverInPage'
import { useLocation } from 'react-router'

const PageCancerLiver = () => {

  return (
    <div className='w-full h-[100vh]'>

<video autoPlay loop muted playsInline className="fixed top-0 left-0  w-full h-full object-cover -z-10">
                <source src='videos/login.mp4' type="video/mp4" />
            </video>

<div className="bg-black/50 p-4 rounded-xl shadow-xl w-[40vh] h-[70vh]  
flex-col justify-center items-center z-20 absolute top-[20vh] left-[35vh]">
    <h1 className="text-white text-md center">Liver Cancer</h1>
    <p className="text-white text-sm text-left">
    Liver cancer is an abnormal growth of cells 
in the liver that forms a tumor.It can originate
in the liver (primary cancer) or spread from other 
parts of the body (secondary cancer). It is more common 
in people with chronic liver diseases such as hepatitis 
or cirrhosis. Liver cancer can cause loss of appetite,
fatigue, abdominal pain, jaundice 
(yellowing of the skin and eyes), and weight loss.
As it progresses, it affects liver function and 
can lead to liver failure.
    </p>

    </div>

    <div className="bg-white/15 p-4 rounded-xl shadow-xl w-[40vh] h-[70vh]  
flex-col justify-center items-center z-20 absolute top-[20vh] right-[35vh]">
    <h1 className="text-white text-md center">Causes</h1>
    <p className="text-white text-sm text-left">
    Causes of liver cancer include primarily 
chronic hepatitis B or C infections, 
which can cause inflammation and prolonged cell 
damage.Excessive alcohol consumption and the 
resulting cirrhosis are also important risk 
factors,as is exposure to aflatoxins,toxins produced 
by fungi in foods stored under improper conditions.
In addition,genetic factors and some metabolic 
diseases can contribute to the development of 
this type of cancer.
    </p>

    </div>


      

            <div className=' w-full h-full z-10'>
            <CancerLiverInPage />

            </div>
      
    </div>
        
        
        
  )
}

export default PageCancerLiver