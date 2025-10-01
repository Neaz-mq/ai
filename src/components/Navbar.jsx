import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full">
      <div className="flex flex-col items-center p-2 sm:p-4 md:p-8 -mb-2">
        <nav
          className="w-full flex items-center justify-between bg-gray-800 rounded-full relative py-0 sm:py-0 md:py-0 lg:py-0 xl:py-0 2xl:py-2"
          role="navigation"
          aria-label="Main Navigation"
        >
          {/* Left Menu (desktop only) */}
          <div className="hidden lg:flex items-center space-x-10 absolute left-24 font-semibold">
            <Link
              to="home"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer text-white hover:text-[#65D800] transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="benefits"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer text-white hover:text-[#65D800] transition-colors duration-200"
            >
              Benefits
            </Link>
            <Link
              to="works"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer text-white hover:text-[#65D800] transition-colors duration-200"
            >
              How It Works
            </Link>
          </div>

          {/* Logo Center */}
          <div className="flex items-center justify-center mx-auto">
            <img
              src="/logo.png"
              alt="AI Logo"
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-full"
              loading="lazy"
            />
          </div>

          {/* Right Menu (desktop only) */}
          <div className="hidden lg:flex items-center space-x-10 absolute right-40 font-semibold">
            <Link
              to="empowerai"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer text-white hover:text-[#65D800] transition-colors duration-200"
            >
              EmpowerAI
            </Link>
            <Link
              to="integration"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer text-white hover:text-[#65D800] transition-colors duration-200"
            >
              Integration
            </Link>
          </div>

          {/* Contact Button (desktop only) */}
          <div className="hidden lg:flex absolute right-6">
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="px-6 py-2 bg-[#65D800] text-white font-semibold rounded-full shadow-lg transition-colors duration-200 cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Hamburger Menu Button (tablet & mobile) */}
          <div className="flex lg:hidden absolute right-6">
            <button
              onClick={toggleMenu}
              className="focus:outline-none cursor-pointer"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile/Tablet Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full max-w-6xl flex flex-col items-center backdrop-blur-md bg-white/90 shadow-xl rounded-2xl mt-0 lg:hidden"
              style={{
                paddingTop: "2rem",
                paddingBottom: "2rem",
                paddingLeft: "1.25rem",
                paddingRight: "1.25rem",
              }} // equal top/bottom padding
            >
              <div className="flex flex-col w-full space-y-1">
                {[
                  { to: "home", label: "Home" },
                  { to: "benefits", label: "Benefits" },
                  { to: "works", label: "How It Works" },
                  { to: "empowerai", label: "EmpowerAI" },
                  { to: "integration", label: "Integration" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.25 }}
                    className="w-full"
                  >
                    <Link
                      to={item.to}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full text-center py-2 text-base font-medium text-gray-700 hover:text-[#65D800] hover:bg-gray-100/60 rounded-lg cursor-pointer transition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Contact Button at same distance from bottom as Home from top */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.25 }}
                className="mt-6 mb-3"
              >
                <Link
                  to="contact"
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-auto mt-4 px-8 py-3 bg-gradient-to-r from-[#65D800] to-green-500 text-white font-semibold rounded-full shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer text-center"
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
