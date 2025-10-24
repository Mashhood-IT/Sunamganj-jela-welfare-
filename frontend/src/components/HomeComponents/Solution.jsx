import React from "react";
import { IMAGES } from "../../assets/Images";

const Solution = () => {
  return (
    <section
      className="
        relative w-full h-[60vh] md:h-[80vh] overflow-hidden
        bg-center bg-cover bg-no-repeat
        md:bg-fixed bg-scroll
      "
      style={{ backgroundImage: `url(${IMAGES.Kid})` }}
      aria-label="The Solution"
    >
      {/* overlays for contrast */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60" />

      {/* content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-2xl space-y-5">
          <h1 className="text-white text-3xl md:text-4xl font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            The Solution
          </h1>

          <p className="text-white/90 text-sm md:text-base leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            Through the development of novel and cost-effective interventions,
            NALA works to break the chain of transmission by mobilizing the
            community to be the architects of their own health.
          </p>

          <button
            className="
              inline-flex cursor-pointer items-center justify-center
              rounded-3xl border px-5 py-2 text-sm md:text-base
              text-white border-emerald-400/70 backdrop-blur
              hover:bg-emerald-500/20 hover:border-emerald-400 transition
            "
          >
            Solution
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solution;
