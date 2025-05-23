import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Text } from "@react-three/drei";

const TitleVideo = ({color}) => {
//   const textRef = useRef();
//   const { camera } = useThree();

//   useFrame(() => {
//     if (textRef.current) {
//       textRef.current.quaternion.copy(camera.quaternion);
//     }
//   });
  return (
    
      <Text
        // ref={textRef}
        position={[-1.55,1.5,0]}
        color={color}
        anchorX={"center"}
        anchorY={"middle"}
        fontSize={0.2}
      >
        liver cancer
      </Text>
    
  );
};

export default TitleVideo;
