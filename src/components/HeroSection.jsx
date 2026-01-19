import React from 'react';
import heroImage from '../assets/heroImage.png';
import personImage from '../assets//my-pic.png';

const HeroSection = () => {

    const whatsappNumber = "+923169343846";

const openWhatsApp = () => {
  window.open(`https://wa.me/${whatsappNumber}`, "_blank");
};

  return (
    <section 
      className="relative min-h-[calc(100vh-5.5rem)] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat  py-5 md:py-20 md:px-6"
      style={{ 
        // Replace 'your-bg-image.png' with your actual file path
        backgroundImage: `url(${heroImage})` 
      }}
    >
      {/* Main Card Container */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-stretch overflow-hidden pt-22">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-3/4 p-10 md:p-20 flex flex-col justify-center">
          <h2 className="text-[#062628] text-4xl md:text-5xl font-bold mb-3 font-bangla">
            Hello, I'm <span className="text-[#117379]">Hammad Khan</span> 
          </h2>
          <h3 className="text-[#117379] text-xl md:text-2xl font-bold mb-6">
            Frontend Developer
          </h3>
          <p className="text-gray-500 leading-relaxed mb-10 text-base md:text-lg max-w-md">
            I create responsive, user-friendly web interfaces using HTML, CSS, Tailwind, JavaScript, and React. Passionate about solving problems and bringing ideas to life.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-4 sm:px-6 py-2 sm:py-3 cursor-pointer border-2 border-[#138086] text-[#138086] font-bold rounded-xl hover:bg-[#f0fdfa] transition-all text-sm sm:text-base active:scale-95">
              Download CV
            </button>
            <button
              onClick={openWhatsApp}
              className="px-6 sm:px-8 py-2 sm:py-3 cursor-pointer bg-[#138086] text-white font-bold rounded-xl hover:bg-[#16615c] transition-all shadow-lg shadow-teal-900/20 text-sm sm:text-base active:scale-95"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right: Person Image */}
        <div className="w-full md:w-1/2 relative  flex items-center justify-center">
          {/* Transparent or cut-out image of the person */}
          <img 
            src={personImage}
            alt="Hammad Khan" 
            className="object-cover border border-[40px] border-[#E7F2F3] rounded-full"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;