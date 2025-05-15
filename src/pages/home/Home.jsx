import useAuthStore from "../../stores/use-auth-store";
import { useEffect } from "react";
import WindowLiverHome from "../WindowLiverHome";
import { NavLink } from "react-router";
import Header from "../../layout/header/Header";
import ModelCard from "../../models-3d/liver_cancer/common/ModelCard";
import { LiverCancerFinal } from "../../models-3d/liver_cancer/desease/cancer/LiverCancerFinal";
import GenericHomeCard from "../../models-3d/liver_cancer/common/pages/experiment/GenericHomeCard";
import { Fever } from "../../models-3d/liver_cancer/simptoms/cancer/Fever";
import {Xrays} from "../../models-3d/liver_cancer/treatment/Xrays"
import {Alcohol} from "../../models-3d/liver_cancer/recomendations/Alcohol"
const Home = () => {
  const { userLooged, verifyAndSignInWithLink } = useAuthStore();

  useEffect(() => {
    verifyAndSignInWithLink();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen w-full relative">
        {/* Background Video */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="videos/login.mp4" type="video/mp4" />
        </video> */}

        <img src="background-images\surgeryroom.png" alt="backgroundimg" className="fixed top-0 left-0 w-full h-full object-cover -z-10" />

        {/* 3D Viewer Section */}
        <div className="md:w-[153vh] w-full h-[50vh] md:h-[100vh] max-h-[75vh]  flex flex-col mx-auto ">
          <div className="w-full bg-black/50">
            <h1 className="text-xl md:text-2xl font-bold text-center text-white">
              View Screen Mode: 3D Human Liver
            </h1>
          </div>

          <div className="w-full flex md:h-full h-[50vh] ">
            <WindowLiverHome />
          </div>
        </div>

        {/* Liver Diseases Section */}
        <div className="w-full max-w-6xl mx-auto px-4 mt-12 md:mt-20">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10 text-white">
            Look at Any 3D Liver Diseases
          </h1>

          {/* Single disease card centered on all screens */}

          {/* <div className="flex justify-center items-center"> */}

            <div className="grid md:grid-cols-2 grid-col-1 gap-4  place-items-center md:mx-40  ">
            <GenericHomeCard  
            title='Liver Cancer' 
            model={<ModelCard model={<LiverCancerFinal scale={5} home={true}/>} />}
            path='/cancer'
            />

            <GenericHomeCard  
            title='Symptoms' 
            model={<ModelCard model={<Fever scale={3.5} home={true}/>} />}
            path='/symptoms'
            />

            <GenericHomeCard  
            title='Treatment' 
            model={<ModelCard model={<Xrays scale={3} home={true}/>} />}
            path='/treatment'
            />

            <GenericHomeCard  
            title='Recomendations' 
            model={<ModelCard model={<Alcohol scale={3.5} home={true}/>} />}
            path='/recomendations'
            />

          </div>


          {/* </div> */}
          
        </div>

        {/* Available For Section */}
        <div className="w-full max-w-6xl mx-auto px-4 my-12 md:my-20">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10 text-white">
            Available For
          </h1>

          <div className="w-full mx-auto relative bg-white/15 rounded-lg px-4 py-6 md:py-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 w-full place-items-center gap-4 md:gap-6">
              <div className="flex flex-col items-center text-center">
                <img
                  src="operative-sistems/android.svg"
                  alt="android"
                  className="w-12 h-12 md:w-16 md:h-16"
                />
                <h2 className="text-lg md:text-xl text-white font-bold mt-2">
                  Android
                </h2>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  src="/operative-sistems/windows.svg"
                  alt="windows"
                  className="w-12 h-12 md:w-16 md:h-16"
                />
                <h2 className="text-lg md:text-xl text-white font-bold mt-2">
                  Windows
                </h2>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  src="/operative-sistems/apple.svg"
                  alt="apple"
                  className="w-12 h-12 md:w-16 md:h-16"
                />
                <h2 className="text-lg md:text-xl text-white font-bold mt-2">
                  MacOS
                </h2>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  src="/operative-sistems/ipad.svg"
                  alt="iPad"
                  className="w-12 h-12 md:w-16 md:h-16"
                />
                <h2 className="text-lg md:text-xl text-white font-bold mt-2">
                  iPad
                </h2>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 md:mt-16 text-white">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
              Choose Your Plan!
            </h1>
            <h2 className="text-sm md:text-lg font-bold text-center mt-4">
              Try out our 3-day risk-free trial. No payment details required.
            </h2>

            <button className="bg-white hover:bg-gray-200 text-black py-2 px-6 rounded-lg text-base md:text-lg font-semibold transition flex items-center space-x-2 mx-auto mt-6 focus:ring-2 focus:ring-gray-400 focus:outline-none">
              <span>Try It For Free</span>
              <img
                src="/header/flecha.svg"
                alt="arrow"
                className="w-4 h-4 md:w-5 md:h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
