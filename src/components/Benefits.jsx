import { useEffect, useMemo, useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const cardsWrapperRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
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

  // Preload images
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
          revealTimeoutRef.current = setTimeout(() => {
            setImagesLoaded(true);
          }, 40);
        }
      };
      img.onerror = () => {
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

  // Main GSAP + ScrollTrigger logic
  useLayoutEffect(() => {
    if (!imagesLoaded) return;
    const wrapper = cardsWrapperRef.current;
    if (wrapper) wrapper.style.visibility = "hidden";

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(
        ".gallery-card",
        cardsWrapperRef.current
      );
      const wrapperEl = cardsWrapperRef.current;

      if (!wrapperEl || cards.length === 0) {
        if (wrapper) wrapper.style.visibility = "visible";
        return;
      }

      wrapperEl.style.minHeight = "100vh";

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
          Entering <span className="text-black font-bold">New</span> Worlds
          Beyond <span className="text-black font-bold">Imagination</span>
        </h2>
        <p className="mt-4 text-gray-500 text-sm md:text-base">
          Explore features that redefine virtual experiences.
        </p>
      </motion.header>

      <div
        ref={cardsWrapperRef}
        className="cards-wrapper relative h-[100vh] w-full overflow-hidden"
        aria-hidden={!imagesLoaded}
      >
        {images.map(({ src, alt }, index) => (
          <figure
            key={index}
            className="gallery-card absolute inset-0 flex items-center justify-center w-full h-full transform-gpu will-change-transform will-change-opacity"
          >
            <img
              src={src}
              alt={alt}
              className="block w-full h-full object-cover object-center"
              decoding="async"
              loading="eager"
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
