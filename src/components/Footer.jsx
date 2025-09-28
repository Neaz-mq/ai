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
      <div className="px-6 lg:px-24 py-12 grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2  gap-12">
        {/* Left Side */}
        <div>
          <img
            src="/logo.png"
            alt="AI Logo"
            className="h-20 w-20 rounded-full mb-6 ml-[-0.6rem]"
            loading="lazy"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Left Column Pages */}
            <nav aria-label="Primary Footer Navigation" className="flex flex-col space-y-4 font-semibold">
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
            </nav>

            {/* Right Column Pages */}
            <nav aria-label="AI Footer Navigation" className="flex flex-col space-y-4 font-semibold">
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
                AI Integration
              </Link>
              <Link
                to="ai-research"
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:text-[#65D800] transition-colors"
              >
                AI Research
              </Link>
              <Link
                to="contact"
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:text-[#65D800] transition-colors"
              >
                AI Support & Contact
              </Link>
            </nav>

            {/* Social Icons Column */}
            <div className="flex flex-col space-y-4" aria-label="Social Media Links">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-6 text-xl">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-[#65D800]"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="hover:text-[#65D800]"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-[#65D800]"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[#65D800]"
                >
                  <FaLinkedinIn />
                </a>
             
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get the freshest AI insights</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubscribe();
            }}
            className="flex flex-col sm:flex-row gap-4"
            aria-label="Subscribe to newsletter"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email here"
              className="px-4 py-2 w-full sm:flex-1 bg-transparent border border-gray-400 text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#65D800]"
              required
            />
            <button
              type="submit"
              className="bg-[#65D800] px-6 py-2 font-semibold rounded-md hover:bg-green-500 transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>

          <p className="text-sm mt-4 text-gray-200 leading-7 tracking-wide">
            Artificial Intelligence is shaping the future of industries, transforming the way we live, work, and connect. From powering smart assistants to revolutionizing healthcare, AI continues to unlock new opportunities every day.
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-600" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
        {/* Legal Links */}
        <nav aria-label="Footer Legal Links" className="flex flex-wrap gap-3 md:gap-6 text-gray-300">
          <a href="/terms" className="hover:text-[#65D800]">Website Terms</a>
          <span className="hidden md:block">|</span>
          <a href="/privacy" className="hover:text-[#65D800]">Privacy Policy</a>
          <span className="hidden md:block">|</span>
          <a href="/accessibility" className="hover:text-[#65D800]">Accessibility Statement</a>
          <span className="hidden md:block">|</span>
          <a href="/transparency" className="hover:text-[#65D800]">AI Transparency</a>
          <span className="hidden md:block">|</span>
          <a href="/supplier-code" className="hover:text-[#65D800]">Supplier Code</a>
        </nav>

        {/* Year */}
        <p className="text-gray-300 text-center md:text-right">© {year} AI Corp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
