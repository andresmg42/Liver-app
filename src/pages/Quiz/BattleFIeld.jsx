import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Bird } from "./models/avatars/Bird";
import GenericFloor from "./models/floor/GenericFloor";
import BattelFloor from "./models/floor/BattelFloor";
import Dron from "./models/avatars/Dron";
import HtmlQuestions from "./questions/HtmlQustions";
import api from "../../api/user.api";
import { useState } from "react";

import { Float } from "@react-three/drei";
import Esphere from "./models/simpleobjects/Esphere";
import { Text3D } from "@react-three/drei";
import OptionsText from "./models/text/OptionsText";
import { Eye } from "./models/avatars/Eye";
import RareHuman from "./models/avatars/RareHuman";

const BattleFIeld = () => {
  

  return (
    <Physics gravity={[0, -9.8, 0]}  >
      
        <group position={[-150, 0, 0]}>
          <Float speed={5}>
          <OptionsText position={[0,30,0]} size={7} text={'LIVER CANCER'} color={'black'} rotation={[0, Math.PI / 2, 0]}/>
          </Float>
          <Bird scale={0.3} />
          {/* <HtmlQuestions sections={quiz.sections[0]} quiz_id={quiz._id} scale={5} position={[0,10,0]} transform color={'white'} rotation={[0, Math.PI / 2, 0]} /> */}
          <GenericFloor
            position={[-20, 0, 0]}
            geometry={{
              args: [70, 70],
            }}
            meshM={{
              transparent: true,
              opacity: 0,
              // color:'white'
            }}

            name='cancerFloor'
          />
        </group>


       
        <group position={[0, -10, 150]}>
          <Float speed={5}>
          <OptionsText position={[0,50,0]} size={7} text={'SYMPTOMS'} color={'black'} rotation={[0,Math.PI,0]}/>
          </Float>

           <RareHuman scale={6}  />

         
          {/* <GenericFloor
            position={[0, -10, 0]}
            geometry={{
              args: [40, 40],
            }}
            meshM={{
              transparent: true,
              opacity: 0,
              color:'white'
            }}
          /> */}
        </group>

         <group position={[150, 0, 0]} >
          <Float speed={5}>
          <OptionsText position={[0,30,0]} size={7} text={'TREATMENT'} color={'black'} rotation={[0, -Math.PI / 2, 0]}/>
          </Float>

          <Eye scale={2.5} />
         
          <GenericFloor
            position={[0, -10, 0]}
            geometry={{
              args: [40, 40],
            }}
            meshM={{
              transparent: true,
              opacity: 0,
              color:'white'
            }}

            name='treatmentFloor'
          />
        </group>


      
      
      
      <Esphere position={[0, 10, 0]} />
      <GenericFloor
        position={[0, -10, 0]}
        geometry={{
          args: [10, 10],
        }}
        meshM={{
          transparent: true,
          opacity: 0,
          // color: "white",
        }}

        name='SphereFloorRB'
      />

      {/* Bird Floor */}
      <BattelFloor
        position={[0, -30, 0]}
        geometry={{
          args: [400, 400],
        }}
      />

    
      <group position={[0, 0, -50]}>
        <Float speed={5}>
          <OptionsText position={[0,15,-50]} size={7} text={'RECOMENDATIONS'} color={'black'}/>
        </Float>
        <Dron scale={4} position={[0, 20, -12]} />
      </group>
      

      <GenericFloor
        position={[0, -500, 0]}
        geometry={{
          args: [4000, 3000],
        }}
        meshM={{
          transparent: true,
          opacity: 0,
        }}

        name='StagingFloorRB'
      />
    </Physics>
  );
};

export default BattleFIeld;
