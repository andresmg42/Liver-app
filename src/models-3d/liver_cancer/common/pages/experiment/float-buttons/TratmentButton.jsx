import { Html } from "@react-three/drei";
import { useEventStore } from "../../../../../../stores/use-auth-store";
import { useNavigate } from "react-router";


const TratmentButton = ({ position, color }) => {
  const navigate = useNavigate();
  const { click, setClick,clickview } = useEventStore();

  

  const handleClickTratment = (e) => {
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
          onClick={handleClickTratment}
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
            stroke={`white`}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-pill-icon lucide-pill"
          >
            <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
            <path d="m8.5 8.5 7 7" />
          </svg>
        </div>
    </Html>
  );
};

export default TratmentButton;
