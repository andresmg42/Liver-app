import React from 'react'
import { Text } from '@react-three/drei'
const Description = ({title,position}) => {
  return (
    <Text
        position={position}
        color={'white'}
        anchorX={'center'}
        anchorY={'middle'}
        fontSize={0.1}
    >
        {title}
        


    </Text>
  )
}

export default Description