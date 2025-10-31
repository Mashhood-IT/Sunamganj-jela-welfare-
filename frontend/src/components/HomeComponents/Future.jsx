import React from "react";
import { IMAGES } from "../../assets/Images";
import { Link } from "react-router-dom";

const Future = () => {
  return (
    <section
      className="
        relative w-full h-[60vh] md:h-[80vh] overflow-hidden
        bg-center bg-cover bg-no-repeat
        md:bg-fixed bg-scroll
      "
      style={{ backgroundImage: `url(${IMAGES.donatoinHands})` }}
      aria-label="The Solution"
    >
      {/* overlays for contrast */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60" />

      {/* content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-2xl space-y-5">
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
           A Future of Hope
          </h1>

          <p className="text-white/90 text-xl  leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
              At <span className="font-bold">Sunamganj Jela Welfare Association UK</span>, we believe in unity.
            We believe that love is stronger than distance. Each project we complete brings us closer to our dream —
            a dream of a world where kindness has no border. We promise to keep serving with honesty and heart. Our journey will continue — for every
            child, every family, and every life that needs care.Together, we can build a brighter tomorrow for
           Sunamganj and beyond.
          </p>
          <p className="font-bold text-2xl text-center text-(--main-orange-color)">
            Join us. Walk with us, be part of the change today.
          </p>
          <Link to="/contact">
            <button
              className="
            inline-flex cursor-pointer items-center justify-center
            rounded-3xl border px-5 py-2 text-sm md:text-base
            text-white border-(--main-green-color)/70 backdrop-blur
            hover:bg-(--main-green-color)/20 hover:border-(--main-green-color) transition
            "
            >
              Lets Connect
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Future;
