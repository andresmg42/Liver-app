import useAuthStore from "../../stores/use-auth-store"
import { useNavigate } from "react-router"
import { useCallback } from "react"
import api from "../../api/user.api.js"

const Login = () => {

    const { loginGoogleWithPopUp,loginFacebookWithPopup,userLooged} = useAuthStore();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const data = await loginGoogleWithPopUp()
            
            const {displayName,email}=data?.user

            const res_axios= await api.post('users/',{displayName,email})

            console.log(res_axios.data)

            

           
            navigate('/')
            
        } catch (error) {
            console.error('Error in handleLogin:', error)
            
        }
    }

    const handleFacebookLogin = async () => {
        try {
            const data = await loginFacebookWithPopup()

            console.log(data)
            
            // const {displayName,email}=data?.user

            // const res_axios= await api.post('users/',{displayName,email})

            // console.log(res_axios.data)

            

           
            //navigate('/')
            
        } catch (error) {
            console.error('Error in handleLogin:', error)
            navigate('/')
        }
    }

    
  



    return (
        <>
            <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-gray rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-700">Continua con Google</h2>
                <button
                    type="button"
                    title="Iniciar sesión con Google"
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                >
                    <img src="src/assets/google.svg" alt="googleLogo" className="w-5 h-5 mr-2" />
                    Google
                </button>
                <button
                    type="button"
                    title="Iniciar sesión con Google"
                    onClick={handleFacebookLogin}
                    className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                >
                    <img src="src/assets/facebook.svg" alt="googleLogo" className="w-5 h-5 mr-2" />
                    Facebook
                </button>



            </div>
        </>
    )
}

export default Login