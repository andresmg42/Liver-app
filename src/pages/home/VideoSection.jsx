import { Canvas } from "@react-three/fiber";
import VideoSurgery from "./VideoSurgery";
import { Html } from "@react-three/drei";

const VideoSection = () => {
  return (
    <Canvas camera={{ position: [-2, 0, 3] }}>
      <VideoSurgery position={[-1.55, 0, 0]} size={[3.5, 2.5]} />

      <Html position={[2, 1.5, 0]}>
        <div className="flex flex-col items-center w-[50vh]">
          <h1 className="md:text-2xl text-xl">Perspective</h1>
          <p className="md:text-base text-sm ">
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
