import { Html } from "@react-three/drei";
import { useEventStore } from "../../../../../../stores/use-auth-store";
import { useNavigate } from "react-router";


const RecomendationsButton = ({ position, color }) => {
  const navigate = useNavigate();
  const { click, setClick,clickview } = useEventStore();

  

  const handleClickRecomendations = (e) => {
    e.stopPropagation();
    // navigate("/symptoms");
  };



//   const { viewport } = useThree();

//   const pos = useMemo(() => {
//     console.log("viewport:", viewport.width);
//     if (viewport.width < 2) return [0, -0.7, 0];
//     if (viewport.width < 3 && viewport.width > 2) return [0, -0.9, 0];
//     return position;
//   }, [viewport.width]);

  return (
    <Html
      center
      position={position}
      
      style={{ pointerEvents: "auto" }}
    >
      <div
          onClick={handleClickRecomendations}
          onPointerDown={(e)=>e.stopPropagation()}
          onPointerUp={(e)=>e.stopPropagation()}
          className={`${
            click? "hidden" : "block"
          } md:w-[10vh] md:h-[10vh] shadow-md rounded-full p-2 hover:bg-black bg-black/50 flex items-center h-[8vh] w-[8vh] justify-center animate-spin-slow `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke={`${color}`}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-wine-off-icon lucide-wine-off"
          >
            <path d="M8 22h8" />
            <path d="M7 10h3m7 0h-1.343" />
            <path d="M12 15v7" />
            <path d="M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198" />
            <line x1="2" x2="22" y1="2" y2="22" />
          </svg>
        </div>
    </Html>
  );
};

export default RecomendationsButton;
