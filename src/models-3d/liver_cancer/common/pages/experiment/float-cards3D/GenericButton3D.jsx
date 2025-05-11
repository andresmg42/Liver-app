import { useEventStore } from "../../../../../../stores/use-auth-store";
import ModelCard from "../../../ModelCard";
import { Html } from "@react-three/drei";
import { useNavigate } from "react-router";
const GenericButton3D = ({ position, rute, model, speed }) => {
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

  return (
    <Html center position={position} style={{ pointerEvents: "auto" }}>
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
