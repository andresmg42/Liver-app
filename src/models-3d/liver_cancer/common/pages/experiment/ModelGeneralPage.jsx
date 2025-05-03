import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import Recipient from "../../resipients/Resipient";

import CancerButtons from "../../buttons/CancerButtons";
import RotateHtml from "../../buttons/RotateHtml";
import { useEventStore } from "../../../../../stores/use-auth-store";
import { KeyboardControls } from "@react-three/drei";


const StagerExperiment = (props) => {
  const map = useMemo(
    () => [
      { name: "up", keys: ["ArrowUp", "KeyW"] },
      { name: "down", keys: ["ArrowDown", "KeyS"] },
      { name: "left", keys: ["ArrowLeft", "KeyA"] },
      { name: "right", keys: ["ArrowRight", "KeyD"] },
    ],
    []
  );

  const { setClick } = useEventStore();

  return (
    <div className="fixed top-0 left-0 w-full h-full object-cover  Z-0">
      <KeyboardControls map={map}>
        <Canvas
          camera={{ position: [0, 0, 2.5] }}
          shadows={true}
          onPointerDown={setClick}
          onPointerUp={setClick}
        >
          {/* <HtmlInterfaz
            modelpage={
              <ModelCancerInPage
                text={
                  <CancerText3D
                    title={"LIVER CANCER"}
                    position={[0, 1.5, 0]}
                    color="red"
                  />
                }
                model={<LiverCancerFinal scale={2} home={false} />}
                color="#ff6035"
              />
            }
            color="#ff6035"
            cards={cardscancer}
            title="Cancer Liver Information"
            position={[-2.5, -0.5, 0]}
          /> */}
          {props.htmlinterfaz}

          {/* <StagingCancerLiver /> */}
          {props.staging}

          <Float
            speed={3}
            //  floatingRange={[0.5,1]}
          >
            {/* <CancerText3D
              title={"LIVER CANCER"}
              position={[0, 1.5, 0]}
              color="red"
            /> */}
            {props.text}
          </Float>

          <RotateHtml position={[0, 0, 0]} color={props.color} />

          <CancerButtons position={[2,0.2,0]} color={props.color} />

          <OrbitControls enableZoom={false} target={[0, 0, 0]} />
          <ambientLight intensity={4} />
          <directionalLight
            position={[0, 5, 5]}
            intensity={3}
            castShadow={true}
          />

          {/* <LiverCancerFinal scale={2} home={false} /> */}
          {props.model}

          <Recipient />
        </Canvas>
      </KeyboardControls>
    </div>
  );
};

export default StagerExperiment;