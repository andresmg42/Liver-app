import { Canvas } from "@react-three/fiber";
import VideoSurgery from "./VideoSurgery";
import { Html } from "@react-three/drei";
import { Text } from "@react-three/drei";
import TitleVideo from "../../models-3d/liver_cancer/common/texts/TitleVideo";

const VideoSection = () => {
  return (
    <Canvas camera={{ position: [-2, 0, 3] }}>


      <TitleVideo/>
      
      <VideoSurgery position={[-1.55, 0, 0]} size={[3.5, 2.5]} />

      <Html position={[2, 1.5, 0]}>
        <div className="flex flex-col items-center md:w-[60vh] md:h-[32vh] bg-white/15 rounded-lg p-4">
          <h1 className="md:text-2xl text-xl">Perspective</h1>
          <p className="md:text-base text-sm mt-5  ">
            As of recent global estimates, over 20 million people worldwide are
            living with cancer. Liver cancer is among the leading causes of
            cancer-related deaths, particularly in Asia and sub-Saharan Africa,
            due to higher rates of hepatitis infections in those regions.
          </p>
        </div>
      </Html>
    </Canvas>
  );
};

export default VideoSection;
