import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaFire,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export default function SkillsSection() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      rating: 5,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      rating: 5,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      rating: 4,
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill />,
      rating: 5,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      rating: 5,
    },
    {
      name: "React.js",
      icon: <FaReact />,
      rating: 5,
    },
    {
      name: "Next.js",
      icon: <RiNextjsFill />,
      rating: 4,
    },
    {
      name: "Firebase",
      icon: <FaFire />,
      rating: 4,
    },
  ];

  return (
    <section className=" bg-[#f0f9f8]">
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-20">
        {/* Heading */}
        <div className="mb-14">
          <div className="flex justify-center sm:justify-start items-center gap-3 mb-3">
            <div className="h-[2px] w-10 bg-[#138086]" />
            <span className="uppercase tracking-[3px] text-sm font-semibold text-[#138086]">
              My Skills
            </span>
            <div className="h-[2px] w-10 bg-[#138086]" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#134e4a] text-center sm:text-left mb-5">
            Technical Skills
          </h2>

          <p className="text-gray-500 max-w-2xl text-center sm:text-left text-sm sm:text-base leading-relaxed">
            I build modern, responsive, and user-friendly web applications using
            the latest frontend technologies with clean, maintainable code.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-white rounded-2xl border border-[#138086]/30 hover:border-[#138086] px-2 sm:px-6 py-5 sm:py-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-1 sm:mb-5">
                <div className="text-5xl text-[#138086] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {skill.icon}
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-center text-base sm:text-lg font-semibold text-[#134e4a]">
                {skill.name}
              </h3>

              {/* Stars */}
              <div className="flex justify-center mt-5 gap-1">
                {[...Array(5)].map((_, index) =>
                  index < skill.rating ? (
                    <FaStar key={index} className="text-[#2d6a61] text-sm" />
                  ) : (
                    <FaRegStar key={index} className="text-gray-300 text-sm" />
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
