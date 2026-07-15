import React, { useState } from "react";
import contactImg from "../assets/contact-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FaPaperPlane } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className=" bg-[#fbfdfd]">
      <div className="flex flex-col md:flex-row items-center justify-between p-8 md:py-20 max-w-6xl mx-auto ">
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-2 mb-12 sm:mb-8">
            <div className="flex justify-center sm:justify-start items-center gap-2 mt-8 sm:mt-0">
              <span className="h-px w-6 bg-teal-700"></span>
              <span className="text-teal-700 font-semibold uppercase tracking-wider text-sm">
                Contact
              </span>
              <span className="h-px w-6 bg-teal-700"></span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#134e4a] text-center sm:text-left">
              Get In Touch
            </h2>
          </div>

          <form className="space-y-4 relative" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name:"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 md:p-4 bg-[#f0f9f8] border border-gray-100 text-sm sm:text-base rounded focus:outline-none focus:ring-2 focus:ring-teal-600 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email:"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 md:p-4 bg-[#f0f9f8] border border-gray-100 text-sm sm:text-base rounded focus:outline-none focus:ring-2 focus:ring-teal-600 transition"
            />

            <textarea
              name="message"
              placeholder="Write Message:"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 md:p-4 bg-[#f0f9f8] border border-gray-100 text-sm sm:text-base rounded focus:outline-none focus:ring-2 focus:ring-teal-600 transition"
            ></textarea>

            <button
              type="submit"
              className="
    w-full
    bg-[#138086]
    hover:bg-[#10696d]
    text-white
    font-semibold
    py-3 sm:py-4 text-sm sm:text-base
    rounded-xl
    transition-all
    duration-300
    hover:shadow-lg
    hover:-translate-y-0.5
    active:scale-95
    flex
    items-center
    justify-center
    gap-3
    cursor-pointer
  "
            >
              <FaPaperPlane className="" />
              Send Message
            </button>

            <p
              className={`flex items-center gap-2 text-xs md:text-sm text-[#138086] absolute -top-6 transition-opacity duration-300 ${
                success ? "opacity-100" : "opacity-0"
              }`}
            >
              <FontAwesomeIcon icon={faCheckCircle} />
              Your message has been sent successfully!
            </p>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative mt-12 md:mt-0 md:ms-20">
          <div className="absolute md:w-96 md:h-96 bg-[#E7F2F3] rounded-full -z-10 translate-x-10"></div>

          <img
            src={contactImg}
            alt="Contact person"
            className="w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
