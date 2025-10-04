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
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef(null);
  const rafIdRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      if (!lenisRef.current) {
        lenisRef.current = new Lenis({
          duration: 0.8,
          easing: (t) => t,
          smooth: true,
        });
      }

      const raf = (time) => {
        if (lenisRef.current) {
          lenisRef.current.raf(time);
        }
        rafIdRef.current = requestAnimationFrame(raf);
      };

      rafIdRef.current = requestAnimationFrame(raf);

      return () => {
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        if (lenisRef.current) {
          lenisRef.current.destroy();
          lenisRef.current = null;
        }
      };
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <div className="relative">
          <Navbar />

          {/* Wrapper to handle sticky footer reveal */}
          <div className="relative min-h-screen">
            {/* Main content */}
            <main className="relative z-10 bg-white">
              <Hero />
              <Benefits />
              <Works />
              <Empower />
              <Integration />
              <Contact />
            </main>

            {/* Sticky Footer Reveal */}
            <div className="relative">
              <Footer />
            </div>
          </div>

          <ScrollToTop />
        </div>
      )}
    </>
  );
}
