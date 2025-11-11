import { useState } from "react";
import { IMAGES } from "../../assets/Images";
import { ICONS } from "../../assets/Icons";

const images = [
  { id: 1, src: IMAGES.BM1, alt: "Community meeting gathering" },
  { id: 2, src: IMAGES.BM2, alt: "Community leaders networking" },
  { id: 3, src: IMAGES.BM3, alt: "Speaker presenting at event" },
  { id: 4, src: IMAGES.BM4, alt: "Group photo of members" },
  { id: 5, src: IMAGES.BM5, alt: "Charity distribution event" },
  { id: 6, src: IMAGES.BM6, alt: "Panel discussion" },
  { id: 7, src: IMAGES.BM7, alt: "Event registration desk" },
  { id: 8, src: IMAGES.BM8, alt: "Cultural performance" },
  { id: 9, src: IMAGES.BM9, alt: "Leaders signing agreements" },
];

const BiennialMeetingGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const meetingDetails = {
    title: "Biennial General Meeting of Sunamganj Jela Welfare Association UK",
    date: "14th September 2025",
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold tracking-wide uppercase border border-green-300">
              Biennial General Meeting
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {meetingDetails.title}
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200">
              <ICONS.Calendar className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 font-medium">
                {meetingDetails.date}
              </span>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedImageIndex(index)}
            >
              <div className="aspect-square bg-gray-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">View Image</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
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
            <div className="grid justify-center items-center mt-10 lg:mt-24">
              <img
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                height={500}
                width={500}
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
                  {selectedImageIndex + 1} / {images.length}
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
      </div>
    </div>
  );
};

export default BiennialMeetingGallery;