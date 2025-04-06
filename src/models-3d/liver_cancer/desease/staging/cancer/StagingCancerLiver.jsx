import React from 'react'
import { Environment } from '@react-three/drei'

const StagingCancerLiver = () => {
  return (
    <Environment 
      
      files={'/models/liver_cancer/desease/hdri/hospital_room_2_4k.hdr'} 
      
      // preset='apartment'
      
      background/>
  )
}

export default StagingCancerLiver