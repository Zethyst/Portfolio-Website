import React, { useState } from 'react'
import Logo from '../../assets/Logo.png';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll'; 

interface MobileMenuProps{
    showMobileMenu:boolean;
    setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
    currentPage:string;
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}
const MobileBurgerView: React.FC<MobileMenuProps>= ({ showMobileMenu, setShowMobileMenu, currentPage,setCurrentPage })=> {
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

  return (
    <div className={`${showMobileMenu ? "openMobilePage" : "closeMobilePage"} w-[100vw] min-h-[100vh] max-h-[100vh]  fixed left-[-2000px] z-50  items-center justify-start overflow-hidden  `}>
          {/* MENU CONTAINER*/} 
            <div className={` ${showMobileMenu ? "openMobileContainer" : "closeMobileContainer"} bg-[#0c0c0c] w-[70vw] min-h-[100vh] z-40 max-h-[100vh] fixed left-[-2000px] flex justify-start items-start overflow-hidden  transition-all ease-in duration-500`}>
            {/* CLOSE ICON */}
            <i onClick={() => setShowMobileMenu(false)} className="fa-solid fa-xmark absolute top-6 right-6 cursor-pointer text-[#d2d2d2] z-40 min-w-8 max-w-8 min-h-8 max-h-8 fa-2xl"></i>
                <div className='mm-Wrapper flex flex-col overflow-hidden py-16 px-5 w-full z-30'>
                    <div>

                <ScrollLink 
                        to="home" 
                        spy={true} 
                        smooth={true} 
                        duration={700} 
                        className={`flex w-full items-center justify-center z-30 cursor-pointer ${currentPage === "home" && "scale-150"}` }
                        //   activeClass='active-link'
                        onClick={() => setShowMobileMenu(false)}
                        >
                        <Image className="object-cover md:translate-x-16" src={Logo} height={60} alt='Logo'/>
                </ScrollLink>
                        </div>
                    {/* PAGES */}
                    <div className='flex flex-col md:flex-row w-full items-center justify-center mb-10 z-30'>
                    <ul className='flex flex-col gap-12 font-semibold my-20'>
                        <ScrollLink 
                        to="about" 
                        spy={true} 
                        smooth={true} 
                        duration={700} 
                        className={`nav-item cursor-pointer ${currentPage === "about" && "scale-150"}` }
                        //   activeClass='active-link'
                        onClick={() => setShowMobileMenu(false)}
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
                        onClick={() => setShowMobileMenu(false)}
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
                        onClick={() => setShowMobileMenu(false)}
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
                        onClick={() => setShowMobileMenu(false)}
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
                        onClick={() => setShowMobileMenu(false)}
                        >
                        Contact
                        </ScrollLink>

                    </ul>
                    </div>
                    <div className='flex gap-10 absolute bottom-10 self-center z-50'>
                        <a href="https://github.com/Zethyst" target='_blank' className='scale-125 hover:text-[#FFD474]'>
                        <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/akshat-jaiswal-4664a2197/" target='_blank' className='scale-125 hover:text-[#FFD474]'>
                        <i className="fa-brands fa-linkedin cursor-pointer"></i>
                        </a>
                        <a href="" className='scale-125' target='_blank'>
                        <svg className='cursor-pointer hover:text-[#FFD474]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5.0 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"/>
                        </svg>
                        </a>
                        <i className="fa-solid fa-envelope cursor-pointer fa-lg translate-y-3 hover:text-[#FFD474]" onClick={() => setShowEmail(!showEmail)} ></i>
                        <div className={`absolute bottom-5 -translate-x-12 md:translate-x-0 md:top-20 h-0 max-h-0 transition-all ease-linear duration-300 text-black overflow-hidden ${showEmail ? "activeMailWrapper" : "inactive"}`}
                            >
                            <span className={`absolute font-semibold opacity-0 top-[1000px] left-0 flex text-yellow-400 z-50 ${floating && "activeText"}`}>
                                Copied!
                            </span>
                            <div className={`p-0 h-0 max-h-0 font-bold text-lg md:text-xl flex justify-center items-center  transition-all ease-linear duration-300 relative overflow-visible ${showEmail ? "mail" : "inactive"}`}>
                            <i className="fa-solid fa-copy mail-icon cursor-pointer"
                                onClick={() => handleCopyValue("21052646@kiit.ac.in")}></i>
                                21052646@kiit.ac.in

                                <i className="fa-solid fa-xmark mail-icon translate-x-1 cursor-pointer"
                                onClick={() => setShowEmail(false)}
                                />
                            </div>
                            </div>
                    </div>
                </div>

            </div>
       {/* BACKGROUND */}
            <div onClick={() => setShowMobileMenu(false)} className={` ${showMobileMenu ? "openMobileBg" : "closeMobileBg"} w-[100vw] min-h-[100vh] max-h-[100vh] relative transition-all ease-in duration-500 flex justify-center items-center overflow-hidden z-20 `}></div>
    </div>
  )
}

export default MobileBurgerView