import { Html } from "@react-three/drei";
import {
  useEventStore,
  usePageEventStore,
} from "../../../../../../stores/use-auth-store";
import { useNavigate } from "react-router";

const CancerButton = ({ position, color }) => {
  const navigate = useNavigate();
  const { click, setClick, clickview } = useEventStore();
 

  const handleClickCancer = (e) => {
    e.stopPropagation();
    navigate("/cancer");
  };

  //   const { viewport } = useThree();

  //   const pos = useMemo(() => {
  //     console.log("viewport:", viewport.width);
  //     if (viewport.width < 2) return [0, -0.7, 0];
  //     if (viewport.width < 3 && viewport.width > 2) return [0, -0.9, 0];
  //     return position;
  //   }, [viewport.width]);

  return (
    <Html center position={position} style={{ pointerEvents: "auto" }}>
      
        <div
          onClick={handleClickCancer}
          onPointerDown={(e) => e.stopPropagation()}
          onPointerUp={(e) => e.stopPropagation()}
          className={`${
            click ? "hidden" : "block"
          } md:w-[10vh] md:h-[10vh] shadow-md rounded-full p-2 hover:bg-black bg-black/50 flex items-center h-[8vh] w-[8vh] justify-center animate-spin-slow `}
        >
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill={`${color}`}
            width="40"
            height="40"
          >
            <title />
            <g id="liver">
              <path d="M27.49,5H11.28A14.06,14.06,0,0,1,20,17.94c0,.24,0,.49,0,.75l1.37-1.38a2.21,2.21,0,0,1,.88-.53l1.61-.52a4.2,4.2,0,0,0,2.68-2.66,2.2,2.2,0,0,1,1.13-1.28L29,11.68A3.51,3.51,0,0,0,27.49,5Z" />
              <path d="M7.78,5.08a.61.61,0,0,0-.27,0A7.57,7.57,0,0,0,1,12.54v9.79A4.67,4.67,0,0,0,5.67,27h.81a6.85,6.85,0,0,0,5.85-3.24,2.15,2.15,0,0,1,1.51-1A7.52,7.52,0,0,0,18,20.62l.58-.58a1,1,0,0,0,.29-.59A13.54,13.54,0,0,0,19,17.94,13,13,0,0,0,7.78,5.08Z" />
            </g>
          </svg>
        </div>
      
    </Html>
  );
};

export default CancerButton;
