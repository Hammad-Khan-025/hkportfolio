import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
  faCheckCircle,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faWhatsapp,
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setSuccess(true);
    setEmail("");

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#f0f9f8] dark:bg-gray-950 border-t border-gray-200/60 dark:border-gray-800/80 font-sans transition-colors duration-300 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#138086]/10 dark:bg-[#2dd4bf]/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#138086]/10 dark:bg-[#2dd4bf]/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto pt-16 pb-12 px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: About (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#138086] dark:bg-[#2dd4bf]" />
              <h1 className="text-2xl font-black text-[#062628] dark:text-white tracking-wider">
                HAMMAD
                <span className="text-[#138086] dark:text-[#2dd4bf]">
                  {" "}
                  KHAN
                </span>
              </h1>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm max-w-sm">
              Passionate Frontend Developer specializing in crafting fast,
              responsive, and interactive web experiences using React.js,
              Next.js, and modern UI frameworks.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5 pt-2">
              {[
                {
                  icon: faLinkedinIn,
                  href: "https://www.linkedin.com/in/hammad-khan1090/",
                },
                { icon: faGithub, href: "https://github.com/hammad-khan-025" },
                { icon: faWhatsapp, href: "https://wa.me/923169343846" },
                { icon: faFacebookF, href: "https://www.facebook.com/" },
                { icon: faInstagram, href: "https://www.instagram.com/" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-white dark:bg-gray-900 text-[#138086] dark:text-[#2dd4bf] border border-[#138086]/20 dark:border-gray-800 rounded-xl hover:bg-[#138086] hover:text-white dark:hover:bg-[#2dd4bf] dark:hover:text-gray-950 hover:border-transparent transition-all duration-300 shadow-sm hover:scale-110"
                >
                  <FontAwesomeIcon icon={social.icon} size="sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-lg font-bold text-[#062628] dark:text-white font-serif tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#138086] dark:hover:text-[#2dd4bf] transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-[10px] text-[#138086]/60 dark:text-[#2dd4bf]/60 group-hover:translate-x-1 transition-transform duration-200"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details (5 cols - Glass Container) */}
          <div className="lg:col-span-5 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md p-6 lg:p-7 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-[#062628] dark:text-white font-serif tracking-wide">
              Get in Touch
            </h3>

            <ul className="space-y-4">
              <li className="flex items-center gap-3.5 text-gray-600 dark:text-gray-300 group">
                <div className="w-9 h-9 flex items-center justify-center bg-[#138086]/10 dark:bg-[#2dd4bf]/10 rounded-lg text-[#138086] dark:text-[#2dd4bf] group-hover:scale-105 transition-transform">
                  <FontAwesomeIcon icon={faPhone} size="sm" />
                </div>
                <a
                  href="tel:+923169343846"
                  className="text-sm font-medium hover:text-[#138086] dark:hover:text-[#2dd4bf] transition-colors"
                >
                  +92 316 9343846
                </a>
              </li>

              <li className="flex items-center gap-3.5 text-gray-600 dark:text-gray-300 group">
                <div className="w-9 h-9 flex items-center justify-center bg-[#138086]/10 dark:bg-[#2dd4bf]/10 rounded-lg text-[#138086] dark:text-[#2dd4bf] group-hover:scale-105 transition-transform">
                  <FontAwesomeIcon icon={faEnvelope} size="sm" />
                </div>
                <a
                  href="mailto:hk188540@gmail.com"
                  className="text-sm font-medium hover:text-[#138086] dark:hover:text-[#2dd4bf] transition-colors"
                >
                  hk188540@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3.5 text-gray-600 dark:text-gray-300 group">
                <div className="w-9 h-9 flex items-center justify-center bg-[#138086]/10 dark:bg-[#2dd4bf]/10 rounded-lg text-[#138086] dark:text-[#2dd4bf] group-hover:scale-105 transition-transform">
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" />
                </div>
                <span className="text-sm font-medium">
                  Abbottabad, KPK, Pakistan
                </span>
              </li>
            </ul>

            {/* Fancy Inline Newsletter */}
            <div className="pt-2">
              <div className="relative">
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex items-center bg-white dark:bg-gray-950 p-1.5 rounded-xl border border-gray-200 dark:border-gray-800 focus-within:ring-2 focus-within:ring-[#138086] dark:focus-within:ring-[#2dd4bf] transition-all"
                >
                  <input
                    type="email"
                    required
                    placeholder="Subscribe to newsletter..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent px-3 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-xs sm:text-sm outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#138086] hover:bg-[#10696e] dark:bg-[#138086] dark:hover:bg-[#1499a0] text-white px-2 sm:px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-1 sm:gap-2 transition-all cursor-pointer active:scale-95 shrink-0"
                  >
                    <span>Join</span>
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="text-[10px]"
                    />
                  </button>
                </form>

                {success && (
                  <p className="flex items-center gap-1.5 text-xs text-[#138086] dark:text-[#2dd4bf] absolute -bottom-6 left-1 animate-fade-in font-medium">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    Thanks for subscribing!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT STRIP */}
      <div className="border-t border-gray-200/80 dark:border-gray-900 bg-white/40 dark:bg-gray-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400">
          <p>© 2026 Hammad Khan. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{" "}
            <span className="text-teal-600 dark:text-[#2dd4bf]">React</span> &{" "}
            <span className="text-teal-600 dark:text-[#2dd4bf]">
              Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
