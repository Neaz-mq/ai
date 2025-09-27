import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// --- Icon SVGs ---
const LocationIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#10B981">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 7 12 7s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
  </svg>
);

const PhoneIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#10B981">
    <path d="M6.62 10.79a15.466 15.466 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 
      1.12.37 2.33.57 3.57.57.55 0 1 .45 
      1 1V20c0 .55-.45 1-1 1C10.61 21 
      3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 
      0 1 .45 1 1 0 1.24.2 2.45.57 
      3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const EmailIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#10B981">
    <path d="M2.01 3L2 19c0 1.1.9 2 
      2 2h16c1.1 0 2-.9 
      2-2V5c0-1.1-.9-2-2-2H4c-1.11 
      0-1.99.9-1.99 2zm17.99 
      0l-8 5-8-5h16zm0 
      16l-8-5-8 5V5.99l8 
      5 8-5V19z"/>
  </svg>
);

const formVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } },
};

const Contact = () => {
  const contactDetails = [
    { type: "location", title: "Jimbaran, Bali", value: "Jl. Raya Kampus Unud, Jimbaran, Bali - 80361" },
    { type: "location", title: "Pakuwon City, Surabaya", value: "Jl. Kejawen Putih Indah, Mulyorejo, SBY - 60112" },
    { type: "phone", title: "Call Us", value: "+1 (555) 123-4567" },
    { type: "email", title: "Email Us", value: "support@agency.com" },
  ];

  const getIcon = (type, props) => {
    switch (type) {
      case "location": return <LocationIcon {...props} />;
      case "phone": return <PhoneIcon {...props} />;
      case "email": return <EmailIcon {...props} />;
      default: return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      toast.error("Please fill up all fields carefully!");
    } else {
      toast.success("Message sent successfully!");
      form.reset();
    }
  };

  return (
    <section className="relative w-full bg-[#0B4F4A] text-white font-inter overflow-hidden">
      <div className="pt-20 relative z-20 space-y-12 px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Header */}
        <div className="xl:col-span-2 max-w-2xl mt-10 mx-auto xl:mx-0 text-center xl:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-lg mt-2">
            We'd love to hear from you!<br />
            Whether you have questions, feedback, or need support,<br />
            our team is here to help and respond promptly.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-0">
          {/* Left: Address */}
          <div className="space-y-10">
            {contactDetails.filter(d => d.type === "location").map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-white mt-1 flex-shrink-0">
                  {getIcon(item.type, { className: "w-6 h-6" })}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-300">{item.title}</h4>
                  <p className="text-gray-400">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Middle: Phone & Email */}
          <div className="space-y-10">
            {contactDetails.filter(d => d.type === "phone" || d.type === "email").map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-white mt-1 flex-shrink-0">
                  {getIcon(item.type, { className: "w-6 h-6" })}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-300">{item.title}</h4>
                  <a
                    href={item.type === "phone" ? `tel:${item.value}` : `mailto:${item.value}`}
                    className="text-gray-400 hover:text-green-400 transition"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Form */}
          <motion.div
            className="p-8 md:p-24 rounded-3xl bg-green-950/70 backdrop-blur-sm shadow-2xl border border-indigo-900/50 mt-[-10.625rem] mx-1"
            variants={formVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Your Detail</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-sm md:text-base text-gray-300">Name *</label>
                  <input type="text" name="name" className="w-full bg-transparent border-b border-green-400 focus:border-indigo-400 py-2 text-white text-base md:text-lg" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm md:text-base text-gray-300">Email *</label>
                  <input type="email" name="email" className="w-full bg-transparent border-b border-green-400 focus:border-indigo-400 py-2 text-white text-base md:text-lg" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm md:text-base text-gray-300">Subject *</label>
                <input type="text" name="subject" className="w-full bg-transparent border-b border-green-400 focus:border-indigo-400 py-2 text-white text-base md:text-lg" />
              </div>

              <div className="space-y-1">
                <label className="text-sm md:text-base text-gray-300">Comments / Questions *</label>
                <textarea name="message" rows="4" className="w-full bg-transparent border-b border-green-400 focus:border-indigo-400 py-2 text-white text-base md:text-lg resize-none" />
              </div>

              <button type="submit" className="w-full px-6 py-3 text-lg md:text-xl font-semibold rounded-xl bg-green-600 hover:bg-green-700 transition cursor-pointer">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map */}
      <div className="relative w-full h-[34.375rem] lg:h-[31.25rem] mt-[-9.375rem] z-10">
        <iframe
          src="https://maps.google.com/maps?q=Jl.%20Raya%20Kampus%20Unud%2C%20Jimbaran%2C%20Bali%20-%2080361&t=&z=15&ie=UTF8&iwloc=&output=embed"
          title="Google Map of Jl. Raya Kampus Unud, Jimbaran, Bali - 80361"
          className="w-full h-full border-0 grayscale opacity-90"
          allowFullScreen
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </section>
  );
};

export default Contact;
