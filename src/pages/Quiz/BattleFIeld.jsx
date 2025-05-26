import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Bird } from "./models/avatars/Bird";
import GenericFloor from "./models/floor/GenericFloor";
import BattelFloor from "./models/floor/BattelFloor";
import Dron from "./models/avatars/Dron";
import HtmlQuestions from "./questions/HtmlQustions";
import {cards} from './questions'
import api from "../../api/user.api";
import { useState } from "react";
import {  Text } from "@react-three/drei"


const BattleFIeld = () => {

  const [quiz,setQuiz]=useState(null)

  
    useEffect( ()=>{

      async function loadQuiz(){
        try {

          const res= await api.get('/quiz/')
          console.log(res.data[0])
        
          setQuiz(res.data[0])
          
        } catch (error) {

          console.Error('error cargando quiz: ',error)
          
        }
      }

      loadQuiz();

      

    },[])

    if(!quiz){
      return (<Text
      position={[0,0,0]}
      color={'white'}
      anchorX={'center'}
      anchorY={'middle'}
      fontSize={0.8}
      fontStyle='bold'
      font="fonts\OpenSans-Bold.ttf"
      >Loading Qui...</Text>);
    }





  

  return (
    <Physics  gravity={[0,-9.8,0]}>


          
          <group position={[-100,0,0]}>

            <Bird scale={0.3} />
           <HtmlQuestions sections={quiz.sections[0]} quiz_id={quiz._id} scale={5} position={[0,10,0]} transform color={'white'} rotation={[0, Math.PI / 2, 0]} />


          </group>
          

          {/* Bird Floor */}
          <BattelFloor

          position={[0,-30,0]}
          geometry={{
            args:[400,400]
          }}
          />
          <group  position={[0,0,-50]} >
          <Dron scale={4} position={[0,20,-12]}/>
          </group>

         
          
         


          <GenericFloor

          position={[0,-500,0]}
            
            geometry={{
              args: [4000, 3000],
            }}
            meshM={{
              transparent: true,
              opacity: 0,
              
            }}
          />

          
        </Physics>
  )
}

export default BattleFIeld