import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full">
      <div className="flex flex-col items-center p-4 sm:p-8 -mb-2">
        <nav
          className="w-full  flex items-center justify-between bg-gray-800 rounded-full relative md:py-2 py-0"
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
              className="h-20 w-20 rounded-full"
              loading="lazy"
            />
          </div>

          {/* Right Menu (desktop only) */}
          <div className="hidden lg:flex items-center space-x-10 absolute right-40 font-semibold">
            <Link
              to="features"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer text-white hover:text-[#65D800] transition-colors duration-200"
            >
              Features
            </Link>
            <Link
              to="integration"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer text-white hover:text-[#65D800] transition-colors duration-200"
            >
              Integrations
            </Link>
          </div>

          {/* Contact Button (desktop only) */}
          <div className="hidden lg:flex absolute right-6">
            <button
              className="px-6 py-2 bg-[#65D800] text-white font-semibold rounded-full shadow-lg transition-colors duration-200 cursor-pointer "
              aria-label="Contact"
            >
              Contact
            </button>
          </div>

          {/* Hamburger Menu Button (tablet & mobile) */}
          <div className="flex lg:hidden absolute right-6">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
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
        <div
          className={`w-full max-w-6xl flex-col items-center bg-white shadow-md rounded-xl mt-4 p-4 lg:hidden ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            to="home"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center py-2 text-gray-800 hover:text-[#65D800] rounded-lg cursor-pointer transition-colors duration-200"
          >
            Home
          </Link>
           <Link
            to="benefits"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center py-2 text-gray-800 hover:text-[#65D800] rounded-lg cursor-pointer transition-colors duration-200"
          >
            Benefits
          </Link>
          <Link
            to="works"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center py-2 text-gray-800 hover:text-[#65D800] rounded-lg cursor-pointer transition-colors duration-200"
          >
            How It Works
          </Link>
          <Link
            to="features"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center py-2 text-gray-800 hover:text-[#65D800] rounded-lg cursor-pointer transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            to="integration"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center py-2 text-gray-800 hover:text-[#65D800] rounded-lg cursor-pointer transition-colors duration-200"
          >
            Integrations
          </Link>
          {/* Smaller Contact button */}
          <button
            className="w-auto mt-4 px-8 py-2 bg-[#65D800] text-white font-semibold rounded-full shadow-lg transition-colors duration-200 cursor-pointer "
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;