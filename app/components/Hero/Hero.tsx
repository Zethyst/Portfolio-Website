import React from 'react'
import styles from './Hero.module.css';
import Typed from 'typed.js';
import { Element } from "react-scroll";

function Hero() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Developer</i>', '<i>Engineer</i>','<i>Coder</i>'],
      typeSpeed: 60,
      loop: true,
      loopCount: Infinity,
      backSpeed: 80,
      backDelay: 400,
      showCursor:false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleButtonClick = () => {
    // Check if the Vibration API is supported
    if (navigator.vibrate) {
      // Vibrate for 200 milliseconds
      navigator.vibrate(400);
    } else {
      console.log("Vibration API is not supported on this device.");
    }
  };

  return (
    <Element id="home" name="home" className="corners relative pointer-events-none w-full h-[85vh] flex flex-col justify-center items-center gap-5">
    <div className="top left"></div>
    <div className="top right"></div>
    <div className="bottom right"></div>
    <div className="bottom left"></div>
      <p className={`text-7xl md:text-8xl uppercase text-center italic tracking-wide text-white`} style={{fontFamily:"Russo One, sans-serif"}}>Akshat Jaiswal</p>
      <button onClick={handleButtonClick}  className="button text-3xl font-semibold text-black flex"> <span ref={el} /></button>
  </Element>
  )
}

export default Hero