/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { IoIosCloseCircle } from "react-icons/io";
// Import sample images or replace with your own images
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

const Gallery1 = () => {
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
  
  const [data, setData] = useState({ img: '', i: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const viewImage = (img, i) => {
    setData({ img, i });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setData(prev => ({
      img: images[(prev.i + 1) % images.length],
      i: (prev.i + 1) % images.length
    }));
  };

  const prevImage = () => {
    setData(prev => ({
      img: images[(prev.i - 1 + images.length) % images.length],
      i: (prev.i - 1 + images.length) % images.length
    }));
  };

  return (
    <section className="section">
      <div className="container mx-auto w-full h-full relative">
        <div className="text-center py-28">
          <h1 className="h1">Gallery</h1>
          <p className="max-w-2xl mx-auto">
            Explore the complete gallery. Each image tells a unique story of
            passion, creativity, and the beauty of the world around us.
          </p>
        </div>
        {/* Grid of Images */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 bg-white border-4 border-gray-300 sm:border-4 md:border-0"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 lg:h-64 object-cover"
                onClick={() => viewImage(image, index)}
              />
            </div>
          ))}
        </div>

        {/* Modal for Viewing Image */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
            <div className="relative">
              <img src={data.img} alt="Selected" className="max-w-full max-h-full" />
              <button onClick={closeModal} className="absolute top-0 right-0 p-2 text-white"><IoIosCloseCircle /></button>
              <button onClick={prevImage} className="absolute left-0 p-2 text-white"><GrLinkPrevious className="m-2 bg-white text-2xl text-white hover:bg-white"/></button>
              <button onClick={nextImage} className="absolute right-0 p-2 text-white"><GrLinkNext className="m-2 bg-white text-2xl text-white hover:bg-white"/></button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery1;
