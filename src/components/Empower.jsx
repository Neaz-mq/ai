import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";

gsap.registerPlugin(Physics2DPlugin);

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const bottomVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Empower = () => {
  const flairContainerRef = useRef(null);

useEffect(() => {
  const container = flairContainerRef.current;
  if (!container) return;

  const particleCount = 400; // adjust as needed

  const flairs = Array.from({ length: particleCount }).map((_, i) => {
    const div = document.createElement("div");
    div.className =
      "absolute w-6 h-6 sm:w-10 sm:h-10 bg-no-repeat bg-contain opacity-0 pointer-events-none";
    div.style.backgroundImage = `url(https://assets.codepen.io/16327/flair-${gsap.utils.random(
      2,
      35,
      1
    )}.png)`;

    // Spread particles evenly across the horizontal range with a little randomness
    const leftPercent = 10 + i * ((70 - 10) / particleCount) + gsap.utils.random(0, 1.5);
    div.style.left = `${leftPercent}%`;

    container.appendChild(div);
    return div;
  });

  const animateFlair = (flair, delay = 0) => {
    gsap.set(flair, {
      opacity: 0,
      top: "100%",
      rotation: gsap.utils.random(-180, 180),
    });

    gsap.to(flair, {
      opacity: 1,
      duration: 0.6,
      delay,
      onComplete: () => {
        gsap.to(flair, {
          physics2D: {
            velocity: gsap.utils.random(20, 300),
            angle: gsap.utils.random(200, 440),
            gravity: 200,
          },
          rotation: "random(-360,360)",
          duration: gsap.utils.random(15, 25),
          ease: "power1.out",
          onComplete: () => {
            animateFlair(flair, gsap.utils.random(0.5, 2));
          },
        });
      },
    });
  };

  flairs.forEach((flair, i) => animateFlair(flair, i * 0.05));

  return () => flairs.forEach((f) => f.remove());
}, []);


  return (
    <section
      id="empowerai"
      className="w-full bg-white py-16 md:py-24 text-gray-800 overflow-x-hidden relative"
      aria-labelledby="empowerai-heading"
    >
      {/* Section Heading */}
      <header className="text-center mb-16 px-4">
        <motion.h2
          id="empowerai-heading"
          className="text-xl 2xl:text-5xl xl:text-3xl lg:text-3xl md:text-2xl font-extrabold text-gray-900 leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          EmpowerAI <span className="text-black">Building</span>{" "}
          <span className="text-gray-500 font-light">Inclusive Communities</span>{" "}
          <span className="text-black">with AI</span>
        </motion.h2>
      </header>

      {/* Top Section */}
      <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 gap-6 px-4 md:px-12 mb-20 w-full">
        {/* Green Left Panel */}
        <aside className="bg-[#65D800] text-white rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center">
          {["Productivity", "Automation", "Innovation"].map((text, idx) => (
            <div key={idx} className="flex flex-col items-center mb-10 last:mb-0 text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">{text}</h3>
              <div className="w-12 h-12 bg-white text-[#65D800] flex items-center justify-center rounded-full text-2xl font-bold">
                ↓
              </div>
            </div>
          ))}
        </aside>

        {/* Middle White Card */}
        <motion.article
          className="bg-white rounded-3xl shadow-lg border p-6 md:p-10 flex flex-col justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariant}
        >
          {[
            { title: "Introduction to Artificial Intelligence", desc: "Futuristic tech fonts, dark background with neon accents (blue/purple)" },
            { title: "Applications of AI", desc: "Healthcare, finance, automation, and sustainability initiatives" },
            { title: "AI & Human Collaboration", desc: "Creating solutions that are inclusive, ethical, and community-driven" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <h3 className="text-lg md:text-2xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
              <div className="w-16 h-1 bg-[#65D800] mt-1"></div>
            </div>
          ))}
        </motion.article>

        {/* Right Robot Card */}
        <motion.figure
          className="relative rounded-3xl overflow-hidden h-[220px] sm:h-[280px] md:h-[320px] lg:h-auto group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariant}
        >
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1758794297/11_gtaywb.jpg"
            alt="AI Robot illustration showing accessibility and inclusion"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex justify-between overflow-hidden pointer-events-none">
            <div className="w-0 shrink-0 bg-white/30 backdrop-blur-md h-full transition-all duration-500 ease-out group-hover:w-1/2"></div>
            <div className="w-0 shrink-0 bg-white/30 backdrop-blur-md h-full transition-all duration-500 ease-out group-hover:w-1/2"></div>
          </div>
          <figcaption className="absolute inset-0 flex items-center justify-center px-6 text-white text-center z-10">
            <h3 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#65D800] leading-none pr-3">&</h3>
            <div className="flex flex-col items-start">
              <h4 className="text-xl sm:text-2xl font-bold text-[#65D800]">Accessibility</h4>
              <div className="flex items-center space-x-2">
                <span className="text-sm sm:text-base tracking-wide text-white/90">Inclusion</span>
                <div className="w-8 sm:w-10 h-0.5 bg-white"></div>
              </div>
            </div>
          </figcaption>
        </motion.figure>
      </div>

      {/* Bottom Section */}
      <div className="relative px-4 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center w-full">
        {/* Floating particles container */}
        <div ref={flairContainerRef} className="absolute inset-0 z-0 pointer-events-none"></div>

        {/* Heading */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={bottomVariant}
          className="relative z-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-gray-900">Empowering </span>
            <span className="text-gray-500">Communities for </span>
            <span className="text-gray-900">a Better Future</span>
          </h2>
        </motion.header>

        {/* List of items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={bottomVariant}
          className="relative z-10 p-6 md:p-8 bg-gray-100 rounded-3xl"
        >
          <ul className="space-y-8">
            {[
              "Empowering Underserved Communities",
              "Promoting Environmental Sustainability",
              "Fostering Inclusive Growth",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#65D800] text-white w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold">
                    0{idx + 1}
                  </div>
                  <p className="text-sm sm:text-base text-gray-800">{item}</p>
                </div>
                <span className="text-gray-600 text-xl sm:text-2xl">→</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Robot Head Image */}
        <motion.figure
          className="relative z-10 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={bottomVariant}
        >
          <motion.img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1758794337/12_udpjmq.jpg"
            alt="Futuristic AI Robot Head"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            loading="lazy"
            whileHover={{
              scale: 1.08,
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.figure>
      </div>
    </section>
  );
};

export default Empower;
