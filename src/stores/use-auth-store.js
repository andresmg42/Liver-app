import { create } from "zustand"
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
} from "firebase/auth"
import { auth } from "../../firebase.config"

const useAuthStore = create((set) => {
  const observeAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      user ? set({ userLooged: user }) : set({ userLooged: null })
    })
  }

  observeAuthState()
  return {
    userLooged: null,

    loginGoogleWithPopUp: async () => {
      const provider = new GoogleAuthProvider()

      try {
        const res = await signInWithPopup(auth, provider)
        return res
      } catch (error) {
        console.error("Error loggin in :", error)
      }
    },

    loginFacebookWithPopup: async () => {
      const provider = new FacebookAuthProvider()
      try {
        const res = await signInWithPopup(auth, provider)

        return res
      } catch (error) {
        if (error.code === "auth/account-exists-with-different-credential") {
          alert(
            "you already have an account whit another provider, please choose the provider of this account"
          )
        } else {
          console.log(error)
        }
      }
    },

    loginGithubWithPopup: async () => {
      const provider = new GithubAuthProvider()
      try {
        const res = await signInWithPopup(auth, provider)

        return res
      } catch (error) {
        if (error.code === "auth/account-exists-with-different-credential") {
          alert(
            "you have already have an account whit another provider, please choose the provider of this account"
          )
        } else {
          console.log(error)
        }
      }
    },

    sendSignInLink: (email) => {
  
      const actionCodeSettings = {
        url: "http://localhost:5173",

        handleCodeInApp: true,
      }

      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          alert("an link to sign in was sent to your email!")
          window.localStorage.setItem("emailForSignIn", email)
        })
        .catch((error) => {
          console.error(error)
        })
    },

    verifyAndSignInWithLink: () => {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        console.log("entro al condicional")

        let email = window.localStorage.getItem("emailForSignIn")
        if (!email) {
          email = window.prompt("Please provide your email for confirmation")
        }

        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            window.localStorage.removeItem("emailForSignIn")
            console.log("entro a signnWithEmailLink")
            // set({ userLooged: result.user })

            console.log(result.user)
            console.log("user is new:", result.additonalUserInfo.isNewUser)
          })
          .catch((error) => {
            console.log(error.code)
          })
      } else {
        console.log("no entro a verfy")
      }
    },

    logout: async () => {
      try {
        await signOut(auth)
        set({ userLogged: null })
      } catch (error) {
        console.error("Error loggin out:", error)
      }
    },

    
  }
})

export const useEventStore=create((set,get)=>({
  click:false,
  setClick:()=>{
    set({click:!get().click})
    console.log(!get().click)

  },
}))

export default useAuthStore
