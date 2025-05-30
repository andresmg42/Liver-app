import { create } from "zustand";
import api from "../api/user.api";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase.config";

const useAuthStore = create((set) => {
  const observeAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      user ? set({ userLooged: user }) : set({ userLooged: null });
    });
  };

  observeAuthState();
  return {
    userLooged: null,
    userEmail: { displayName: null, email: null,user_id:null },

    loginGoogleWithPopUp: async () => {
      const provider = new GoogleAuthProvider();

      try {
        const res = await signInWithPopup(auth, provider);
        return res;
      } catch (error) {
        console.error("Error loggin in :", error);
      }
    },

    loginFacebookWithPopup: async () => {
      const provider = new FacebookAuthProvider();
      try {
        const res = await signInWithPopup(auth, provider);

        return res;
      } catch (error) {
        if (error.code === "auth/account-exists-with-different-credential") {
          alert(
            "you already have an account whit another provider, please choose the provider of this account"
          );
        } else {
          console.log(error);
        }
      }
    },

    loginGithubWithPopup: async () => {
      const provider = new GithubAuthProvider();
      try {
        const res = await signInWithPopup(auth, provider);

        return res;
      } catch (error) {
        if (error.code === "auth/account-exists-with-different-credential") {
          alert(
            "you have already have an account whit another provider, please choose the provider of this account"
          );
        } else {
          console.log(error);
        }
      }
    },

    sendSignInLink: (email) => {
      const actionCodeSettings = {
        url: "http://localhost:5173/VerifyEmail",

        handleCodeInApp: true,
      };

      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          alert("a link to sign in was sent to your email!");
          window.localStorage.setItem("emailForSignIn", email);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    verifyAndSignInWithLink: () => {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        console.log("entro al condicional");

        let email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          email = window.prompt("Please provide your email for confirmation");
        }

        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            window.localStorage.removeItem("emailForSignIn");
            console.log("entro a signnWithEmailLink");

            if (result) {
              console.log(result.user);
              const { displayName, email } = result.user;
              set({ userEmail: { displayName: displayName, email: email } });
            }
          })
          .catch((error) => {
            console.log(error.code);
          });
      } else {
        console.log("no entro a verfy");
      }
    },

    setUser:(user,email,id)=>set({userEmail:{
      displayName:user,
      email:email,
      user_id:id
    }}),

    logout: async () => {
      try {
        await signOut(auth);
        set({ userLogged: null });
        localStorage.removeItem('user_id')
      } catch (error) {
        console.error("Error loggin out:", error);
      }
    },
  };
});

export const useEventStore = create((set, get) => ({
  click: false,
  clickview: false,
  clickcancer: false,
  clickQuestion:false,
  speed_cancer: 1,
  speed_symptoms: 1,
  speed_treatment: 1,
  speed_recomendations: 1,

  setClick: (bool) => {
    set({ click: bool });
  },
  setClickView: (bool) => {
    set({ clickview: bool });
  },
  setClickCancer: (bool) => {
    set({ clickcancer: bool });
  },
  
  setClickQuestion:(bool)=>set({clickQuestion:bool}),

  setSpeedCancer: (newspeed) => {
    set({ speed_cancer: newspeed });
  },
  setSpeedSymptoms: (newspeed) => {
    set({ speed_symptoms: newspeed });
  },
  setSpeedTreatment: (newspeed) => {
    set({ speed_treatment: newspeed });
  },
  setSpeedRecomendations: (newspeed) => {
    set({ speed_recomendations: newspeed });
  },
}));

export default useAuthStore;
