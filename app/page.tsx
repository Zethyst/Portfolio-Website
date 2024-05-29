"use client"
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import { useEffect, useRef,createRef, useState,RefObject  } from 'react';
import webGLFluidEnhanced from 'webgl-fluid-enhanced';
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skill/Skills";
import MobileBurgerView from "./components/Mobile/MobileBurgerView";
import Certificates from "./components/Certificate/Certificates";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

   //! scroll functionality for nav
   const target: RefObject<HTMLDivElement> = createRef();
   const [scrollProgress, setScrollProgress] = useState<number>(0);
   const [showMobileMenu, setShowMobileMenu] = useState(false);
   const [currentPage, setCurrentPage] = useState("home");

   const scrollListener = () => {
    console.log("Reach");
     if (!target.current) {
       return;
     }
 
     const element = target.current;
     const windowScroll = element.scrollTop; // Distance of the scrollbar from the leftmost point
     const totalHeight = element.scrollHeight - element.clientHeight; // Total width the scrollbar can traverse
     if (windowScroll === 0) {
       return setScrollProgress(0);
     }
 
     if (windowScroll > totalHeight) {
       return setScrollProgress(100);
      }
  
     setScrollProgress((windowScroll / totalHeight) * 100);
   };

   useEffect(() => {
     if (!target.current) {
       return;
      }

    const element = target.current;
    
        element.addEventListener('scroll', scrollListener);

        return () => {
          element.removeEventListener('scroll', scrollListener);
        };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      webGLFluidEnhanced.simulation(canvas, {
        SIM_RESOLUTION: 128, // Resolution of the simulation grid
        DYE_RESOLUTION: 1024, // Resolution of the dye grid
        CAPTURE_RESOLUTION: 512, // Resolution of captured frames
        DENSITY_DISSIPATION: 3, // Rate at which density dissipates
        VELOCITY_DISSIPATION: 0.2, // Rate at which velocity dissipates
        PRESSURE: 0.8, // Pressure value used in the simulation
        PRESSURE_ITERATIONS: 20, // Number of pressure iterations
        CURL: 10, // Curl value used in the simulation
        INITIAL: true, // Enables splats on initial load
        SPLAT_AMOUNT: 3, // Number of initial splats (Random number between n and n * 5)
        SPLAT_RADIUS: 0.2, // Radius of the splats
        SPLAT_FORCE: 7000, // Force applied by the splats
        SPLAT_KEY: 'Space', // Keyboard key to spawn new splats (empty to disable)
        SHADING: true, // Enables shading in the visualization
        COLORFUL: true, // Enables rapid changing of colors
        COLOR_UPDATE_SPEED: 12, // Speed of color update
        HOVER: true, // Enables interaction on hover
        BACK_COLOR: '#000000', // Background color of the canvas
        TRANSPARENT: false, // Makes the canvas transparent if true
        BRIGHTNESS: 0.6, // Color brightness (Recommend lower than 1.0 if BLOOM is true)
        BLOOM: true, // Enables bloom effect
        BLOOM_ITERATIONS: 20, // Number of bloom effect iterations
        BLOOM_RESOLUTION: 256, // Resolution of the bloom effect
        BLOOM_INTENSITY: 1, // Intensity of the bloom effect
        BLOOM_THRESHOLD: 0.6, // Threshold for the bloom effect
        BLOOM_SOFT_KNEE: 1, // Soft knee value for the bloom effect
        SUNRAYS: true, // Enables sunrays effect
        SUNRAYS_RESOLUTION: 64, // Resolution of the sunrays effect
        SUNRAYS_WEIGHT: 0.8, // Weight of the sunrays effect
        COLOR_PALETTE:  ['#FF76CE','#C40C0C','#004225','#FC4100','#FF7F3E','#5BBCFF','#8576FF','#B51B75','#4793AF','#FAEE1C','#00215E','#FFC55A','#5E1675','#9195F6','#FFC94A','#0079FF','#06FF00','#AA2EE6','#3F52E3'],
      });
    }
  }, []);  

  return (
    <>
      <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh', zIndex: "0", position: "fixed" }} />
      <div ref={target} className="flex min-h-screen flex-col items-center">
        <Navbar scrollProgress={scrollProgress} setShowMobileMenu={setShowMobileMenu} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <MobileBurgerView showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <Hero/>
        <About/>
        <Project/>
        <Skills/>
        <Certificates/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}
