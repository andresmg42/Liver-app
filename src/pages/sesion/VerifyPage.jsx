import useAuthStore from "../../stores/use-auth-store";
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
const VerifyPage = () => {

    const { verifyAndSignInWithLink } = useAuthStore();

    useEffect(() => {
        verifyAndSignInWithLink()
      }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
    <img src="background-images\surgeryroom.png" alt="backgroundimg" className="fixed top-0 left-0 w-full h-full object-cover -z-10" />
       
  <Canvas>
     <Float>
        <Text
            
            position={[0,0,0]}
            color={'white'}
            anchorX={"center"}
            anchorY={"middle"}
            fontSize={0.7}
            font="fonts\OpenSans-Bold.ttf"
          >
            User Verified, Close this whindow.
          </Text>
     </Float>
  </Canvas>
</div>
   
  )
}

export default VerifyPage