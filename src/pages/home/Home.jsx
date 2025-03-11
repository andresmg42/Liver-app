import useAuthStore from "../../stores/use-auth-store"
import { useEffect } from "react"


const Home = () => {

  const {userLooged,verifyAndSignInWithLink}=useAuthStore()

  useEffect(()=>{
    verifyAndSignInWithLink()
},[])




  

  return (
    <div>Home</div>
  )
}

export default Home