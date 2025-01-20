import React, { useState } from "react";
// Import all images
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
import Image5 from "../img/portfolio/5.jpg";
import Image6 from "../img/portfolio/6.jpg";
import Image7 from "../img/portfolio/7.jpg";
import Image8 from "../img/portfolio/8.jpg";
import Image9 from "../img/portfolio/9.jpg";
import Image10 from "../img/portfolio/10.jpg";
import Image11 from "../img/portfolio/11.jpg";
import Image12 from "../img/portfolio/12.jpg";
import Image13 from "../img/portfolio/13.jpg";
import Image14 from "../img/portfolio/14.jpg";
import Image15 from "../img/portfolio/15.jpg";
import Image16 from "../img/portfolio/16.jpg";
import Image17 from "../img/portfolio/17.jpg";
import Image18 from "../img/portfolio/18.jpg";
import Image19 from "../img/portfolio/19.jpg";
import Image20 from "../img/portfolio/20.jpg";

// Array of images
const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image18,
  Image19,
  Image20,
];

const Gallery1 = () => {
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const handleNext = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex !== null && prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevious = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex !== null && prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="text-center py-28">
          <h1 className="h1">Gallery</h1>
          <p className="max-w-2xl mx-auto">
            Explore the complete gallery. Each image tells a unique story of
            passion, creativity, and the beauty of the world around us.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer group overflow-hidden"
              onClick={() => setModalImageIndex(index)}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full m-1 p-1 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalImageIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
            <div className="relative">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white text-3xl bg-gray-700 hover:bg-gray-900 rounded-full w-12 h-12 flex items-center justify-center"
                onClick={() => setModalImageIndex(null)}
              >
                ✕
              </button>

              {/* Full-Screen Image */}
              <img
                src={images[modalImageIndex]}
                alt={`Gallery Image ${modalImageIndex + 1}`}
                className="max-w-full max-h-screen object-contain"
              />

              {/* Previous Button */}
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-gray-700 hover:bg-gray-900 rounded-full w-12 h-12 flex items-center justify-center"
                onClick={handlePrevious}
              >
                ←
              </button>

              {/* Next Button */}
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-gray-700 hover:bg-gray-900 rounded-full w-12 h-12 flex items-center justify-center"
                onClick={handleNext}
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery1;
