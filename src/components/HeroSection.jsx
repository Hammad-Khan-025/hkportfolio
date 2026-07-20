import React from "react";
import heroImage from "../assets/heroImage.png";
import personImage from "../assets/my-pic.png";
import CV from "../assets/Hammadkhan-CV.pdf";

const HeroSection = () => {
  const whatsappNumber = "+923169343846";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Hammad-Khan-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const technologies = ["React.js", "Next.js", "JavaScript", "Tailwind CSS"];

  return (
    <section className="relative w-full flex items-center justify-center py-12 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#b9d8d6] via-[#e3f2f1] to-[#f8fcfc] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
      {/* Main Container */}
      <div className="relative z-10 max-w-6xl 2xl:max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center pt-16 md:pt-8">
        {/* Left Content */}
        <div className="w-full md:col-span-7 flex flex-col justify-center text-left order-2 md:order-1">
          {/* Active Status Tag */}
          <div className="inline-flex items-center gap-2 bg-[#138086]/10 dark:bg-[#2dd4bf]/10 text-[#138086] dark:text-[#2dd4bf] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-6 w-fit border border-[#138086]/20 dark:border-[#2dd4bf]/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for New Opportunities
          </div>

          {/* Headline */}
          <h1 className="text-[#062628] dark:text-white text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 sm:mb-6 leading-tight">
            FRONTEND
            <span className="text-[#138086] dark:text-[#2dd4bf]">
              {" "}
              DEVELOPER
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-[#062628]/80 dark:text-gray-200 text-lg sm:text-2xl font-semibold mb-6 sm:mb-8">
            Building Modern & Responsive Web Applications
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-base sm:text-lg max-w-lg">
            I help startups and businesses build fast, responsive and
            user-friendly web applications using React.js and modern frontend
            technologies.
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10 max-w-lg">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-white dark:hover:bg-gray-700 hover:border-[#138086]/40 dark:hover:border-[#2dd4bf]/50 dark:hover:text-white transition-all duration-200 cursor-default select-none"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={openWhatsApp}
              className="px-6 py-2 sm:py-3 cursor-pointer bg-[#138086] hover:bg-[#10696e] dark:bg-[#138086] dark:hover:bg-[#1499a0] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#138086]/30 active:scale-95 transition-all text-sm sm:text-base flex items-center gap-2"
            >
              Hire Me
            </button>

            <button
              onClick={downloadCV}
              className="px-6 py-2 sm:py-3 cursor-pointer border-2 border-[#138086]/30 dark:border-[#2dd4bf]/40 text-[#138086] dark:text-[#2dd4bf] font-bold rounded-xl bg-white dark:bg-gray-900 hover:border-[#138086] dark:hover:border-[#2dd4bf] hover:bg-[#138086]/5 dark:hover:bg-[#2dd4bf]/10 active:scale-95 transition-all text-sm sm:text-base"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:col-span-5 flex items-center justify-center order-1 md:order-2 mb-8 md:mb-0">
          <div className="relative group max-w-[280px] sm:max-w-[340px] md:max-w-none">
            {/* Decorative Glow */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#138086] to-[#ddeef0] dark:from-[#138086] dark:to-[#2dd4bf] opacity-20 dark:opacity-40 blur-lg group-hover:opacity-40 dark:group-hover:opacity-60 transition-opacity" />

            {/* Image Frame */}
            <div className="relative rounded-full p-4 bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/60 dark:border-gray-700/60 shadow-xl">
              <img
                src={personImage}
                alt="Hammad Khan"
                className="object-cover w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white dark:border-gray-800 shadow-md group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
