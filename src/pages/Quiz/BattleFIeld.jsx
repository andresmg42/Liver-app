import { Physics } from "@react-three/rapier";
import GenericFloor from "./models/floor/GenericFloor";
import BattelFloor from "./models/floor/BattelFloor";
import { Float } from "@react-three/drei";
import Esphere from "./models/simpleobjects/Esphere";
import OptionsText from "./models/text/OptionsText";
import GenericTarget from "./models/avatars/GenericTarget";

const BattleFIeld = () => {
  return (
    <Physics gravity={[0, -9.8, 0]}>
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
          name={"recomendations"}
          path="textures/recomendations.webp"
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
        }}
        name="SphereFloorRB"
        color="white"
      />

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
