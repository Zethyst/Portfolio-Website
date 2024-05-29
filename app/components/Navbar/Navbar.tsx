"use client"
import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import Logo from '../../assets/Logo.png';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll

interface NavbarProps {
  scrollProgress: number;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage:string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ scrollProgress, setShowMobileMenu, currentPage,setCurrentPage }) => {
    const [showEmail, setShowEmail] = useState(false);
    const [floating, setFloating] = useState(false);
    

    const handleCopyValue = (value:any) => {
        navigator.clipboard.writeText(value);
        setFloating(true);
        setTimeout(() => {
          setFloating(false);
        }, 1000);
        setTimeout(() => {
          setShowEmail(false);
        }, 1500);
      };

      // useEffect(() => {
      //   // nav background color
      //   // let breakPoint = 4;
      //   // if (scrollProgress > breakPoint) {
      //   //   setSolidNav(true);
      //   // } else if (scrollProgress <= breakPoint) {
      //   //   setSolidNav(false);
      //   // }
    
      //   // nav current page underline
      //   if (scrollProgress > 91) {
      //     setCurrentPage("contact");
      //   } else if (scrollProgress > 68) {
      //     setCurrentPage("skill");
      //   } else if (scrollProgress > 41) {
      //     setCurrentPage("project");
      //   } else if (scrollProgress > 18) {
      //     console.log("about");
      //     setCurrentPage("about");
      //   } else {
      //     setCurrentPage("home");
      //   }
      // }, [scrollProgress]);

  return (
    <div className='sticky top-0 w-full p-3 flex justify-center md:justify-around items-center gap-5 backdrop-blur-lg shadow-lg z-10'>
        {/* MOBILE HAMBURGER */}
        <div  onClick={() => setShowMobileMenu(true)} className='block md:hidden cursor-pointer text-[#FFD474] absolute scale-125 left-10 top-[70%] translate-y-[-50%] min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px]'>
          <i className="hamburger max-w-[40px] min-h-[40px] max-h-[40px] fa-solid fa-bars scale-150"></i>
        </div>
        <div></div>
      <div className='hidden md:flex gap-10'>
        <a href="https://github.com/Zethyst" target='_blank' className='scale-125 hover:text-[#FFD474]'>
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/akshat-jaiswal-4664a2197/" target='_blank' className='scale-125 hover:text-[#FFD474]'>
          <i className="fa-brands fa-linkedin cursor-pointer"></i>
        </a>
        <a href="" className='scale-125' target='_blank'>
          <svg className='cursor-pointer translate-y-0 hover:text-[#FFD474]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5.0 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"/>
          </svg>
        </a>
        <i className="fa-solid fa-envelope cursor-pointer fa-lg translate-y-3 hover:text-[#FFD474]" onClick={() => setShowEmail(!showEmail)} ></i>
        {/* <span className="material-symbols-outlined cursor-pointer hover:text-[#FFD474]" onClick={() => setShowEmail(!showEmail)}>mail</span> */}
        <div className={`absolute top-20 h-0 max-h-0 transition-all ease-linear duration-300 text-black overflow-hidden ${showEmail ? "activeMailWrapper" : "inactive"}`}
            >
              <span className={`absolute font-semibold opacity-0 top-[1000px] left-0 flex text-yellow-400 z-50 ${floating && "activeText"}`}>
                Copied!
              </span>
              <div className={`$p-0 h-0 max-h-0 font-bold text-xl flex justify-center items-center  transition-all ease-linear duration-300 relative overflow-visible ${showEmail ? "mail" : "inactive"}`}>
              <i className="fa-solid fa-copy mail-icon cursor-pointer"
                  onClick={() => handleCopyValue("21052646@kiit.ac.in")}></i>
                21052646@kiit.ac.in

                <i className="fa-solid fa-xmark mail-icon translate-x-4 cursor-pointer"
                  onClick={() => setShowEmail(false)}
                />
              </div>
            </div>
      </div>
      <div className='mx-44 flex justify-center items-center'>
        <ScrollLink 
           to="home" 
           spy={true} 
           smooth={true} 
           duration={700} 
           className={` cursor-pointer ${currentPage === "home" && "scale-150"}` }
           //   activeClass='active-link'
           onClick={() => setShowMobileMenu(false)}
           >
           <Image className="object-cover md:translate-x-20" src={Logo} height={50} alt='Logo'/>
        </ScrollLink>
      </div>
      <ul className='hidden md:flex gap-8 font-semibold mx-10'>
        <ScrollLink 
          to="about" 
          spy={true} 
          smooth={true} 
          duration={700} 
          className={`nav-item cursor-pointer ${currentPage === "about" && "scale-150"}` }
        //   activeClass='active-link'
        >
          About
        </ScrollLink>
        
        <ScrollLink 
          to="project" 
          spy={true} 
          smooth={true} 
          duration={700} 
          className={`nav-item cursor-pointer ${currentPage === "project" && "activeLink"}` }
        //   activeClass='active-link'
        >
          Projects
        </ScrollLink>

        <ScrollLink 
          to="skill" 
          spy={true} 
          smooth={true} 
          duration={700} 
          className={`nav-item cursor-pointer ${currentPage === "skill" && "activeLink"}` }
        //   activeClass='active-link'
        >
          Skills
        </ScrollLink>

        <ScrollLink 
          to="certificate" 
          spy={true} 
          smooth={true} 
          duration={700} 
          className={`nav-item cursor-pointer ${currentPage === "certificate" && "activeLink"}` }
        //   activeClass='active-link'
        >
          Certificates
        </ScrollLink>

        <ScrollLink 
          to="contact" 
          spy={true} 
          smooth={true} 
          duration={700} 
          className={`nav-item cursor-pointer ${currentPage === "contact" && "activeLink"}` }
        //   activeClass='active-link'
        >
          Contact
        </ScrollLink>

      </ul>
    </div>
  );
}

export default Navbar;
