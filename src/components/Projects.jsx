import React, { useState } from "react";
import orbitPulseImg from "../assets/project-images/orbitPulseImg.PNG";
import printflyImg from "../assets/project-images/printflyImg.PNG";
import projectsImg from "../assets/project-images/projectsImg.PNG";
import TicTacImg from "../assets/project-images/TicTacImg.PNG";
import databaseImg from "../assets/project-images/databaseImg.PNG";
import ecommerceImg from "../assets/project-images/ecommerceImg.PNG";
import todoImg from "../assets/project-images/todoImg.PNG";
import currencyImg from "../assets/project-images/currencyImg.PNG";
import therapyImg from "../assets/project-images/therapyImg.PNG";
import investmentImg from "../assets/project-images/investmentImg.PNG";
import landingImg1 from "../assets/project-images/landingImg1.PNG";
import landingImg2 from "../assets/project-images/landingImg2.PNG";

const projects = [
  {
    id: "1",
    title: "Landing page Tailwind",
    link: "https://hammad-khan-025.github.io/Tailwind-Landing/",
    imageUrl: landingImg1,
  },
  {
    id: "2",
    title: "Landing page Bootstrap",
    link: "https://hammad-khan-025.github.io/Landing/Landing.html",
    imageUrl: landingImg2,
  },
  {
    id: "3",
    title: "Investment Calculator",
    link: "https://investment-calc-psi.vercel.app/",
    imageUrl: investmentImg,
  },
  {
    id: "4",
    title: "Therapy Nails Spa",
    link: "https://hammad-khan-025.github.io/TherapyNails/public/",
    imageUrl: therapyImg,
  },
  {
    id: "5",
    title: "Currency App",
    link: "https://hammad-khan-025.github.io/CurrencyApp/",
    imageUrl: currencyImg,
  },
  {
    id: "6",
    title: "Todo App",
    link: "https://hammad-khan-025.github.io/TodoApp/",
    imageUrl: todoImg,
  },
  {
    id: "7",
    title: "Ecommerce Website",
    link: "https://hammad-khan-025.github.io/E-commerce/",
    imageUrl: ecommerceImg,
  },
  {
    id: "8",
    title: "RealTime Database",
    link: "https://realtime-db-ten.vercel.app/",
    imageUrl: databaseImg,
  },
  {
    id: "9",
    title: "Tic Tac Toe Game",
    link: "https://tic-tac-toe-cyan-zeta-64.vercel.app/",
    imageUrl: TicTacImg,
  },
  {
    id: "10",
    title: "Projects Dashboard",
    link: "https://dashboard-khaki-nu.vercel.app/",
    imageUrl: projectsImg,
  },
  {
    id: "11",
    title: "Printfly",
    link: "https://printfly.vercel.app/",
    imageUrl: printflyImg,
  },
  {
    id: "12",
    title: "Orbit Pulse",
    link: "https://orbitpulse365.vercel.app/",
    imageUrl: orbitPulseImg,
  },
];

const RecentProjects = () => {
  const [showAll, setShowAll] = useState(false);

  // Projects to display based on state
  const displayedProjects = showAll
    ? [...projects].reverse()
    : [...projects].reverse().slice(0, 6);

  return (
    <section className="bg-[#f0f9f8] py-20 px-6">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-10 bg-[#2d6a61]"></div>
          <span className="text-[#138086] font-medium tracking-widest text-sm uppercase">
            Portfolio
          </span>
          <div className="h-[1px] w-10 bg-[#2d6a61]"></div>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a4d45]">
          Recent Projects
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {displayedProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg flex items-center justify-center overflow-hidden group cursor-pointer"
          >
            {/* Project Image */}
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-contain drop-shadow-2xl rounded-t-xl transition-transform duration-500 group-hover:scale-105"
              />
              <h1 className="bg-[#aedbdf]/40 w-full text-center py-3 rounded-b-xl tracking-wide font-semibold text-[#1b3b37] text-sm md:text-base">
                {project.title}
              </h1>
            </div>

            {/* Overlay with "View Project" */}
            <div className="absolute inset-0 bg-[#138086]/90 flex items-center justify-center opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 rounded-lg">
              <span className="text-white border px-6 py-2 rounded-md font-semibold text-sm md:text-base">
                View Project
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Toggle See More / See Less */}
      {projects.length > 6 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[#138086] border border-[#138086] py-2 px-5 rounded-lg font-bold text-xs sm:text-sm transition-all active:scale-95 cursor-pointer hover:bg-[#138086] hover:text-white"
          >
            {showAll ? "See Less Projects..." : "See More Projects..."}
          </button>
        </div>
      )}
    </section>
  );
};

export default RecentProjects;
