import useAuthStore from '../../stores/use-auth-store'
import { useNavigate } from "react-router"
import { useCallback } from "react"

const Profile = () => {
    const { userLooged } = useAuthStore();
    const handleLogout = useCallback(async () => {
        try {
            await logout();
            navigate('/')

        } catch (error) {
            console.error('Error Logout in handleLogout', error)

        }
    })

    return (
        <>
            <h2>Perfil de Usuario</h2>
            <p>!Bienvenido!{userLooged?.displayName}</p>
            <button
                type="button"
                title="Logout with Google"
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
            >
                Logout
            </button>
        </>
    );
};

export default Profile;