import useAuthStore from "../../stores/use-auth-store"
import { useEffect } from "react"


const Home = () => {

  const {userLooged,verifyAndSignInWithLink}=useAuthStore()

  useEffect(()=>{
    verifyAndSignInWithLink()
},[])




  

  return (
    <div className="w-full flex items-center justify-center relative overflow-hidden">
    {/* Imagen de fondo */}
    <img 
      src="src/assets/header/background-header-removebg-preview.png" 
      alt="header background"
      className="absolute inset-0 h-[80vh] z-0 mx-auto"
    />
  
    {/* Header */}
    <header id="hero" className="w-full h-[80vh] bg-black/50 text-white flex items-center justify-center z-10">
      <div className="text-center">
        {/* Logo */}
        <img 
          src="src/assets/header/logo_figma.svg" 
          alt="logo header" 
          className="mx-auto mb-4 w-60 h-60" 
        />
  
        {/* Título */}
        <h1 className="text-5xl font-bold mt-2">
          The World's Most Advanced 3D <br />
          Anatomy Diseases Platform
        </h1>
  
        {/* Botón */}
        <button className="mt-6 bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold transition">
          Explore
        </button>
      </div>
    </header>
  </div>
  )
}

export default Home