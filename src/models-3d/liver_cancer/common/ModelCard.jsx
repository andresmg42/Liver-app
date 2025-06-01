import { Canvas } from "@react-three/fiber"



const ModelCard = (props) => {
  return (
    <Canvas>
    
    {/* <OrbitControls enableZoom={false} /> */}
    <ambientLight intensity={1} />
    {/* <directionalLight position={[5, 5, 10]} intensity={4} /> */}

    {/* '0xff0040' */}

    <pointLight  intensity={250} position={[0, 5, 3]}/>
    
    {/* <directionalLight
            position={[0, 5, 5]}
            intensity={7}
            power={5}
          /> */}
    {/* <LiverCancerFinal scale={5} home={true}/> */}
    {props.model}

  </Canvas>
  )
}

export default ModelCard