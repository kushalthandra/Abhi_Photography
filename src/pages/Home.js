import React from 'react';
import WomanImg from '../img/home/woman.png';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import {transition1} from '../transitions';

const Home = () => {
  return (
    <motion.section 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={transition1}   
    className="section">
      <div className="container mx-auto h-full relative ">
        {/* Wrapper for Text and Image */}
        <div className="overflow-hidden flex flex-col lg:flex-row h-full items-center lg:items-start justify-between">
          {/* Text Section */}
          <motion.div 
           initial={{opacity:0,y:'-50'}}
           animate={{opacity:1,y:0}}
           exit={{opacity:0,y:'-50%'}}
           transition={transition1}   
          className="w-full lg:w-1/2 pt-36 pb-14 lg:pt-40 lg:pb-0 z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1 text-center lg:text-left">
              Photographer<br />&Videographer
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 text-center lg:text-left">
              Vijayawada, India
            </p>
            <Link to="/contact" className="btn mb-[30px] rounded">
              Hire Me
            </Link>
          </motion.div>
          {/* Image Section */}
          <motion.div 
            initial={{scale:0}}
            animate={{scale:1}}
            exit={{scale:0}}
            transition={transition1}   
           className="w-full flex justify-center lg:justify-end mt-7 lg:mt-0">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ transition1}}
              src={WomanImg}
              alt="Portrait of a woman"
              className="max-w-[500px] lg:max-w-[400px] xl:max-w-[700px] relative object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
