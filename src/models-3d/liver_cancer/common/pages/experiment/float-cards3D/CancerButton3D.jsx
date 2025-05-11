import { useEventStore } from "../../../../../../stores/use-auth-store";
import ModelCard from "../../../ModelCard";
import { LiverCancerFinal } from "../../../../desease/cancer/LiverCancerFinal";
import { Html } from "@react-three/drei";
import { useNavigate } from "react-router";
const CancerButton3D = ({ position }) => {
  const navigate = useNavigate();
  const { click, setClick, clickview } = useEventStore();

  const handleClickCancer = (e) => {
    e.stopPropagation();
    navigate("/cancer");
  };

  return (
    <Html center position={position} style={{ pointerEvents: "auto" }}>
      <div
        onClick={handleClickCancer}
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
        <ModelCard model={<LiverCancerFinal scale={4} home={true} />} />
      </div>
    </Html>
  );
};

export default CancerButton3D;
