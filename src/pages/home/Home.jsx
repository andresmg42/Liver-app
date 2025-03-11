import useAuthStore from "../../stores/use-auth-store"
import { useEffect } from "react"


const Home = () => {

  const {userLooged,verifyAndSignInWithLink}=useAuthStore()

  useEffect(()=>{
    verifyAndSignInWithLink()
},[])




  

  return (
    <div className="w-full ralative">
      <img src="" alt="" />

    <header id="hero" className="bg-gray-900 text-white py-20 flex items-center justify-center">
      <div className="text-center">

      <img src="src/assets/logo_figma.svg" alt="logo header" className="mx-auto my-4" />
        
        <h1 className="text-5xl font-bold mt-2">The World's Most Advanced 3D <br/>
        Anatomy Deseases Platform
        </h1>

        
        
        <button className="mt-6 bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold transition">
          Explore
        </button>
      </div>
    </header>
  </div>
  )
}

export default Home