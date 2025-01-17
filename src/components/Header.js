import React from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.png';
import MobileNav from './MobileNav';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

import { Link } from 'react-router-dom';  


const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (<h1 className=" fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
    <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
      {  }
      <Link to ={'/'} className='max-w-[500px]'>
      <img src={Logo} alt=''/>
      </Link>
      {/* */}
      <nav className="hidden lg:flex gap-x-12 font-semibold">
        <Link 
        to={'/'} 
        className =" text-[#696c6d] hover:text-primary transition">
        Home
        </Link>
        <Link 
        to={'/about'} 
        className ="text-[#696c6d] hover:text-primary transition">
        About
        </Link>
        
        <Link 
        to={'/portfolio'} 
        className ="text-[#696c6d] hover:text-primary transition">
        Gallery
        </Link>
        <Link 
        to={'/contact'} 
        className ="text-[#696c6d] hover:text-primary transition">
        Contact
        </Link>
        </nav>
    </div>
        {/*Socials */}
        <Socials />
        {/*Mobile Nav */}
        <MobileNav />
    </h1>);
};

export default Header;
