import useAuthStore from "../../stores/use-auth-store"
import { useEffect } from "react"
import Pruebas from "../Pruebas"
import CancerLiverCard from "../../models-3d/liver_cancer/desease/cards/desease/CancerLiverCard"
import { NavLink } from "react-router"


const Home = () => {

  const { userLooged, verifyAndSignInWithLink } = useAuthStore()

  useEffect(() => {
    verifyAndSignInWithLink()
  }, [])






  return (
    <div>
      <div className="w-full md:h-[49vh] h-[50vh] bg-[#797777] mx-auto ">

        <div className="w-[40vh] md:w-[90vh] lg:w-[120vh] h-[35vh] md:h-[60vh]  mx-auto   mt-20 my-20 rounded-md absolute top-[67vh] md:top-[85vh] left-1/2  transform -translate-x-1/2 z-10 shadow-lg ">

          <div className="w-full aboslute  bg-black/50">
            <h1 className="text-xl md:tex-2l font-bold text-center" > View Screen Mode: 3D Human Liver</h1>
          </div>


          <div className="w-full h-full">
            <Pruebas />
          </div>




        </div>
      </div>

      <div className="w-[126vh] mx-auto bg-gray-400 mt-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10">
          Look at Any 3D Liver Diseases
        </h1>

        {/* Grid changes from 1 column (mobile) to 3 columns (desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 md:gap-6 w-full place-items-center bg-gray-200 ">

          {/* --- Card 1: Cancer Liver --- */}
          <div className="bg-black/50 w-full max-w-[300px] md:w-[45vh] md:h-[45vh] p-4 text-white rounded-lg flex flex-col items-center justify-between">
            <CancerLiverCard className="w-full h-auto" />
            <h1 className="font-bold text-lg md:text-xl text-center mt-2">Cancer Liver</h1>
            <NavLink className="mt-4">
              <img
                src="/flecha-targetas.svg"
                alt="card arrow"
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </NavLink>
          </div>

          {/* --- Card 2: Cirrotic Liver --- */}
          <div className="bg-black/50 w-full max-w-[300px] md:w-[45vh] md:h-[45vh] p-4 text-white rounded-lg flex flex-col items-center justify-between">
            <CancerLiverCard className="w-full h-auto" />
            <h1 className="font-bold text-lg md:text-xl text-center mt-2">Cirrotic Liver</h1>
            <NavLink className="mt-4">
              <img
                src="/flecha-targetas.svg"
                alt="card arrow"
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </NavLink>
          </div>

          {/* --- Card 3: Hepatitis B Liver --- */}
          <div className="bg-black/50 w-full max-w-[300px] md:w-[45vh] md:h-[45vh] p-4 text-white rounded-lg flex flex-col items-center justify-between">
            <CancerLiverCard className="w-full h-auto" />
            <h1 className="font-bold text-lg md:text-xl text-center mt-2">Hepatitis B Liver</h1>
            <NavLink className="mt-4">
              <img
                src="/flecha-targetas.svg"
                alt="card arrow"
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </NavLink>
          </div>

        </div>
      </div>

      <div className="w-[126vh] h-[70vh] mx-auto bg-gray-500 mt-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10">
          Look at Any 3D Liver Diseases
        </h1>

        <div className="w-[126vh] h-[20vh] mx-auto relative bg-black/50 rounded-lg  px-2">
        <div className="grid grid-cols-4 w-full h-full place-items-center gap-2">
          <div className="w-full h-full bg-white items-center flex justify-center">
            <img src="/operative-sistems/windows.svg" alt="windows" />
          </div>
          <div className="w-full h-full bg-white">hola</div>
          <div className="w-full h-full bg-white">hola</div>
          <div className="w-full h-full bg-white">hola</div>

        </div>
          
        </div>

      </div>




    </div>

  )
}

export default Home