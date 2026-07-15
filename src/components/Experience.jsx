"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  FaBriefcase,
  FaFolderOpen,
  FaSmileBeam,
  FaLaptopCode,
  FaMobileAlt,
  FaPuzzlePiece,
} from "react-icons/fa";

const stats = [
  {
    value: "1+",
    label: "Years Experience",
    icon: <FaBriefcase />,
  },
  {
    value: "20+",
    label: "Projects Completed",
    icon: <FaFolderOpen />,
  },
  {
    value: "8+",
    label: "Happy Clients",
    icon: <FaSmileBeam />,
  },
  {
    value: "8+",
    label: "Technologies",
    icon: <FaLaptopCode />,
  },
  {
    value: "100%",
    label: "Responsive Websites",
    icon: <FaMobileAlt />,
  },
  {
    value: "50+",
    label: "UI Components",
    icon: <FaPuzzlePiece />,
  },
];

export default function Experience() {
  return (
    <section className="py-12 sm:py-24 bg-[#fbfdfd] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#138086]" />
            <span className="uppercase tracking-[3px] text-sm font-semibold text-[#138086]">
              Experience
            </span>
            <div className="w-10 h-[2px] bg-[#138086]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#134e4a]">
            My Journey in Numbers
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-500 text-sm sm:text-base leading-relaxed">
            Building modern, responsive web applications with clean code and
            beautiful user experiences.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          centeredSlides={true}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={0}
          speed={700}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
        >
          {stats.map((item) => (
            <SwiperSlide key={item.label} className="flex justify-center py-12">
              <div className="kite relative w-60 h-60 rounded-3xl bg-white">
                <div className="absolute inset-3 rounded-2xl border border-[#138086]/10"></div>

                <div className="absolute inset-0 -rotate-45 flex flex-col items-center justify-center px-6">
                  <div className="w-20 h-20 rounded-full bg-[#138086]/10 flex items-center justify-center text-[#138086] text-3xl mb-5">
                    {item.icon}
                  </div>

                  <p className="uppercase tracking-[2px] text-xs text-gray-600 text-center font-semibold">
                    {item.label}
                  </p>

                  <h3 className="mt-2 text-4xl font-bold text-[#134e4a]">
                    {item.value}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
