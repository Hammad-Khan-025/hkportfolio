"use client";

import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Orbit Pulse",
    description:
      "A modern business dashboard featuring responsive layouts, reusable components, and a clean user interface.",
    imageUrl: "/project-images/orbitPulseImg.png",
    live: "https://orbitpulse365.vercel.app/",
    technologies: ["React.js", "Tailwind", "JavaScript"],
  },
  {
    id: 2,
    title: "PrintFly",
    description:
      "A responsive printing service website with elegant visuals and a seamless browsing experience.",
    imageUrl: "/project-images/printflyImg.png",
    live: "https://printfly.vercel.app/",
    technologies: ["React.js", "Tailwind", "CSS"],
  },
  {
    id: 3,
    title: "Projects Dashboard",
    description:
      "A responsive dashboard for managing projects with reusable UI components and interactive layouts.",
    imageUrl: "/project-images/projectsImg.PNG",
    live: "https://dashboard-khaki-nu.vercel.app/",
    technologies: ["React", "Tailwind"],
  },
  {
    id: 4,
    title: "Realtime Database",
    description:
      "A CRUD application integrated with Firebase Realtime Database for instant synchronization.",
    imageUrl: "/project-images/databaseImg.PNG",
    live: "https://realtime-db-ten.vercel.app/",
    technologies: ["React.js", "Firebase", "Bootstrap"],
  },
  {
    id: 5,
    title: "E-Commerce Website",
    description:
      "A modern ecommerce website designed with responsive layouts and engaging product sections.",
    imageUrl: "/project-images/ecommerceImg.PNG",
    live: "https://hammad-khan-025.github.io/E-commerce/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    title: "Currency Converter",
    description:
      "A responsive currency converter that provides fast and accurate exchange calculations.",
    imageUrl: "/project-images/currencyImg.PNG",
    live: "https://hammad-khan-025.github.io/CurrencyApp/",
    technologies: ["React.js", "REST API", "CSS"],
  },
  {
    id: 7,
    title: "Todo App",
    description:
      "A task management application supporting CRUD operations and local data persistence.",
    imageUrl: "/project-images/todoImg.PNG",
    live: "https://hammad-khan-025.github.io/TodoApp/",
    technologies: ["React.js", "Local Storage", "CSS"],
  },
  {
    id: 8,
    title: "Investment Calculator",
    description:
      "An investment calculator with dynamic calculations and a responsive user interface.",
    imageUrl: "/project-images/InvestmentImg.PNG",
    live: "https://investment-calc-psi.vercel.app/",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    id: 9,
    title: "Therapy Nails Spa",
    description:
      "A business website with elegant layouts, service pages and responsive design.",
    imageUrl: "/project-images/therapyImg.PNG",
    live: "https://hammad-khan-025.github.io/TherapyNails/public/",
    technologies: ["Bootstrap", "JavaScript", "CSS"],
  },
  {
    id: 10,
    title: "Landing Page",
    description:
      "A clean landing page built with Tailwind CSS focusing on performance and responsiveness.",
    imageUrl: "/project-images/landingImg1.PNG",
    live: "https://hammad-khan-025.github.io/Tailwind-Landing/",
    technologies: ["Tailwind", "HTML", "JavaScript"],
  },
  {
    id: 11,
    title: "Bootstrap Landing",
    description:
      "A responsive marketing landing page with reusable Bootstrap components.",
    imageUrl: "/project-images/landingImg2.PNG",
    live: "https://hammad-khan-025.github.io/Landing/Landing.html",
    technologies: ["Bootstrap", "CSS", "JavaScript"],
  },
  {
    id: 12,
    title: "Tic Tac Toe",
    description:
      "A classic Tic Tac Toe game developed with React featuring smooth gameplay.",
    imageUrl: "/project-images/TicTacImg.PNG",
    live: "https://tic-tac-toe-cyan-zeta-64.vercel.app/",
    technologies: ["React.js", "JavaScript", "CSS"],
  },
];

export default function RecentProjects() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="py-12 sm:py-24 bg-[#f0f9f8] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#138086] dark:bg-[#2dd4bf]" />

            <span className="uppercase tracking-[3px] text-sm font-semibold text-[#138086] dark:text-[#2dd4bf]">
              Portfolio
            </span>

            <div className="w-10 h-[2px] bg-[#138086] dark:bg-[#2dd4bf]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#134e4a] dark:text-white">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-7 text-sm sm:text-base">
            Modern, responsive web applications crafted with clean code and
            intuitive user experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 md:gap-14">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="
                group
                bg-white
                dark:bg-gray-800/80
                rounded-3xl
                overflow-hidden
                border
                border-[#138086]/10
                dark:border-gray-700/60
                shadow-[0_20px_45px_rgba(19,128,134,0.15)]
                dark:shadow-none
                hover:-translate-y-2
                transition-all
                duration-500
                flex
                flex-col
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="
                    w-full
                    h-60
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105 
                  "
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 dark:group-hover:bg-black/50 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#134e4a] dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-6 tracking-wide line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#138086]/10 dark:bg-[#2dd4bf]/10 text-[#138086] dark:text-[#2dd4bf] text-[11px] font-semibold border border-transparent dark:border-[#2dd4bf]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Styled Call to Action Button */}
                <div className="pt-6 mt-auto border-t border-gray-100 dark:border-gray-700/60">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#138086] hover:bg-[#10696e] dark:bg-[#138086] dark:hover:bg-[#1499a0] text-white px-5 py-3 rounded-xl font-bold text-[13px] tracking-wide transition-all duration-300 active:scale-[0.98] hover:shadow-lg hover:shadow-[#138086]/20 cursor-pointer"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        {projects.length > 6 && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="
                px-6 sm:px-8
                py-2 sm:py-3 text-sm
                rounded-xl
                border-2
                border-[#138086]
                dark:border-[#2dd4bf]
                text-[#138086]
                dark:text-[#2dd4bf]
                font-semibold
                transition-all
                duration-300
                hover:bg-[#138086]
                dark:hover:bg-[#2dd4bf]
                hover:text-white
                dark:hover:text-gray-950
                hover:shadow-lg
                active:scale-95 cursor-pointer
              "
            >
              {showAll ? "Show Less" : "View All Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
