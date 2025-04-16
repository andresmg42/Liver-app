import { Html } from "@react-three/drei"

const DescriptionHtml = ({paragraph}) => {
  return (
   <Html
   center
   position={[0,2,0]}
   transform
   distanceFactor={5}
   
   >
    <div>

    <p>
{paragraph}
    </p>

    </div>

    
    
   </Html>
  )
}

export default DescriptionHtml