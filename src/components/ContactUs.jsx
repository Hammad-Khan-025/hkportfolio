import React, { useState } from "react";
import contactImg from "../assets/contact-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FaPaperPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1800));

    setLoading(false);
    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 2500);
  };

  return (
    <div className="bg-[#fbfdfd] dark:bg-gray-950 transition-colors duration-300">
      <div className="flex flex-col md:flex-row items-center justify-between p-8 md:py-20 max-w-6xl mx-auto">
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-2 mb-12 sm:mb-8">
            <div className="flex justify-center sm:justify-start items-center gap-2 mt-8 sm:mt-0">
              <span className="h-px w-6 bg-teal-700 dark:bg-[#2dd4bf]"></span>
              <span className="text-teal-700 dark:text-[#2dd4bf] font-semibold uppercase tracking-wider text-sm">
                Contact
              </span>
              <span className="h-px w-6 bg-teal-700 dark:bg-[#2dd4bf]"></span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#134e4a] dark:text-white text-center sm:text-left">
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
              className="w-full p-3 md:p-4 bg-[#f0f9f8] dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base rounded-xl focus:outline-none focus:ring-2 focus:ring-[#138086] dark:focus:ring-[#2dd4bf] transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email:"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 md:p-4 bg-[#f0f9f8] dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base rounded-xl focus:outline-none focus:ring-2 focus:ring-[#138086] dark:focus:ring-[#2dd4bf] transition"
            />

            <textarea
              name="message"
              placeholder="Write Message:"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 md:p-4 bg-[#f0f9f8] dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base rounded-xl focus:outline-none focus:ring-2 focus:ring-[#138086] dark:focus:ring-[#2dd4bf] transition"
            ></textarea>

            <motion.button
              type="submit"
              disabled={loading || success}
              whileHover={!loading && !success ? { scale: 1.03 } : {}}
              whileTap={!loading && !success ? { scale: 0.96 } : {}}
              className="
relative
w-full
h-12 sm:h-14
overflow-hidden
rounded-xl
bg-[#138086]
hover:bg-[#10696d]
text-white
font-semibold
flex
items-center
justify-center
transition-all
duration-300 cursor-pointer
disabled:cursor-not-allowed
"
            >
              <AnimatePresence mode="wait">
                {/* Default */}
                {!loading && !success && (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 text-sm sm:text-base"
                  >
                    <FaPaperPlane />
                    Send Message
                  </motion.div>
                )}

                {/* Flying Plane */}
                {loading && (
                  <motion.div
                    key="loading"
                    className="absolute flex items-center gap-3"
                  >
                    <motion.div
                      initial={{
                        x: -80,
                        y: 15,
                        rotate: -15,
                        opacity: 1,
                      }}
                      animate={{
                        x: 220,
                        y: -40,
                        rotate: 15,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 1.4,
                        ease: "easeInOut",
                      }}
                    >
                      <FaPaperPlane className="text-xl" />
                    </motion.div>

                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm sm:text-base"
                    >
                      Sending...
                    </motion.span>
                  </motion.div>
                )}

                {/* Success */}
                {success && (
                  <motion.div
                    key="success"
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}
                    className="flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faCheckCircle} />
                    Message Delivered
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative mt-12 md:mt-0 md:ms-20">
          <div className="absolute md:w-96 md:h-96 bg-[#E7F2F3] dark:bg-gray-900/60 border border-transparent dark:border-gray-800 rounded-full -z-10 translate-x-10 transition-colors duration-300"></div>

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
