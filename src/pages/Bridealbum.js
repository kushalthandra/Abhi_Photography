import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

// cloudinary inmage Array 
// if you want to add new images and want to use your cloudinary account go to .env file and input your account detail there
// go to uploadImages.js to change the image folder(currently it's porfolio2) to upload new image folder to get new URL,s
// copy and paste the new URL's from the terminal to below
const images = [
    'https://res.cloudinary.com/de3962ehz/image/upload/v1742808045/my-images1/vml5n0ft95n2h3hbqu3m.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742808045/my-images1/xqpgnutf94equ1aiif6z.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742808044/my-images1/lejfoqye6mvjlbwwi65e.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742808043/my-images1/h8hoxlmlcjfvjvo6b3iw.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742808055/my-images1/vmcxqemnd17f4pt5orma.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742808136/my-images1/vkzgazzrwjw23fudfwpq.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742808135/my-images1/mzp0nxfqn4lizxfctfts.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742808135/my-images1/daletreyizemouozq6mv.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742808136/my-images1/zwant2mq8b4wmtlv98iw.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742808137/my-images1/lkkwaz0bfglgtzzqu7ki.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742808217/my-images1/nviftgnrcfet8a7kjlyw.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742808217/my-images1/mxyy6kqgen2vx8nmdzk1.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742808216/my-images1/m62rc4dkytq86oxv0dqj.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742808217/my-images1/nqklo8uz5vkui50q0duz.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742808263/my-images1/a5n91fvgzb8m85luuypp.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742808261/my-images1/rfaitnv8tjbrdiqb9ypy.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742808261/my-images1/k5bv6b7sdhfzfg9wup2l.webp',
];

// Lazy Image Component
const LazyImage = ({ src, alt }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const loadedRef = useRef(false);

  if (inView) loadedRef.current = true; // Persist loading state

  return (
    <div ref={ref} className="w-full h-full">
      {loadedRef.current ? (
        <picture>
          <source srcSet={src} type="image/webp" />
          <img
            src={src.replace(".webp", ".jpg")}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-115 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            style={{ transform: "translateZ(0)" }} // Force GPU acceleration
          />
        </picture>
      ) : (
        <div className="w-full h-48 bg-gray-300 animate-pulse" />
      )}
    </div>
  );
};

const Bridealbum = () => {
  const [modalImageIndex, setModalImageIndex] = useState(null);

   // Preload all images when the component mounts
   useEffect(() => {
    const preloadImages = images.slice(0, 5); // Load only the first 5 images
  preloadImages.forEach((imgSrc) => {
      const img = new Image();
      img.src = imgSrc;
    });
  }, []);
  
  const handleNext = () => {
    setModalImageIndex((prev) =>
      prev !== null && prev < images.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrevious = () => {
    setModalImageIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : images.length - 1
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer group overflow-hidden"
              style={{ willChange: "transform" }} 
              onClick={() => setModalImageIndex(index)}
            >
              <LazyImage src={image} alt={`Gallery Image ${index + 1}`} />
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
              <div className="w-full h-full  max-w-screen-lg  flex justify-center items-center">
              <img
                src={images[modalImageIndex]}
                alt={``}
                className="w-auto h-auto max-w-screen max-h-screen object-contain"
              />
              </div>

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

export default Bridealbum;