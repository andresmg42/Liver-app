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
      <div className="w-full md:h-[60vh] h-[50vh] bg-[#797777] mx-auto ">

        <div className="w-[40vh] md:w-[90vh] lg:w-[120vh] h-[35vh] md:h-[60vh]  mx-auto   mt-20 my-20 rounded-md absolute top-[67vh] md:top-[85vh] left-1/2  transform -translate-x-1/2 z-10 shadow-lg ">

          <div className="w-full aboslute  bg-black/50">
            <h1 className="text-xl md:tex-2l font-bold text-center" > View Screen Mode: 3D Human Liver</h1>
          </div>


          <div className="w-full h-full">
            <Pruebas />
          </div>




        </div>
      </div>

      <div className=" px-8 ">
        <h1 className=" relative text-4xl font-bold text-center">Look at Any 3D Liver Diseases</h1>

        <div className="grid  grid-cols-4 gap-4 w-full h-full place-items-center mt-10" >

          <div className="bg-black/50 md:w-[45vh] md:h-[45vh] p-4 w-[10vh] h-[10vh] text-white mb-5 mt-5 rounded-lg flex flex-col gap-1 items-center">
            
            <CancerLiverCard/>
            <h1 className="font-bold text-xl text-center">Liver Cancer</h1>
            <NavLink className="w-20 h-20 mb-4">
            <img src="/flecha-targetas.svg" alt="card-row " className="w-20 h-20"/>
            </NavLink>
           
          </div>

          <div className="bg-black/50  md:w-[45vh] md:h-[45vh] w-[10vh] h-[10vh] p-4 text-white mb-5 mt-5 rounded-lg">
            Hello
          </div>

          <div className="bg-black/50 md:w-[45vh] md:h-[45vh]  w-[10vh] h-[10vh]  p-4 text-white mb-5 mt-5 rounded-lg">
            Hello
          </div>

          <div className="bg-black/50 md:w-[45vh] md:h-[45vh]  w-[10vh] h-[10vh] p-4 text-white mb-5 mt-5 rounded-lg">
            Hello
          </div>

        </div>
      </div>


    </div>

  )
}

export default Home