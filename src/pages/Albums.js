import React from 'react';
// import images
import Image1 from '../img/portfolio2/1.webp';
import Image2 from '../img/portfolio2/2.webp';
import Image3 from '../img/portfolio2/5.webp';
import Image4 from '../img/portfolio2/4.webp'

import BrideImage1 from '../img/Bride album/BRIDE.jpg';
import BrideImage2 from '../img/Bride album/BRIDE3.jpg';
import BrideImage3 from '../img/Bride album/bride7.jpg';
import BrideImage4 from '../img/Bride album/BRIDE2.jpg';

import WeddingImage1 from '../img/Pre-wedding album/thumb v+c.jpg';
import WeddingImage2 from '../img/Pre-wedding album/img01.jpg';                      
import WeddingImage3 from '../img/Pre-wedding album/img02.jpg';
import WeddingImage4 from '../img/Pre-wedding album/img03.jpg';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';


const Albums = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '80%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-80%' }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative space-y-24 pt-32">
        
        {/* Pre-wedding Album Section */}
        <div className="flex flex-col lg:flex-row items-center gap-x-24 text-center lg:text-left">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className="lg:w-1/2"
          >
            <h2 className="h1 text-5xl">Pre-wedding Album</h2>
            <p className="mb-6 max-w-sm mx-auto lg:mx-0">
            A collection of cherished moments capturing the excitement and romance before the big day. These images celebrate love, connection, and the journey leading up to "I do."
              <br />
              <br />
              Each photo of the album tells a story of laughter, anticipation, and the deep bond shared between two souls embarking on a lifelong adventure together.
            </p>
            <Link to="/preweddingalbum" className="btn rounded mb-6 mx-auto lg:mx-0">
              View Pre-Wedding Album
            </Link>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-2 lg:w-1/2">
            {[WeddingImage1, WeddingImage2, WeddingImage3, WeddingImage4].map((img, index) => (
              <div key={index} className="max-w-[320px] h-[220px] bg-accent overflow-hidden">
                <img className="object-cover w-full h-full hover:scale-110 transition-all duration-500" src={img} alt="" />
              </div>
            ))}
          </div>

        </div>

        {/* Bridal Album Section */}
        <div className="flex flex-col lg:flex-row items-center gap-x-24 text-center lg:text-left">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className="lg:w-1/2"
          >
            <h2 className="h1 text-5xl">Bridal Album</h2>
            <p className="mb-6 max-w-sm mx-auto lg:mx-0">
              A special collection dedicated to the beauty and elegance of the bride. Every image tells a unique story of love, joy, and anticipation.
              <br />
              <br />
              Immerse yourself in these heartfelt moments that capture the essence of a new beginning through our specially captured Bride album.
            </p>
            <Link to="/bridealbum" className="btn rounded mb-6 mx-auto lg:mx-0">
              View Bridal Album
            </Link>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-2 lg:w-1/2">
            {[BrideImage1, BrideImage2, BrideImage3, BrideImage4].map((img, index) => (
              <div key={index} className="max-w-[320px] h-[220px] bg-accent overflow-hidden">
                <img className="object-cover w-full h-full hover:scale-110 transition-all duration-500" src={img} alt="" />
              </div>
            ))}
          </div>

        </div>

        {/* Wedding Album Section */}
        <div className="flex flex-col lg:flex-row items-center gap-x-24 text-center lg:text-left">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className="lg:w-1/2"
          >
            <h2 className="h1 text-5xl">Wedding Album</h2>
            <p className="mb-6 max-w-sm mx-auto lg:mx-0">
              A beautiful collection capturing the emotions, traditions, and joy of the wedding day. Every photo tells a heartfelt story of love and commitment.
              <br />
              <br />
              Relive the magical moments of this special day through our carefully curated wedding album.
            </p>
            <Link to="/gallery1" className="btn rounded mb-6 mx-auto lg:mx-0">
              View Wedding Album
            </Link>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-2 lg:w-1/2">
            {[Image1, Image2, Image3, Image4].map((img, index) => (
              <div key={index} className="max-w-[320px] h-[220px] bg-accent overflow-hidden">
                <img className="object-cover w-full h-full hover:scale-110 transition-all duration-500" src={img} alt="" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </motion.section>
  );
};

export default Albums;