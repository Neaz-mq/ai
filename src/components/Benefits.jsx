import { useEffect, useMemo, useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const cardsWrapperRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false); // NEW
  const revealTimeoutRef = useRef(null);

  const images = useMemo(
    () => [
      {
        src: "https://res.cloudinary.com/dxohwanal/image/upload/v1758778918/2.1_z5yqri.jpg",
        alt: "Person experiencing virtual reality",
      },
      {
        src: "https://res.cloudinary.com/dxohwanal/image/upload/v1758779002/2.2_m4ql3j.jpg",
        alt: "Person using VR outdoors",
      },
      {
        src: "https://res.cloudinary.com/dxohwanal/image/upload/v1758779033/2.3_gkzihy.jpg",
        alt: "Person enjoying VR on a couch",
      },
    ],
    []
  );

  // Preload images — set imagesLoaded when every image finishes loading
  useEffect(() => {
    let mounted = true;
    let loaded = 0;
    const imageElements = images.map(({ src }) => {
      const img = new Image();
      img.src = src;
      img.decoding = "async";
      img.onload = () => {
        loaded++;
        if (mounted && loaded === images.length) {
          // small timeout gives the browser a chance to paint decoded images
          // before we run heavy layout/animation setup
          revealTimeoutRef.current = setTimeout(() => {
            setImagesLoaded(true);
          }, 40);
        }
      };
      img.onerror = () => {
        // treat errored images as loaded to avoid blocking
        loaded++;
        if (mounted && loaded === images.length) {
          revealTimeoutRef.current = setTimeout(() => {
            setImagesLoaded(true);
          }, 40);
        }
      };
      return img;
    });

    return () => {
      mounted = false;
      imageElements.forEach((img) => (img.onload = null));
      if (revealTimeoutRef.current) clearTimeout(revealTimeoutRef.current);
    };
  }, [images]);

  // Main GSAP + ScrollTrigger logic (useLayoutEffect to avoid paint flicker)
  useLayoutEffect(() => {
    if (!imagesLoaded) return;

    // Hide wrapper until everything is set by GSAP to avoid flicker
    const wrapper = cardsWrapperRef.current;
    if (wrapper) wrapper.style.visibility = "hidden";

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".gallery-card", cardsWrapperRef.current);
      const wrapperEl = cardsWrapperRef.current;

      if (!wrapperEl || cards.length === 0) {
        if (wrapper) wrapper.style.visibility = "visible";
        return;
      }

      // Ensure wrapper is as tall as viewport (keeps pin behaviour stable)
      wrapperEl.style.minHeight = "100vh";

      // Set initial styles (use transforms and autoAlpha for smoother GPU compositing)
      gsap.set(cards, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        willChange: "transform, opacity",
        transform: "translateZ(0)",
      });

      gsap.set(cards[0], { autoAlpha: 1, yPercent: 0, force3D: true });
      if (cards.length > 1) {
        gsap.set(cards.slice(1), { autoAlpha: 0, yPercent: 20, force3D: true });
      }

      // Create pin — end depends on number of slides
      const totalScroll = (cards.length - 1) * window.innerHeight + 1;

      // Pin wrapper (pinSpacing true by default, but behavior preserved)
      ScrollTrigger.create({
        trigger: wrapperEl,
        pin: true,
        start: "top top",
        end: `+=${totalScroll}`,
        scrub: true,
        // optimize by lowering priority of refresh when not necessary
        refreshPriority: -1,
      });

      // Timeline for transitions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperEl,
          start: "top top",
          end: `+=${totalScroll}`,
          scrub: 0.5,
        },
      });

      const scrollPerSlide = 1 / Math.max(cards.length - 1, 1);

      cards.forEach((card, i) => {
        if (i === 0) return;

        // bring next card in
        tl.to(
          cards[i],
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: scrollPerSlide,
            ease: "power3.out",
            force3D: true,
            willChange: "transform, opacity",
          },
          i * scrollPerSlide
        );

        // move previous card out
        tl.to(
          cards[i - 1],
          {
            autoAlpha: 0,
            yPercent: -20,
            duration: scrollPerSlide,
            ease: "power3.in",
            force3D: true,
            willChange: "transform, opacity",
          },
          i * scrollPerSlide
        );
      });

      // small refresh after timeline is created to ensure correct measurements
      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 60);

      // Reveal wrapper now that GSAP has set initial styles
      if (wrapperEl) wrapperEl.style.visibility = "visible";

      return () => {
        clearTimeout(refreshTimeout);
      };
    }, cardsWrapperRef);

    return () => {
      ctx.revert();
    };
  }, [imagesLoaded]);

  return (
    <section
      id="benefits"
      className="relative w-full bg-white text-gray-800 py-16 overflow-hidden"
    >
      <motion.header
        className="text-center mb-12 px-4 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-xl 2xl:text-5xl xl:text-3xl lg:text-3xl md:text-2xl font-light text-gray-700 leading-snug">
          Entering <span className="text-black font-bold">New</span> Worlds Beyond{" "}
          <span className="text-black font-bold">Imagination</span>
        </h2>
        <p className="mt-4 text-gray-500 text-sm md:text-base">
          Explore features that redefine virtual experiences.
        </p>
      </motion.header>

      <div
        ref={cardsWrapperRef}
        // keep overflow-hidden and height intact; visibility toggled via script to avoid flicker
        className="cards-wrapper relative h-[100vh] w-full overflow-hidden"
        aria-hidden={!imagesLoaded}
      >
        {images.map(({ src, alt }, index) => (
          <figure
            key={index}
            className="gallery-card absolute inset-0 flex items-center justify-center w-full h-full"
            // GPU hint & prevent accidental repaints
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover object-center"
              // ensure browser decodes image async; we already preloaded so immediate paint will be ready
              decoding="async"
              // do not lazy-load here to avoid surprise loads while scrolling
              loading="eager"
              // small style hint to keep images from triggering layout shifts
              style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 bg-black/50 px-4 md:px-6 py-2 md:py-3 rounded-xl text-white text-sm md:text-xl font-medium backdrop-blur-sm shadow-lg pointer-events-none">
              {alt}
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
