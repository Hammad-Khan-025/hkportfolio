import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faWhatsapp,
  faLinkedinIn,
  faInstagram,
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

  return (
    <footer className="bg-[#f0f9f8] border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 py-12 px-6 md:px-16">
        {/* ABOUT */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-[#0D6E6E] tracking-tighter">
            ABOUT ME
          </h1>
          <p className="text-gray-500 leading-relaxed max-w-xs">
            Frontend Developer with over one year of experience building modern,
            responsive, and user-friendly web applications.
          </p>
        </div>

        {/* CONTACT DETAILS */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#138086] font-serif">
            Contact Details
          </h3>
          <ul className="space-y-4">
            {/* Phone */}
            <li className="flex items-center gap-4 text-gray-500">
              <div className="w-8 h-8 flex items-center justify-center bg-[#E6F2F2] rounded text-[#138086]">
                <FontAwesomeIcon icon={faPhone} size="sm" />
              </div>
              <a
                href="tel:+923169343846"
                className="text-sm hover:text-[#0D6E6E]"
              >
                +92 316 9343846
              </a>
            </li>

            {/* Email */}
            <li className="flex items-center gap-4 text-gray-500">
              <div className="w-8 h-8 flex items-center justify-center bg-[#E6F2F2] rounded text-[#138086]">
                <FontAwesomeIcon icon={faEnvelope} size="sm" />
              </div>
              <a
                href="mailto:hk188540@gmail.com"
                className="text-sm hover:text-[#0D6E6E]"
              >
                hk188540@gmail.com
              </a>
            </li>

            {/* Location */}
            <li className="flex items-center gap-4 text-gray-500">
              <div className="w-8 h-8 flex items-center justify-center bg-[#E6F2F2] rounded text-[#138086]">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" />
              </div>
              <span className="text-sm">Abbottabad, KPK, Pakistan</span>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER & SOCIALS */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#138086] font-serif">
            Newsletter
          </h3>

          {/* Newsletter UI */}
          <div className="relative">
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex overflow-hidden rounded-md shadow-sm"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#E7F2F3] px-4 py-3 flex-grow outline-none text-gray-600 placeholder:text-gray-500 text-sm"
              />
              <button
                type="submit"
                className="bg-[#1E8585] px-4 text-white hover:bg-[#138086] transition-colors cursor-pointer"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>

            {success && (
              <p className="flex items-center gap-2 text-sm text-[#138086] absolute -top-6 end-0 ">
                <FontAwesomeIcon icon={faCheckCircle} />
                Thanks for subscribing!
              </p>
            )}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/hammad-khan1090/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-[#E6F2F2] text-[#138086] rounded hover:bg-[#0D6E6E] hover:text-white transition-all"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
            </a>

            <a
              href="https://wa.me/923169343846"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-[#E6F2F2] text-[#138086] rounded hover:bg-[#0D6E6E] hover:text-white transition-all"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="sm" />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-[#E6F2F2] text-[#138086] rounded hover:bg-[#0D6E6E] hover:text-white transition-all"
            >
              <FontAwesomeIcon icon={faFacebookF} size="sm" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-[#E6F2F2] text-[#138086] rounded hover:bg-[#0D6E6E] hover:text-white transition-all"
            >
              <FontAwesomeIcon icon={faInstagram} size="sm" />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-[#138086]">
        <p className="text-center text-white text-sm py-5">
          © 2026 Hammad Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
