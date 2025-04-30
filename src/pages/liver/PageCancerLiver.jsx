import React, { useEffect } from 'react'
import CancerLiverCard from '../../models-3d/liver_cancer/desease/cards/desease/cancer/CancerLiverCard'
import CancerLiverInPage from '../../models-3d/liver_cancer/desease/cards/desease/cancer/CancerLiverInPage'
import { useLocation } from 'react-router'

const PageCancerLiver = () => {

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
  {/* Background Video */}
  <video 
    autoPlay 
    loop 
    muted 
    playsInline 
    className="fixed top-0 left-0 w-full h-full object-cover -z-10"
  >
    <source src='videos/login.mp4' type="video/mp4" />
  </video>

  {/* Main Content Container */}
  <div className="container mx-auto  pt-8 relative z-10">
    {/* Page Header */}
    <header className="mb-8 text-center">
      <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
        Liver Cancer Information
      </h1>
    </header>

    {/* Single Column Cards Container */}
    <div className="flex flex-col items-center gap-8 max-w-lg mx-auto px-4">
      
      {/* Liver Cancer Card */}
      <div className="bg-white/15 p-5 rounded-xl shadow-xl w-full">
        <h2 className="text-white text-xl font-semibold text-center mb-3">Liver Cancer</h2>
        <p className="text-white text-sm md:text-base">
          Liver cancer is an abnormal growth of cells in the liver that forms a tumor. 
          It can originate in the liver (primary cancer) or spread from other parts of 
          the body (secondary cancer). It is more common in people with chronic liver 
          diseases such as hepatitis or cirrhosis. Liver cancer can cause loss of appetite, 
          fatigue, abdominal pain, jaundice (yellowing of the skin and eyes), and weight loss. 
          As it progresses, it affects liver function and can lead to liver failure.
        </p>
      </div>

      {/* Causes Card */}
      <div className="bg-white/15 p-5 rounded-xl shadow-xl w-full backdrop-blur-sm">
        <h2 className="text-white text-xl font-semibold text-center mb-3">Causes</h2>
        <p className="text-white text-sm md:text-base">
          Causes of liver cancer include primarily chronic hepatitis B or C infections,
          which can cause inflammation and prolonged cell damage. Excessive alcohol 
          consumption and the resulting cirrhosis are also important risk factors, 
          as is exposure to aflatoxins, toxins produced by fungi in foods stored 
          under improper conditions. In addition, genetic factors and some metabolic 
          diseases can contribute to the development of this type of cancer.
        </p>
      </div>
    </div>

    {/* Cancer Liver In Page Component */}
    
  </div>
  <div className="w-full  h-[50vh] md:h-screen mt-10">
      <CancerLiverInPage />
    </div>
</div>
        
        
        
  )
}

export default PageCancerLiver