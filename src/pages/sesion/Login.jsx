import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router";
import { useCallback, useEffect, useState } from "react";
import api from "../../api/user.api.js";

const Login = () => {
  const [email, setEmail] = useState({ email: null });

  const {
    loginGoogleWithPopUp,
    loginFacebookWithPopup,
    userLooged,
    loginWithEmail,
    sendSignInLink,
    loginGithubWithPopup,
    setUser,
  } = useAuthStore();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const data = await loginGoogleWithPopUp();

      console.log(data);

      const { displayName, email } = data?.user;

      const res_search = await api.get(`users/email/?email=${email}`);

      // console.log(res_search.data);

      if (res_search.data) {
        setUser(displayName, email, data._id);
      }

      

      navigate("/");
    } catch (error) {
      if (error.response.status == 404) {
        try {
          const res = await api.post("users/", { displayName, email });
          console.log(res.data);

          if (res.data) {
            setUser(displayName, email, data._id);
          }
          navigate("/");
        } catch (error) {
          console.error("Error in handleGoogleLogin", error);
        }
      } else {
        console.error("Error in handleGoogleLogin:", error);
      }
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const data = await loginFacebookWithPopup();

      if (data != undefined) {
        const { displayName, email } = data?.user;

        try {
          const res_search = await api.get(`users/email/?email=${email}`);

          console.log(res_search);

          if (res_search.data) {
            setUser(displayName, email, data._id);
          }

          navigate("/");
        } catch (error) {
          if (error.response.status == 404) {
            try {
              const res = await api.post("users/", {
                displayName,
                email,
              });
              console.log(res.data);

              if (res.data) {
                setUser(displayName, email, data._id);
              }

              navigate("/");
            } catch (error) {
              console.error("Error in handleGoogleLoginFacebook", error);
            }
          } else {
            console.error("Error in handleGoogleLoginFacebook:", error);
          }
        }
      }
    } catch (error) {
      console.error("Error in handleLoginFacebook:", error);
    }
  };

  const handleEmailLogin = () => {
    try {
      if (email.email) {
        sendSignInLink(email.email);
        console.log(email.email);
      } else {
        alert("you must type a valid Email!");
      }
    } catch (error) {
      console.log("Error in handleEmailLogin", error);
    }
  };

  const handleChange = (e) => {
    setEmail({ email: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <img
        src="background-images\surgeryroom.png"
        alt="backgroundimg"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />

      <div className="w-[400px] h-[400px] mx-auto bg-white/15 p-8 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 text-center mb-4 text-white">
          Sign In
        </h2>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            title="Iniciar sesión con Google"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center px-6 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
          >
            <img
              src="session/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Google
          </button>

          <button
            type="button"
            title="Iniciar sesión con Facebook"
            onClick={handleFacebookLogin}
            className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
          >
            <img
              src="session/facebook.svg"
              alt="Facebook"
              className="w-5 h-5 mr-2"
            />
            Facebook
          </button>

          <button
            type="button"
            title="Iniciar sesión con Email"
            onClick={handleEmailLogin}
            className="flex items-center justify-center px-6 py-2 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200"
          >
            <img src="session/email.svg" alt="Email" className="w-5 h-5 mr-2" />
            Email
          </button>
        </div>

        <div className="mt-4">
          <input
            type="email"
            name="email"
            value={email.email}
            placeholder="Introduce tu correo"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
