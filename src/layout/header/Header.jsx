import React from "react";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-center  relative overflow-hidden">
      
      <header
        id="hero"
        className="w-full min-h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh] text-white z-10 "
      >
        <div className="text-center px-4  h-full mt-10 ">
          <img
            src="/header/logo_figma.svg"
            alt="logo header"
            className="mx-auto  w-20 h-20 md:w-40 md:h-40 lg:w-60 lg:h-60"
          />

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
            The World's Most Advanced 3D <br className="hidden sm:block" />
            Anatomy Diseases Platform
          </h1>

          <div className="flex space-x-4 md:space-x-20 justify-center mt-10">
            <button
              className="bg-white hover:bg-[#797777] text-black rounded-lg font-semibold transition flex items-center space-x-2
                text-sm py-2 px-4
                md:text-base md:py-3 md:px-6
                lg:text-lg lg:py-3 lg:px-8"
            >
              <span>Try It For Free</span>
              <img
                src="/header/flecha.svg"
                alt="arrow"
                className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
              />
            </button>

            <button
              className="bg-white hover:bg-[#797777] text-black rounded-lg font-semibold transition
                text-sm py-2 px-4
                md:text-base md:py-3 md:px-6
                lg:text-lg lg:py-3 lg:px-8"
            >
              Contact Us
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
