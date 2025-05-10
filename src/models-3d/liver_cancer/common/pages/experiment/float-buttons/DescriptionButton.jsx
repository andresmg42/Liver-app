import { Html } from "@react-three/drei";
import { useEventStore } from "../../../../../../stores/use-auth-store";
import { useNavigate } from "react-router";


const DescriptionButton = ({ position, color }) => {
  const navigate = useNavigate();
  const { click,setClickCancer } = useEventStore();

  

  const handleClickDescription = (e) => {
    e.stopPropagation();
    setClickCancer(true)
  };





  return (
    <Html
      center
      position={position}
      
      style={{ pointerEvents: "auto" }}
    >
      <div
          onClick={handleClickDescription}
          onPointerDown={(e)=>e.stopPropagation()}
          onPointerUp={(e)=>e.stopPropagation()}
          className={`${
            click? "hidden" : "block"
          } md:w-[10vh] md:h-[10vh] shadow-md rounded-full p-2 hover:bg-black bg-black/50 flex items-center h-[8vh] w-[8vh] justify-center animate-spin-slow `}
        >
          <h1 className="text-2xl text-white">Cancer</h1>
        </div>
    </Html>
  );
};

export default DescriptionButton;
