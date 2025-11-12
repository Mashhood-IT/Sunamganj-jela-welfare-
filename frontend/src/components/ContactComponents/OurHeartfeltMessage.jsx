import React from "react";

const OurHeartfeltMessage = () => (
  <section className="relative overflow-hidde lg:px-0 px-5 bg-white">
    {/* Large diagonal background split */}
    <div className="absolute inset-0 bg-cream transform -skew-y-3 origin-top-left" />
    <div className="absolute top-0 right-0 w-2/3 h-full bg-linear-to-bl from-main-green/5 to-transparent transform skew-y-2" />


    <div className="relative py-32 px-6 max-w-6xl mx-auto">
      {/* Title with asymmetric layout */}
      <div className="mb-20 lg:ml-24">
        <h2 className="text-2xl lg:text-3xl font-bold text-(--main-green-color) leading-tight">
          Our Heartfelt
          <br />
          <span className="text-(--main-orange-color) italic">Message</span>
        </h2>
      </div>

      {/* Text content in flowing layout */}
      <div className="space-y-12 lg:ml-12">
        <div className="relative lg:pl-20">
          <div className="absolute lg:left-0 -left-4 lg:top-2 -top-2 w-12 h-12 border-l-4 border-t-4 border-(--main-green-color)/30" />
          <p className="text-warm-gray text-md lg:text-lg leading-relaxed max-w-3xl">
            Speaking to us, you speak to people who have a lot of love in their
            hearts. We are not a big organization, we are a group of friends
            with good intentions. We receive each message with grace and love.
          </p>
        </div>

        <div className="relative lg:pl-32 lg:pr-20">
          <div className="absolute right-0 top-2 w-12 h-12 border-r-4 border-t-4 border-(--main-orange-color)/30 lg:block hidden" />
          <p className="text-warm-gray text-md lg:text-lg leading-relaxed max-w-3xl lg:ml-auto">
            There is a narrative behind every phone call or e-mail. We never
            forget that. An account of a student dreaming, a mother dreaming,
            and a family recovering after loss. Every tale makes sense of our
            actions.
          </p>
        </div>

        <div className="relative lg:pl-40 pt-8">
          <div className="absolute lg:left-8 lg:-top-4 -top-10 text-9xl font-bold text-(--main-green-color)/5 select-none">
            "
          </div>
          <p className="font-bold text-(--main-green-color) text-md lg:text-lg leading-relaxed max-w-2xl italic">
            We reply because it is important; it is important that you speak.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OurHeartfeltMessage;
