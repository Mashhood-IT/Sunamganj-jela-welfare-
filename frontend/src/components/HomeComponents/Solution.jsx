import React from "react";
import { IMAGES } from "../../assets/Images";
import { Link } from "react-router-dom";

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
          <h1 className="text-white  text-3xl md:text-5xl font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            The Solution
          </h1>

          <p className="text-white/90 lg:text-xl text-md md:text-base leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            We provide hope to people who need it the most through our work. A
            lot of families in Sunamganj continue to experience loss and
            poverty. We attempt to bring some light into their life. We also
            take care of the Bangladeshi community in the UK. We make them feel
            united, confident and proud.Change is brought by every little thing,
            book, meal, visit. It makes individuals remember that they are not
            the only ones. Our purpose is simple. To help. To heal. To care
          </p>
          <Link to="/donations">
            <button
              className="
            inline-flex cursor-pointer items-center justify-center
            rounded-3xl border px-5 py-2 text-sm md:text-base
            text-white border-(--main-green-color)/70 backdrop-blur
            hover:bg-(--main-green-color)/20 hover:border-(--main-green-color) transition
            "
            >
              Solution
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solution;
