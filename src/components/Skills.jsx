export default function SkillsSection() {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "Javascript",
    "ReactJS",
    "NextJS",
    "Firebase",
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-10">
        <div className="flex justify-center sm:justify-start items-center gap-3 mb-2">
          <div className="h-[1px] w-8 bg-[#2d6a61]"></div>
          <span className="text-teal-700 font-semibold uppercase tracking-wider text-sm">
            My Skills
          </span>
          <div className="h-[1px] w-8 bg-[#2d6a61]"></div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#134e4a] text-center sm:text-left mb-10 sm:mb-6">
          Technical Skills
        </h2>
        <p className="text-gray-600 max-w-2xl hidden sm:block">
          I specialize in building modern, responsive, and user-friendly web
          interfaces using the latest frontend technologies. My experience
          includes creating reusable UI components, integrating APIs, managing
          state, and deploying scalable applications with clean and maintainable
          code.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div key={skill} className="flex items-center justify-center">
            <div className="relative w-28 sm:w-36 h-28 sm:h-36 rounded-full border-2 md:border-4 border-[#138086] flex items-center justify-center bg-[#A1CCCF]/20">
              <div className="absolute inset-0 rounded-full border-2 md:border-4 border-[#138086] border-l-transparent border-b-transparent " />
              <span className="text-[#138086] font-semibold text-sm sm:text-lg">
                {skill}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
