import { Link } from "react-scroll";
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());
  const [email, setEmail] = useState("");

  // Email validation
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = () => {
    if (isValidEmail(email)) {
      toast.success("Thank you for subscribing!");
      setEmail(""); // reset input
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <footer
      className="text-white relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dxohwanal/image/upload/v1759037067/c2e2f213e1e503847422279b40868bb4_lp1rah.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Toast container */}
      <ToastContainer position="top-center" autoClose={3000} />

      {/* Top Section */}
      <div className=" px-6 lg:px-24 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <img
            src="/logo.png"
            alt="AI Logo"
            className="h-20 w-20  rounded-full mb-6 ml-[-0.6rem]"
            loading="lazy"
          />

          <div className="grid grid-cols-2 gap-8">
            {/* Left Column Pages */}
            <div className="flex flex-col space-y-4 font-semibold">
              <Link
                to="home"
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:text-[#65D800] transition-colors"
              >
                Home
              </Link>
              <Link
                to="benefits"
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:text-[#65D800] transition-colors"
              >
                Benefits
              </Link>
              <Link
                to="works"
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:text-[#65D800] transition-colors"
              >
                How It Works
              </Link>
            </div>

            {/* Right Column Pages */}
            <div className="flex flex-col space-y-4 font-semibold">
              <Link
                to="empowerai"
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:text-[#65D800] transition-colors"
              >
                EmpowerAI
              </Link>
              <Link
                to="integration"
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:text-[#65D800] transition-colors"
              >
                Integration
              </Link>
              <Link
                to="contact"
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:text-[#65D800] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Icons (aligned under "Home") */}
          <div className="flex space-x-6 mt-8 text-xl pl-[2px]">
            <FaFacebookF className="cursor-pointer hover:text-[#65D800]" />
            <FaTwitter className="cursor-pointer hover:text-[#65D800]" />
            <FaInstagram className="cursor-pointer hover:text-[#65D800]" />
            <FaLinkedinIn className="cursor-pointer hover:text-[#65D800]" />
            <FaYoutube className="cursor-pointer hover:text-[#65D800]" />
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Get the freshest AI insights
          </h3>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email here"
              className="px-4 py-2 w-full bg-transparent border border-gray-400 text-white placeholder-white rounded-l-md focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-[#65D800] px-6 py-2 font-semibold rounded-r-md hover:bg-green-500 transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </div> 

          {/* Extended Paragraph */}
          <p className="text-sm mt-4 text-gray-200 leading-7 tracking-wide">
            Artificial Intelligence is shaping the future of industries,
            transforming the way we live, work, and connect. From powering smart
            assistants to revolutionizing healthcare, AI continues to unlock new
            opportunities every day. Businesses are harnessing AI to drive
            innovation and efficiency, while researchers push the boundaries of
            what machines can achieve.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
        {/* Legal Links */}
        <div className="flex flex-wrap gap-3 md:gap-6">
          <span className="cursor-pointer hover:text-[#65D800]">
            Website Terms
          </span>
          <span className="hidden md:block">|</span>
          <span className="cursor-pointer hover:text-[#65D800]">
            Privacy Policy
          </span>
          <span className="hidden md:block">|</span>
          <span className="cursor-pointer hover:text-[#65D800]">
            Accessibility Statement
          </span>
          <span className="hidden md:block">|</span>
          <span className="cursor-pointer hover:text-[#65D800]">
            AI Transparency
          </span>
          <span className="hidden md:block">|</span>
          <span className="cursor-pointer hover:text-[#65D800]">
            Supplier Code
          </span>
        </div>

        {/* Year */}
        <p className="text-gray-300">© {year} AI Corp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
