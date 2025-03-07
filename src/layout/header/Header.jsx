import React from 'react';
import { NavLink,useNavigate } from 'react-router';
import useAuthStore from "../../stores/use-auth-store"
import { useCallback } from 'react';

const Header = () => {

  const { logout, userLooged } = useAuthStore();
  const navigate=useNavigate();


  const handleLogout = useCallback(async () => {
    try {
      await logout();
      navigate('/login')

    } catch (error) {
      console.error('Error Logout in handleLogout', error)

    }
  })
  return (
    <header className="bg-[#07054A] text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">


        <div className="text-2xl font-bold">
          <NavLink to="/">3D Medical Models</NavLink>
        </div>


        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" exact className="hover:text-gray-400" activeClassName="text-blue-500">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/enfermedades" className="hover:text-gray-400" activeClassName="text-blue-500">
              Enfermedades
            </NavLink>
          </li>
          <li>
            <NavLink to="/quiz" className="hover:text-gray-400" activeClassName="text-blue-500">
              Quiz
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-gray-400" activeClassName="text-blue-500">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="hover:text-gray-400" activeClassName="text-blue-500">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className="hover:text-gray-400" activeClassName="text-blue-500">
              Register
            </NavLink>
          </li>
          {userLooged && (<li>
            <button onClick={handleLogout} className="hover:text-gray-400">
              Logout
            </button>
          </li>)}
        </ul>

      </nav>
    </header>
  );
};

export default Header;

