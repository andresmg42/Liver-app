import {  Text } from "@react-three/drei"
import { Float } from '@react-three/drei'
import { useRef } from "react"
import { useFrame,useThree } from "@react-three/fiber"





const BillBoardText = () => {

  const textRef=useRef()
const {camera}=useThree()

useFrame(()=>{
  if(textRef.current){
    textRef.current.quaternion.copy(camera.quaternion)
  }
})


  return (
    
       <Float
       speed={2}
       >

        <Text
        ref={textRef}
      position={[0,3,0]}
      color={'white'}
      anchorX={'center'}
      anchorY={'middle'}
      fontSize={0.8}
      fontStyle='bold'
      font="fonts\OpenSans-Bold.ttf"
      
      
      
      >
      Human Liver
      </Text>

       </Float>   
  )
}

export default BillBoardText