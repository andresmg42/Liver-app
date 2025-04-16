import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { LiverCancerFinal } from '../../../cancer/LiverCancerFinal'
import StagingCancerLiver from '../../../staging/cancer/StagingCancerLiver'
import Recipient from '../../../resipients/Resipient'
import { SoftShadows } from '@react-three/drei'
import { Float } from '@react-three/drei'
import Description from '../../../texts/cancer/Description'
const CancerLiverInPage = () => {

  const description=`
    El cáncer de hígado es un crecimiento anormal de células 
    en el hígado que forman un tumor.
    Puede originarse en el hígado (cáncer primario) 
    o diseminarse desde otras partes del cuerpo 
    (cáncer secundario).Es más común en personas con 
    enfermedades hepáticas crónicas como hepatitis 
    o cirrosis.El cáncer de hígado puede causar pérdida 
    de apetito, fatiga, dolor abdominal, ictericia 
    (piel y ojos amarillos) y pérdida de peso. 
    A medida que avanza, afecta la función hepática 
    y puede provocar insuficiencia hepática.`

    const causes=`
    Las causas del cáncer de hígado incluyen
    principalmente infecciones crónicas por hepatitis B o
    C, que pueden provocar inflamación y daño celular 
    prolongado. El consumo excesivo de alcohol y la 
    consecuente cirrosis también son factores de riesgo
    importantes, al igual que la exposición a aflatoxinas,
    unas toxinas producidas por hongos en alimentos 
    almacenados en condiciones inadecuadas. Además, 
    factores genéticos y algunas enfermedades metabólicas 
    pueden contribuir al desarrollo de este tipo de cáncer.`
  return (
    <Canvas  camera={{ position: [0, 0, 2.5] }} shadows={true}>
    {/* <StagingCancerLiver/> */}
  
    <Description title={'Cancer'} position={[-2.5, 1.4, 0]}/>
    <Description title={description} position={[-2.3, 0.6, 0]}/>

    <Description title={'Causas'} position={[2.5, 1.4, 0]}/>
    <Description title={causes} position={[2.7, 0.6, 0]}/>

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