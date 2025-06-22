import { Physics } from "@react-three/rapier";
import GenericFloor from "./models/floor/GenericFloor";
import BattelFloor from "./models/floor/BattelFloor";
import { Float } from "@react-three/drei";
import Esphere from "./models/simpleobjects/Esphere";
import OptionsText from "./models/text/OptionsText";
import GenericTarget from "./models/avatars/GenericTarget";
import CircleTarget from "./models/avatars/CircleTarget"
import { useMemo } from "react";
import { useTexture } from "@react-three/drei";

const BattleFIeld = () => {

  const PATH=useMemo(()=>'textures/sphere-platform/cloudy-veined-quartz-light_',[]);
    
        const horizontalPlatformTexture=useTexture({
            map:`${PATH}albedo.png`,
            normalMap:`${PATH}normal-ogl.png`,
            roughnessMap:`${PATH}roughness.png`,
            // displacementMap:`${PATH}height.png`,
            aoMap:`${PATH}ao.png`,
            metalnessMap: `${PATH}metallic.png`,
    
        });
  return (
    <Physics gravity={[0, -9.8, 0]} >
      <group position={[-150, 0, 0]}>
        <Float speed={5}>
          <OptionsText
            position={[0, 30, 20]}
            size={7}
            text={"LIVER CANCER"}
            color={"black"}
            rotation={[0, Math.PI / 2, 0]}
          />
        </Float>
        <GenericTarget
          position={[0, 0, 0]}
          scale={40}
          name={"cancer"}
          path="textures/cancerTexture.jpg"
          collider='dynamic'
        />
      </group>

      <group position={[0, 0, 150]}>
        <Float speed={5}>
          <OptionsText
            position={[20, 30, 0]}
            size={7}
            text={"SYMPTOMS"}
            color={"black"}
            rotation={[0, Math.PI, 0]}
          />
        </Float>

        <GenericTarget
          position={[0, 0, 0]}
          scale={40}
          name={"symptoms"}
          path="textures/symptoms.jpg"
          collider='dynamic'
        />
      </group>

      <group position={[150, 0, 0]}>
        <Float speed={5}>
          <OptionsText
            position={[0, 30, -25]}
            size={7}
            text={"RECOMENDATIONS"}
            color={"black"}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </Float>

        <GenericTarget
          position={[0, 0, 0]}
          scale={40}
          name={"recommendations"}
          path="textures/recomendations.webp"
          collider='dynamic'
        />
      </group>

      <group position={[0, 0, -150]}>
        <Float speed={5}>
          <OptionsText
            position={[-20, 30, 0]}
            size={7}
            text={"TREATMENT"}
            color={"black"}
          />
        </Float>
        <GenericTarget
          position={[0, 0, 0]}
          scale={40}
          name={"treatment"}
          path="textures/surgery.jpg"
          collider='dynamic'
        />
      </group>

     <group  position={[200, 150, -200]}>
       <Float speed={5}>
          <OptionsText
          rotation={[0,-Math.PI/4,0]}
            position={[-20, 40, 0]}
            size={10}
            text={"NEITHER"}
            color={"black"}
          />
        </Float>
       <GenericTarget
         position={[0,0,0]}
          scale={40}
          name={"neither"}
          path="textures/target.png"
          collider='fixed'
        />
     </group>
      
      <Esphere position={[0, 10, 0]} />
      <GenericFloor
        position={[0, -10, 0]}
        geometry={{
          args: [10, 10],
        }}
        meshM={{...horizontalPlatformTexture}}
        name="SphereFloorRB"
        
      />
      <CircleTarget position={[0,-20,0]}/>

      <BattelFloor
        position={[0, -30, 0]}
        geometry={{
          args: [600, 600], //400*400
        }}
      />

      <GenericFloor
        position={[0, -500, 0]}
        geometry={{
          args: [4000, 3000],
        }}
        meshM={{
          transparent: true,
          opacity: 0,
        }}
        name="StagingFloorRB"
      />
    </Physics>
  );
};

export default BattleFIeld;
