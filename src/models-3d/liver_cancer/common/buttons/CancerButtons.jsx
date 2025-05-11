import { Html } from "@react-three/drei";
import { useEventStore } from "../../../../stores/use-auth-store";
import { useNavigate } from "react-router";
import { useMemo } from "react";
import { useThree } from "@react-three/fiber";
import { LiverCancerFinal } from "../../desease/cancer/LiverCancerFinal";
import { Fever } from "../../simptoms/cancer/Fever";
import { Xrays } from "../../treatment/Xrays";
import { Alcohol } from "../../recomendations/Alcohol";
import ModelCard from "../ModelCard";

const CancerButtons = ({ position, color }) => {
  const navigate = useNavigate();
  const { click, setClick, clickview } = useEventStore();

  const handleClickSymptoms = (e) => {
    e.stopPropagation();
    navigate("/symptoms");
  };

  const handleClickCancer = (e) => {
    e.stopPropagation();
    navigate("/cancer");
  };

  const handleClickRecomendations = () => {};

  const handleClickTreatment = () => {};

  const { viewport } = useThree();

  const pos = useMemo(() => {
    // console.log(viewport.width)
    if (viewport.width < 2.5) return [0, -0.7, 0];
    if (viewport.width < 3 && viewport.width > 2) return [0, -0.9, 0];
    return position;
  }, [viewport.width]);

  return (
    <Html center position={pos} style={{ pointerEvents: "auto" }}>
      <div
        className={`  lg:flex-col  items-center justify-center p-2 gap-2 ${
          clickview ? "hidden md:flex" : "flex"
        }`}
        onPointerUp={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <div
          onClick={handleClickCancer}
          className={`${
            click ? "hidden" : "block"
          } md:w-[10vh] md:h-[10vh] shadow-md rounded-full p-2 hover:bg-white/15  flex items-center h-[8vh] w-[8vh] justify-center animate-spin-slow `}
        >
          <ModelCard model={<LiverCancerFinal scale={4} home={true}/>} />
        </div>

        <div
          onClick={handleClickSymptoms}
          className={`${
            click ? "hidden" : "block"
          } md:w-[10vh] md:h-[10vh]  h-[8vh] w-[8vh] shadow-md rounded-full p-2 hover:bg-white/15  flex items-center justify-center animate-spin-slow`}
        >
          <ModelCard model={<Fever scale={3} home={true}/>} />
        </div>

        <div
          onClick={handleClickTreatment}
          className={`${
            click ? "hidden" : "block"
          } md:w-[10vh] md:h-[10vh]  h-[8vh] w-[8vh] shadow-md rounded-full p-2 hover:bg-white/15  flex items-center justify-center animate-spin-slow`}
        >
          <ModelCard model={<Xrays scale={3} home={true}/>} />
        </div>

        <div
          onClick={handleClickRecomendations}
          className={`${
            click ? "hidden" : "block"
          } md:w-[10vh] md:h-[10vh]  h-[8vh] w-[8vh] shadow-md rounded-full p-2 hover:bg-white/15  flex items-center justify-center animate-spin-slow`}
        >
          <ModelCard model={<Alcohol scale={3} home={true}/>} />
        </div>
      </div>
    </Html>
  );
};

export default CancerButtons;
