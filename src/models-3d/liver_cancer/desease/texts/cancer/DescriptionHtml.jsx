import { Html } from "@react-three/drei"

const DescriptionHtml = ({paragraph,position,title}) => {
  return (
   <Html
   center
   position={position}
   
   distanceFactor={10}
   zIndexRange={[10, 0]} 
   
   
   
   >
    <div className="bg-black/50 p-4 rounded-xl shadow-xl w-[25vh] h-[30vh]  flex-col justify-center items-center">
    <h1 className="text-white text-[10px] center">{title}</h1>
    <p className="text-white text-[8px] text-left">
      {paragraph}
    </p>

    </div>

    
    
   </Html>
  )
}

export default DescriptionHtml