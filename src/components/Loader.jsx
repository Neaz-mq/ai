import { useEffect } from "react";

export default function Loader({ setLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800); 
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/70 dark:bg-black/70 backdrop-blur-xl z-50">
      {/* Neon Green Loader */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-transparent border-r-[#65D800] animate-spin" />
        {/* Middle Ring (slower) */}
        <div className="absolute inset-2 rounded-full border-[3px] border-transparent border-r-[#65D800] animate-[spin_1.2s_linear_infinite]" />
        {/* Inner Ring (slowest) */}
        <div className="absolute inset-4 rounded-full border-[3px] border-transparent border-r-[#65D800] animate-[spin_1.6s_linear_infinite]" />
      </div>

      {/* Futuristic Loading Text */}
      <p className="mt-8 text-base sm:text-lg text-black font-semibold font-mono tracking-widest animate-pulse">
        Initializing AI...
      </p>
    </div>
  );
}
