import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

// cloudinary inmage Array 
// if you want to add new images and want to use your cloudinary account go to .env file and input your account detail there
// go to uploadImages.js to change the image folder(currently it's porfolio2) to upload new image folder to get new URL,s
// copy and paste the new URL's from the terminal to below
const images = [
 'https://res.cloudinary.com/de3962ehz/image/upload/v1742802439/my-images1/aunwtcp3zx9iewsh1rj2.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802440/my-images1/njqqtmwbwyb5h8rphz7w.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802439/my-images1/stcb0sob69bav6i4ssvf.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802439/my-images1/isjaedgzjua6lgrzc2oi.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802439/my-images1/fgmn14tckjmw8u5rfr4j.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802521/my-images1/fwk66hiso7hufdjiriji.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802523/my-images1/s13umxfekfie8np5ekih.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802522/my-images1/bjdtkzpxdv3qdslcro6q.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802522/my-images1/mawq2jqbrtfqboskqdus.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802522/my-images1/x2akwviow0pdnwwwg6jk.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802577/my-images1/kfhpp9fpzpe5stnvwwv6.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802570/my-images1/keh9mjinkq08gw3g7qwk.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802571/my-images1/utkk9mxdedj0ngmzaj69.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802569/my-images1/si9uwkpnvyvuc9ka8cdz.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802569/my-images1/g1ffjgzowkyhwdd7jn3r.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802570/my-images1/dqk8fghuy4a81wx18c5q.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802570/my-images1/tfxtdpobebizhjxab4yc.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802570/my-images1/jsnmukwzta3llewhnvfd.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802570/my-images1/dk0ntvilmlobgpduwb94.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802569/my-images1/tmumloordifn54lu2fhz.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802629/my-images1/z7bvasidkjcdgwl8thfc.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802629/my-images1/err7swibioda5437vsuu.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802629/my-images1/amegbqnw2dtxnvhtiebw.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802630/my-images1/akisleslc6lj5md6le2n.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802629/my-images1/cthfrweqgrrzrjsmftyu.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802628/my-images1/eltl3juinfmgaampyxja.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802631/my-images1/sisz5danzn4wpudtxczq.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802630/my-images1/uewd8av1vksmsm4hyvwc.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802629/my-images1/nbyw5aeexw8fsfjkawkx.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742802630/my-images1/ti5kkeqehv7thc4vael2.webp',
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

const PreWeddingalbum = () => {
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
                alt={`Gallery Image ${modalImageIndex + 1}`}
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

export default PreWeddingalbum;
