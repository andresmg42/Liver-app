import { useEventStore } from "../../../../../../stores/use-auth-store";
import ModelCard from "../../../ModelCard";
import { Html } from "@react-three/drei";
import { useNavigate } from "react-router";
import { useMemo } from "react";
import { useThree } from "@react-three/fiber";
const GenericButton3D = ({ position, rute, model, speed }) => {
  const {viewport}=useThree();
  const navigate = useNavigate();
  const {
    click,
    setSpeedCancer,
    setSpeedSymptoms,
    setSpeedTreatment,
    setSpeedRecomendations,
  } = useEventStore();

  const handleSpeed = (v) => {
    
    switch (speed) {
      case "cancer":
        setSpeedCancer(v);
        break;

      case "symptoms":
        setSpeedSymptoms(v);
        break;

      case "treatment":
        setSpeedTreatment(v);
        break;

      case 'recomendations':
        setSpeedRecomendations(v)
        break;

      default:
        break;
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    handleSpeed(1);
    navigate(rute);
  };

  const pos = useMemo(() => {
      console.log(viewport.width)
      console.log('abs',Math.abs(viewport.width-8.085992))
       if (position[0]>0){
        position[0]=position[0]-Math.abs(viewport.width-8.085992)*0.15
         return position
       }
       if (position[0]<0) {
        position[0]= position[0]+Math.abs(viewport.width-8.085992)*0.15
        return position
       }
    }, [viewport.width]);

  return (
    <Html center position={pos} style={{ pointerEvents: "auto" }}>
      <div
        onClick={handleClick}
        onPointerDown={(e) => e.stopPropagation()}
        onPointerUp={(e) => e.stopPropagation()}
        onPointerEnter={() => handleSpeed(8)}
        onPointerLeave={() => handleSpeed(1)}
        className={`
          ${click ? "hidden" : "flex"}
           hover:bg-white/15 rounded-full shadow-lg
          w-[8vh] h-[8vh] md:w-[20vh] md:h-[20vh]
           items-center justify-center
          transition-all duration-300
        `}
      >
        <ModelCard model={model} />
      </div>
    </Html>
  );
};

export default GenericButton3D;
