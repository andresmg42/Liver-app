import { useEventStore } from "../../../../../../stores/use-auth-store";
import ModelCard from "../../../ModelCard";
import { Html } from "@react-three/drei";
import { useNavigate } from "react-router";
import {Alcohol} from '../../../../recomendations/Alcohol'

const RecomendationsButton3D = ({ position }) => {
  const navigate = useNavigate();
  const { click, setClick, clickview } = useEventStore();

  const handleClickTreatment = (e) => {
    e.stopPropagation();
    // navigate("/symptoms");
  };

  return (
    <Html center position={position} style={{ pointerEvents: "auto" }}>
      <div
        onClick={handleClickTreatment}
        onPointerDown={(e) => e.stopPropagation()}
        onPointerUp={(e) => e.stopPropagation()}
        className={`
          ${click ? "hidden" : "flex"}
           hover:bg-black rounded-full shadow-lg
          w-[8vh] h-[8vh] md:w-[20vh] md:h-[20vh]
           items-center justify-center
          transition-all duration-300
        `}
      >
        <ModelCard model={<Alcohol scale={2.5} home={true} />} />
      </div>
    </Html>
  );
};

export default RecomendationsButton3D;
