const stats = [
  { value: "01+", label: "YEARS EXPERIENCE" },
  { value: "20+", label: "PROJECTS DONE" },
  { value: "08+", label: "HAPPY CLIENTS" },
  { value: "05+", label: "GET AWARDS" },
];

export default function Experience() {
  return (
    <section className="bg-gradient-to-b from-[#E7F2F3]/70 via-[#D0E6E7]/40 to-[#B8D9DB]/60 py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-10 bg-[#2d6a61]"></div>
          <span className="text-[#138086] font-medium tracking-widest text-sm uppercase">working</span>
          <div className="h-[1px] w-10 bg-[#2d6a61]"></div>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a4d45]">Experience</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#A1CCCF]/50 border border-[#dbeff2] rounded-xl text-center py-12 md:py-20 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-4xl font-bangla font-semibold text-[#0a2b2e]">
              {item.value}
            </h2>
            <p className="mt-3 text-xs md:text-sm uppercase font-semibold tracking-widest text-[#138086]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
