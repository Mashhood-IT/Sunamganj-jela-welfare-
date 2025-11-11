import React, { useState } from "react";
import { IMAGES } from "../../assets/Images";
import { ICONS } from "../../assets/Icons";

const MeetingGallerySection = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const meetingImages = [
    { id: 1, url: IMAGES.meeting7, alt: "EC Meeting Scene 1" },
    { id: 2, url: IMAGES.meeting2, alt: "EC Meeting Scene 2" },
    { id: 3, url: IMAGES.meeting3, alt: "EC Meeting Scene 3" },
    { id: 4, url: IMAGES.meeting4, alt: "EC Meeting Scene 4" },
    { id: 5, url: IMAGES.meeting5, alt: "EC Meeting Scene 5" },
    { id: 6, url: IMAGES.meeting6, alt: "EC Meeting Scene 6" },
    { id: 7, url: IMAGES.meeting, alt: "EC Meeting Scene 7" },
  ];

  const meetingDetails = {
    title: "First EC Meeting of the New Committee",
    term: "2025 to 2027",
    date: "Monday, 13 October 2025",
    location: "United Kingdom",
  };

  const featured = meetingImages[0];
  const rest = meetingImages.slice(1);

  const handlePrevious = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === 0 ? meetingImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === meetingImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold tracking-wide uppercase border border-green-300">
              Executive Committee
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {meetingDetails.title}
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>

          <p className="text-2xl font-semibold text-green-700 mb-6">
            {meetingDetails.term}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200">
              <ICONS.Calendar className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 font-medium">
                {meetingDetails.date}
              </span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200">
              <ICONS.MapPin className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700 font-medium">
                {meetingDetails.location}
              </span>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="space-y-6">
          {/* Featured image */}
          {featured && (
            <div
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-video"
              onClick={() => setSelectedImageIndex(0)}
            >
              <img
                src={featured.url}
                alt={featured.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}

          {/* Masonry-style collage for remaining images */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
            {rest.map((image, index) => (
              <div
                key={image.id}
                className="mb-4 break-inside-avoid group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
                onClick={() => setSelectedImageIndex(index + 1)}
              > 
                <img
                  src={image.url}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 
          ${index === 4 ? "h-56" : "h-auto"}`}
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            title="Close Image"
            className="text-white absolute top-28 cursor-pointer hover:bg-white/20 rounded-full p-1 transition-colors right-4"
            onClick={() => setSelectedImageIndex(null)}
          >
            <ICONS.X />
          </button>
          <div className="grid items-center justify-center mt-10">
            <img
              src={meetingImages[selectedImageIndex].url}
              alt={meetingImages[selectedImageIndex].alt}
              height={700}
              width={700}
              className="rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <button
                onClick={handlePrevious}
                className="text-white cursor-pointer hover:text-[#FEAA53] transition-colors p-2 hover:bg-white/10 rounded-full"
                title="Previous Image"
              >
                <ICONS.ChevronLeft className="w-8 h-8" />
              </button>
              
              <span className="text-white font-semibold text-lg">
                {selectedImageIndex + 1} / {meetingImages.length}
              </span>
              
              <button
                onClick={handleNext}
                className="text-white cursor-pointer hover:text-[#FEAA53] transition-colors p-2 hover:bg-white/10 rounded-full"
                title="Next Image"
              >
                <ICONS.ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MeetingGallerySection;