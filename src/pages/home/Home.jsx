import useAuthStore from "../../stores/use-auth-store"



const Home = () => {

  const {userLooged}=useAuthStore()




  

  return (
    <>
    <h2>Perfil de Usuario</h2>
    <p>!Bienvenido!{userLooged?.displayName}</p>
   
</>
  )
}

export default Home