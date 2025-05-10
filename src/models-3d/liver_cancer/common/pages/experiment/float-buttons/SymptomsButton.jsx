import { Html } from "@react-three/drei";
import { useEventStore } from "../../../../../../stores/use-auth-store";
import { useNavigate } from "react-router";


const SymptomsButton = ({ position, color }) => {
  const navigate = useNavigate();
  const { click, setClick,clickview } = useEventStore();

  

  const handleClickSymptoms = (e) => {
    e.stopPropagation();
    navigate("/symptoms");
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
          onClick={handleClickSymptoms}
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-triangle-alert-icon lucide-triangle-alert"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        </div>
    </Html>
  );
};

export default SymptomsButton;
