import { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ScrollToTop from "./components/ScrollToTop";
import Works from "./components/Works";
import Empower from "./components/Empower";
import Integration from "./components/Integration";


export default function App() {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      // Initialize Lenis smooth scrolling
      lenisRef.current = new Lenis({
        duration: 0.8,          // shorter duration = less smooth
        easing: (t) => t,       // linear easing
        smooth: true,
        direction: "vertical",
        gestureDirection: "vertical",
        infinite: false,
      });

      const raf = (time) => {
        lenisRef.current.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      return () => {
        if (lenisRef.current) lenisRef.current.destroy();
      };
    }
  }, [loading]);

  return (
    <>
      {loading && <Loader setLoading={setLoading} />}
      {!loading && (
        <div className="relative font-sans">
          <Navbar />
          <main>
            <Hero />
            <Benefits />
            <Works />
            <Empower />
            <Integration />
           
          </main>
           <ScrollToTop />
        </div>
      )}
    </>
  );
}
