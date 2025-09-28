import { Link } from "react-scroll";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());
  const [email, setEmail] = useState("");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = () => {
    if (isValidEmail(email)) {
      toast.success("Thank you for subscribing!");
      setEmail("");
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <footer className="text-white relative bg-[url('https://res.cloudinary.com/dxohwanal/image/upload/v1759037067/c2e2f213e1e503847422279b40868bb4_lp1rah.jpg')] bg-cover bg-center 2xl:py-10 xl:py-6 lg:py-4 md:py-4 py-2">
      <ToastContainer position="top-center" autoClose={3000} />

      {/* Top Section */}
      <div className="px-6 lg:px-24 py-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12 items-center text-center md:text-left">
          {/* Left Side: Logo + Navigation + Social */}
          <div className="flex-1 flex flex-col lg:flex-row lg:space-x-12 mb-12 lg:mb-0 items-center md:items-start">
            {/* Logo */}
            <div className="mb-6 lg:mb-0">
              <img
                src="/logo.png"
                alt="AI Logo"
                className="h-20 w-20 rounded-full"
                loading="lazy"
              />
            </div>

            {/* Navigation Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 flex-1">
              <nav className="flex flex-col space-y-4 font-semibold">
                <Link to="home" smooth offset={-80} duration={500} className="hover:text-[#65D800] transition-colors">
                  Home
                </Link>
                <Link to="benefits" smooth offset={-80} duration={500} className="hover:text-[#65D800] transition-colors">
                  Benefits
                </Link>
                <Link to="works" smooth offset={-80} duration={500} className="hover:text-[#65D800] transition-colors">
                  How It Works
                </Link>
              </nav>

              <nav className="flex flex-col space-y-4 font-semibold">
                <Link to="empowerai" smooth offset={-80} duration={500} className="hover:text-[#65D800] transition-colors">
                  EmpowerAI
                </Link>
                <Link to="integration" smooth offset={-80} duration={500} className="hover:text-[#65D800] transition-colors">
                  AI Integration
                </Link>
                <Link to="contact" smooth offset={-80} duration={500} className="hover:text-[#65D800] transition-colors">
                  AI Support & Contact
                </Link>
              </nav>

              {/* Social Icons */}
              <div className="flex flex-col mt-4 lg:mt-0 items-center md:items-start">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4 text-xl justify-center md:justify-start">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#65D800]">
                    <FaFacebookF />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#65D800]">
                    <FaTwitter />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#65D800]">
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#65D800]">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Subscribe Form */}
          <div className="flex-1 items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Get the freshest AI insights</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubscribe();
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
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
              Artificial Intelligence is shaping the future of industries, transforming the way we live, work, and connect.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-600" />

      {/* Bottom Section */}
      <div className="px-6 lg:px-24 py-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm space-y-4 md:space-y-0 text-center md:text-left">
        <nav className="flex flex-wrap gap-3 md:gap-6 justify-center md:justify-start text-gray-300">
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
        <p className="text-gray-300 text-center md:text-right">© {year} AI Corp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
