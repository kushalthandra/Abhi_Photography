import React from 'react';
import WomanImg from '../img/about/woman.jpg';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import './index.css';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className="section min-h-screen bg-gray-100"
    >
      <div className="container mx-auto min-h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* Image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ transition1 }}
              src={WomanImg}
              alt="About Me"
              className="w-full max-w-sm lg:max-w-md mx-auto"
            />
          </div>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '80%' }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex-col justify-center items-center lg:items-start "
          >
            <h1 className="h1 text-4xl font-bold mb-6">About Me</h1>
            <p className="mb-9 max-w-sm text-gray-700">
              A passionate photographer, I capture life's moments with precision and emotion.
              Through my lens, stories unfold, and beauty comes alive in every frame.
              <br />
              <br />
              Inspired by nature, people, and light, I strive to create timeless images that
              evoke feelings and preserve cherished memories.
            </p>
            <Link
              to={'/portfolio'}
              className="btn px-6 py-3 text-lg font-medium rounded-lg bg-black text-white hover:bg-gray-800 transition duration-300"
            >
              View My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
