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
      <CancerLiverInPage />
    </div>
        
        
        
  )
}

export default PageCancerLiver