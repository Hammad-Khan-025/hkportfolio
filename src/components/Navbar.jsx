import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState("#home"); // default active tab

  const NAVBAR_HEIGHT = 88; // px, 5.5rem
  const whatsappNumber = "+923169343846";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);

      // Update active tab on scroll
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(navLinks[i].href);
        if (section && window.scrollY + NAVBAR_HEIGHT >= section.offsetTop) {
          setActiveTab(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle nav link click
  const handleNavClick = (href) => {
    setMenuOpen(false);

    const target = document.querySelector(href);
    if (!target) return;

    const targetY = target.getBoundingClientRect().top + window.scrollY;

    const offset = targetY < window.scrollY ? -NAVBAR_HEIGHT : 0;

    window.scrollTo({
      top: targetY + offset,
      behavior: "smooth",
    });

    setActiveTab(href); // Set clicked tab as active
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white/80 backdrop-blur-md border-b border-gray-200/60 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 sm:h-24 px-6 sm:px-8 lg:px-10 ">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-16 sm:w-20 cursor-pointer"
            onClick={() => handleNavClick("#home")}
          />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`relative font-medium tracking-wide transition-colors duration-200 px-1 cursor-pointer ${
                  activeTab === link.href
                    ? "text-[#134e4a]"
                    : "text-[#138086] hover:text-[#134e4a]"
                }`}
              >
                {link.name}
                {/* Border bottom for active tab */}
                {activeTab === link.href && (
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-[#138086] w-full transition-all`}
                    style={{
                      transform: `translateX(0)`,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={openWhatsApp}
            className="
    hidden md:inline-flex
    items-center
    justify-center
    gap-3
    
    bg-[#138086]
    hover:bg-[#10696d]
    text-white
    font-semibold
    px-6
    py-3
    rounded-xl
    transition-all
    duration-300
    hover:shadow-lg
    cursor-pointer
  "
          >
            Let's talk
            <FaArrowRight />
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-[#138086] text-2xl"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <img src={logo} alt="Logo" className="w-16" />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-xl text-gray-600"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`text-base font-semibold px-3 py-2 rounded-md w-full text-left transition-colors duration-200 ${
                activeTab === link.href
                  ? "bg-[#d5eeec] text-[#134e4a]"
                  : "text-[#138086] hover:text-[#134e4a] hover:bg-[#f0f9f8]"
              }`}
            >
              {link.name}
            </button>
          ))}

          {/* Mobile CTA */}
          <button
            onClick={openWhatsApp}
            className="mt-6 bg-[#138086] hover:bg-[#134e4a] text-white py-3 rounded-md font-bold uppercase text-xs active:scale-95 cursor-pointer w-full"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
