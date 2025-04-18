import useAuthStore from "../../stores/use-auth-store"
import { useEffect } from "react"
import WindowLiverHome from "../WindowLiverHome"
import CancerLiverCard from "../../models-3d/liver_cancer/desease/cards/desease/cancer/CancerLiverCard"
import { NavLink } from "react-router"
import Header from "../../layout/header/Header"


const Home = () => {

  const { userLooged, verifyAndSignInWithLink } = useAuthStore()

  useEffect(() => {
    verifyAndSignInWithLink()
  }, [])






  return (
    <>
    <Header/>
    <div>
    <video autoPlay loop muted playsInline className="fixed top-0 left-0  w-full h-full object-cover -z-10">
                <source src='videos/login.mp4' type="video/mp4" />
            </video>

      

        <div className="h-[75vh] ">

          <div className="w-full  bg-black/50">
            <h1 className="text-xl md:tex-2l font-bold text-center" > View Screen Mode: 3D Human Liver</h1>
          </div>


          <div className="w-full h-full">
            <WindowLiverHome />
          </div>




        
      </div>

      <div className="max-w-6xl w-full mx-auto   mt-20  px-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10">
          Look at Any 3D Liver Diseases
        </h1>

        {/* Grid responsivo: 1 columna (móvil) → 2 columnas (tablet) → 3 columnas (desktop) */}
        <div className="grid grid-cols-1  w-full place-items-center">

          {/* Tarjeta 1: Cancer Liver */}
          <div className="bg-white/15 w-full max-w-[400px] min-h-[400px] p-4 text-white rounded-lg flex flex-col items-center justify-between">
            <div className="w-full h-[300px]">
              <CancerLiverCard/>
            </div>
            <h1 className="font-bold text-xl md:text-2xl text-center ">Cancer Liver</h1>
            <NavLink className="mt-4" to={'/cancerLiver'}>
              <img src="/flecha-targetas.svg" alt="card arrow" className="w-18 h-18 md:w-18 md:h-18" />
            </NavLink>
          </div>

          
          {/* <div className="bg-white/15 w-full max-w-[400px] min-h-[400px] p-4 text-white rounded-lg flex flex-col items-center justify-between">
            <div className="w-full h-[300px]">
              <CancerLiverCard/>
            </div>
            <h1 className="font-bold text-xl md:text-2xl text-center ">Cirrotic Liver</h1>
            <NavLink className="mt-4">
              <img src="/flecha-targetas.svg" alt="card arrow" className="w-18 h-18 md:w-18 md:h-18"/>
            </NavLink>
          </div> */}

          
          {/* <div className="bg-white/15 w-full max-w-[400px] min-h-[400px] p-4 text-white rounded-lg flex flex-col items-center justify-between">
            <div className="w-full h-[300px]">
              <CancerLiverCard/>
            </div>
            <h1 className="font-bold text-xl md:text-2xl text-center ">Hepatitis B Liver</h1>
            <NavLink className="mt-4">
              <img src="/flecha-targetas.svg" alt="card arrow" className="w-18 h-18 md:w-18 md:h-18" />
            </NavLink>
          </div> */}

        </div>
      </div>


      <div className="w-full max-w-6xl mx-auto my-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10">
          Available For
        </h1>

        <div className="w-full max-w-6xl mx-auto relative bg-white/15 rounded-lg px-4 py-6 md:py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full place-items-center gap-4">
            <div className="flex flex-col items-center text-center">
              <img src="operative-sistems/android.svg" alt="android" className="w-12 h-12 md:w-16 md:h-16" />
              <h2 className="text-lg md:text-xl lg:text-2xl text-white font-bold mt-2">Android</h2>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/operative-sistems/windows.svg" alt="windows" className="w-12 h-12 md:w-16 md:h-16" />
              <h2 className="text-lg md:text-xl lg:text-2xl text-white font-bold mt-2">Windows</h2>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/operative-sistems/apple.svg" alt="apple" className="w-12 h-12 md:w-16 md:h-16" />
              <h2 className="text-lg md:text-xl lg:text-2xl text-white font-bold mt-2">MacOS</h2>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/operative-sistems/ipad.svg" alt="iPad" className="w-12 h-12 md:w-16 md:h-16" />
              <h2 className="text-lg md:text-xl lg:text-2xl text-white font-bold mt-2">iPad</h2>
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-center mt-10">
          Choose Your Plan!
        </h1>
        <h2 className="text-sm md:text-lg lg:text-xl font-bold text-center mt-4">
          Try out our 3-day risk-free trial. No payment details required.
        </h2>

        <button className="bg-white hover:bg-[#797777] text-black py-2 px-6 rounded-lg text-base md:text-lg font-semibold transition flex items-center space-x-2 mx-auto mt-6 focus:ring-2 focus:ring-gray-400 focus:outline-none">
          <span>Try It For Free</span>
          <img
            src="/header/flecha.svg"
            alt="arrow"
            className="w-4 h-4 md:w-6 md:h-6"
          />
        </button>
      </div>
    </div>
    </>

  )
}

export default Home