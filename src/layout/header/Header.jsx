import React from 'react'

const Header = () => {
    return (
        <div className="w-full flex items-center justify-center relative overflow-hidden">
            
            <img
                src="src/assets/header/background-header-removebg-preview.png"
                alt="header background"
                className="absolute inset-0 h-[80vh] md:h-[90vh] lg:h-[100vh] w-full object-cover z-0"
            />

           
            <header id="hero" className="w-full h-[80vh] md:h-[90vh] lg:h-[100vh] bg-black/50 text-white flex items-center justify-center z-10">
                <div className="text-center px-4">
                   
                    <img
                        src="src/assets/header/logo_figma.svg"
                        alt="logo header"
                        className="mx-auto mb-4 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80"
                    />

                    
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
                        The World's Most Advanced 3D <br className="hidden sm:block" />
                        Anatomy Diseases Platform
                    </h1>

                    <div className="flex space-x-20 justify-center mt-20">
                        
                        <button className="bg-white hover:bg-[#797777] text-black py-2 px-6 rounded-lg text-base md:text-lg font-semibold transition text-sm md:text-base lg:text-lg xl:text-xl md:py-3 md:px-6 lg:py-4 lg:px-8 flex items-center space-x-2">
                            <span>Try It For Free</span>
                            <img
                                src="src/assets/header/flecha.svg"
                                alt="arrow"
                                className="w-4 h-4 md:w-6 md:h-6" 
                            />
                        </button>

                        
                        <button className="bg-white hover:bg-[#797777] text-black py-2 px-6 rounded-lg text-base md:text-lg font-semibold transition text-sm md:text-base lg:text-lg xl:text-xl md:py-3 md:px-6 lg:py-4 lg:px-8 w-[25vh]">
                            Contact Us
                        </button>
                    </div>



                </div>
            </header>
        </div>
    )
}

export default Header