import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

// cloudinary inmage Array 
// if you want to add new images and want to use your cloudinary account go to .env file and input your account detail there
// go to uploadImages.js to change the image folder(currently it's porfolio2) to upload new image folder to get new URL,s
// copy and paste the new URL's from the terminal to below
const images = [
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728608/my-images/r9wysa6yco2hlprrv0ic.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728607/my-images/oi7cazfnpzn3xua4p0tr.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728595/my-images/wjchs7gw6fn603npncwu.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728591/my-images/tzrbtre8iseq3d5cudth.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728601/my-images/d0hnidgv5qoseekdrxfi.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728589/my-images/so6jwqsubnlqy497vnby.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728597/my-images/gq3sdu4k5i81uermdqa7.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728597/my-images/btsbzxznf9kjfefudmja.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728602/my-images/fkonzs5b5em0imdtrg66.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728609/my-images/osousj0gefy3t6dyhuf2.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728596/my-images/sacpiaad8sk86dsqoesl.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728609/my-images/r9tfhnv2p9nlvvpwr3u2.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728590/my-images/xytaoyggynuau2lgdgfl.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728608/my-images/vyke8ktbxqv605rprpab.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728604/my-images/bvdqxukndiu8pcuecoxe.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728605/my-images/el6tvbloopwveank4gk9.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728600/my-images/cgkeb5qqijv2u1khwlm8.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728595/my-images/mjpiwhed0zoh2cei7cpv.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728606/my-images/g27lp6pvoqoghpyjsion.webp',
  'https://res.cloudinary.com/de3962ehz/image/upload/v1742728606/my-images/pevea3vexeybq4cyuek6.webp',
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

const Gallery1 = () => {
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

export default Gallery1;
