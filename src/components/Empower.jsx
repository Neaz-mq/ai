import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);
  const imagesRef = useRef([]);
  const runningRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    let w = 0;
    let h = 0;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    const PARTICLE_COUNT = 350;
    const IMAGE_COUNT = 12;
    const flairBase = "https://assets.codepen.io/16327/flair-";
    const flairExt = ".png";

    const rand = (min, max) => Math.random() * (max - min) + min;
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const loadImages = async () => {
      const promises = [];
      for (let i = 2; i <= IMAGE_COUNT + 1; i++) {
        const src = `${flairBase}${i}${flairExt}`;
        const img = new Image();
        img.crossOrigin = "anonymous";
        const p = new Promise((res) => {
          img.onload = () => res(img);
          img.onerror = () => {
            const fallback = new Image();
            fallback.src =
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAfq3kcAAAAAASUVORK5CYII=";
            fallback.onload = () => res(fallback);
          };
        });
        img.src = src;
        promises.push(p);
      }
      imagesRef.current = await Promise.all(promises);
    };

    const resize = () => {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      w = canvas.clientWidth || canvas.parentElement.clientWidth || window.innerWidth;
      h = canvas.clientHeight || canvas.parentElement.clientHeight || 200;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticle = (index) => {
      const img = pick(imagesRef.current);
      const baseSize = rand(14, 34);
      return {
        img,
        x: rand(0.05 * w, 0.95 * w),
        y: h + rand(0, h * 0.6),
        size: baseSize * rand(0.85, 1.15),
        vx: rand(-10, 10),
        vy: rand(-180, -60) * 0.5,
        gravity: rand(60, 240),
        rotation: rand(0, Math.PI * 2),
        vRot: rand(-0.8, 0.8),
        alpha: 0,
        life: rand(10, 22),
        age: 0,
        index,
        delay: rand(0, 3),
      };
    };

    const initParticles = () => {
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, (_, i) => createParticle(i));
    };

    let last = performance.now();
    const tick = (now) => {
      const dt = Math.max(0, Math.min(0.05, (now - last) / 1000));
      last = now;
      ctx.clearRect(0, 0, w, h);

      particlesRef.current.forEach((p, i) => {
        if (p.delay > 0) {
          p.delay -= dt;
          p.alpha = Math.min(1, p.alpha + dt * 0.5);
        } else {
          p.age += dt;
          p.vy += p.gravity * dt;
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.rotation += p.vRot * dt;

          if (p.age < 0.6) p.alpha = Math.min(1, p.alpha + dt * 2);
          else if (p.age > p.life - 1.6) p.alpha = Math.max(0, p.alpha - dt * 0.6);
          else p.alpha = Math.min(1, p.alpha + dt * 0.2);
        }

        if (p.x + p.size > -50 && p.x - p.size < w + 50 && p.y - p.size < h + 200) {
          ctx.save();
          ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.drawImage(p.img, -p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }

        if (p.y - p.size > h + 200 || p.x < -200 || p.x > w + 200 || p.age > p.life + 2) {
          const newP = createParticle(p.index);
          newP.x = rand(0.05 * w, 0.95 * w);
          newP.y = h + rand(0, h * 0.6);
          particlesRef.current[i] = newP;
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    let canceled = false;
    (async () => {
      await loadImages();
      if (canceled) return;
      resize();
      initParticles();
      setTimeout(() => {
        last = performance.now();
        runningRef.current = true;
        rafRef.current = requestAnimationFrame(tick);
      }, 30);
    })();

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(rafRef.current);
      else if (!runningRef.current) {
        last = performance.now();
        runningRef.current = true;
        rafRef.current = requestAnimationFrame(tick);
      }
    });

    return () => {
      canceled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <section
      id="empowerai"
      className="w-full bg-white py-16 md:py-24 text-gray-800 overflow-hidden relative"
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
        {/* Left Panel */}
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

        {/* Middle Card */}
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

        {/* Right Card */}
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

      {/* Bottom Section with Particles */}
      <div className="relative px-4 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center w-full">
        {/* Particle Canvas */}
        <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none z-0">
          <canvas ref={canvasRef} className="w-full h-full" style={{ willChange: "transform, opacity" }} />
        </div>

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

        {/* List */}
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

        {/* Robot Image */}
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
