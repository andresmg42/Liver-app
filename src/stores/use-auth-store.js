import {create} from 'zustand'
import { onAuthStateChanged,signInWithPopup,signOut,GoogleAuthProvider,FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase.config';



const provider= new GoogleAuthProvider();

const provider_fc= new FacebookAuthProvider();

const useAuthStore=create((set)=>{
    const observeAuthState=()=>{
        onAuthStateChanged(auth,(user)=>{
            user ? set({userLooged:user}): set({userLooged:null});
        });
    };

    observeAuthState();
return{
    userLooged:null,

    loginGoogleWithPopUp: async ()=>{
        try {
          const res=  await signInWithPopup(auth,provider);
          return res;
            
        } catch (error) {
            console.error("Error loggin in :",error);
        }
    },

    loginFacebookWithPopup: async ()=>{
        try {
            const res= await signInWithPopup(auth,provider_fc);
            const credential = FacebookAuthProvider.credentialFromResult(res);
            const token = credential.accessToken;
            return res;
        } catch (error) {
           // Handle Errors here.
           const errorCode = error.code;
           const errorMessage = error.message;
           // The email of the user's account used.
           const email = error.customData.email;
           // The AuthCredential type that was used.
           const credential = FacebookAuthProvider.credentialFromError(error);

           console.log({errorCode,errorMessage,email,credential})
        }
    },

    logout:async ()=>{
        try {
            await signOut(auth);
            set({userLogged:null})    
            
        } catch (error) {
            console.error('Error loggin out:',error);
        }
    }
}
});

export default useAuthStore;