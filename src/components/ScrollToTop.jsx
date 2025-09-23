import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import Lenis from "@studio-freight/lenis";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [lenis] = useState(() => new Lenis({ smooth: true }));

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);

    // Lenis RAF loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lenis]);

  const scrollToTop = () => {
    lenis.scrollTo(0, { duration: 1.2, easing: (t) => t });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#65D800] text-white cursor-pointer shadow-lg transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      } `}
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTop;