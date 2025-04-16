import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { LiverCancerFinal } from '../../../cancer/LiverCancerFinal'
import StagingCancerLiver from '../../../staging/cancer/StagingCancerLiver'
import Recipient from '../../../resipients/Resipient'
import { SoftShadows } from '@react-three/drei'
import { Float } from '@react-three/drei'
import Description from '../../../texts/cancer/Description'
import DescriptionHtml from '../../../texts/cancer/DescriptionHtml'
const CancerLiverInPage = () => {

  const description=`
Liver cancer is an abnormal growth of cells 
in the liver that forms a tumor.It can originate
in the liver (primary cancer) or spread from other 
parts of the body (secondary cancer). It is more common 
in people with chronic liver diseases such as hepatitis 
or cirrhosis. Liver cancer can cause loss of appetite,
fatigue, abdominal pain, jaundice 
(yellowing of the skin and eyes), and weight loss.
As it progresses, it affects liver function and 
can lead to liver failure.`

    const causes=`
Causes of liver cancer include primarily 
chronic hepatitis B or C infections, 
which can cause inflammation and prolonged cell 
damage.Excessive alcohol consumption and the 
resulting cirrhosis are also important risk 
factors,as is exposure to aflatoxins,toxins produced 
by fungi in foods stored under improper conditions.
In addition,genetic factors and some metabolic 
diseases can contribute to the development of 
this type of cancer.`
  return (
    <Canvas  camera={{ position: [0, 0, 2.5] }} shadows={true}>
    {/* <StagingCancerLiver/> */}
  
    {/* <Description title={'Cancer'} position={[-2.5, 1.4, 0]}/>
    <Description title={description} position={[-2.3, 0.6, 0]}/>

    <Description title={'Causes'} position={[2.5, 1.4, 0]}/>
    <Description title={causes} position={[2.7, 0.6, 0]}/> */}

    {/* <DescriptionHtml paragraph={description} position={[-2.3, 0.3, 0]} title={'Liver Cancer'}/>
    
    <DescriptionHtml paragraph={causes} position={[2.7, 0.3, 0]} title={'Causes'}/> */}



    <OrbitControls enableZoom={false} />
    <ambientLight intensity={4} />
    <directionalLight position={[0, 5, 5]} 
    intensity={3}  
    // camera={{ position: [0, 1, 2] }} 
    castShadow={true}
     />


     <Float
     speed={4} // Animation speed, defaults to 1
     rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
     floatIntensity={0.3} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
     floatingRange={[1,3]}
     >
     
     <LiverCancerFinal scale={2}/>

     </Float>
    <Recipient/>

  </Canvas>
  )
}

export default CancerLiverInPage