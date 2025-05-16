import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { LiverHome } from '../models-3d/liver_cancer/desease/cancer/LiverHome'
import BillBoardText from "./BillBoarText"

const WindowLiverHome = () => {




  return (
    <Canvas>
      {/* <StagingLiver/> */}
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={2} />
      {/* <directionalLight position={[5, 5, 10]} intensity={4} /> */}
       <pointLight color='0xffffff ' intensity={250} position={[0, 5, 3]}/>
  
      <BillBoardText/>
      <LiverHome scale={2}/>





    </Canvas>
  )
}

export default WindowLiverHome