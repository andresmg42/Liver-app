import useAuthStore from "../../stores/use-auth-store"
import { useEffect } from "react"
import Pruebas from "../Pruebas"


const Home = () => {

  const { userLooged, verifyAndSignInWithLink } = useAuthStore()

  useEffect(() => {
    verifyAndSignInWithLink()
  }, [])






  return (
    <div className="w-full md:h-[60vh] h-[60vh] bg-[#797777] mx-auto ">

      <div className="w-[40vh] md:w-[90vh] lg:w-[120vh] h-[35vh] md:h-[60vh]  mx-auto   mt-20 my-20 rounded-md absolute top-[67vh] md:top-[85vh] left-1/2  transform -translate-x-1/2 z-10 shadow-lg ">
      
      <div className="w-full aboslute  bg-black/50">
      <h1 className="text-xl md:tex-2l font-bold text-center" > View Screen Mode: 3D Human Liver</h1>
      </div>
        
     
      <div className="w-full h-full">
      <Pruebas/>
      </div>
      
      
      </div>


    </div>

  )
}

export default Home