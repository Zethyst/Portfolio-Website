"use client";
import React, { useEffect, useRef, RefObject } from "react";
import Portrait from "../../assets/self.png";
import Image from "next/image";
import { Element } from "react-scroll";

const About: React.FC = () => {
  const innerRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const inner = innerRef.current;

    if (!inner) return;

    let mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function (event: MouseEvent) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function (element: HTMLElement) {
        this._x = element.offsetLeft + Math.floor(element.offsetWidth / 2);
        this._y = element.offsetTop + Math.floor(element.offsetHeight / 2);
      },
      show: function () {
        return `(${this.x},${this.y})`;
      },
    };

    mouse.setOrigin(inner);
    let counter = 0;
    const refreshRate = 10;

    const isTimeToUpdate = function () {
      return counter++ % refreshRate === 0;
    };

    const onMouseEnterHandler = function (event: MouseEvent) {
      update(event);
    };

    const onMouseLeaveHandler = function () {
      inner.style.transform = "";
    };

    const onMouseMoveHandler = function (event: MouseEvent) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    const update = function (event: MouseEvent) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    const updateTransformStyle = function (x: string, y: string) {
      const style = `rotateX(${x}deg) rotateY(${y}deg)`;
      inner.style.transform = style;
    };

    inner.onmousemove = onMouseMoveHandler;
    inner.onmouseenter = onMouseEnterHandler;
    inner.onmouseleave = onMouseLeaveHandler;

    return () => {
      inner.onmousemove = null;
      inner.onmouseenter = null;
      inner.onmouseleave = null;
    };
  }, []);

  const handleDownload = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    if (navigator.vibrate) {
      // Vibrate for 200 milliseconds
      navigator.vibrate(200);
    } else {
      console.log("Vibration API is not supported on this device.");
    }
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=10oBO9snEpW8trxUaaXW-1rulBLn-O81w';
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <Element id="about" name="about"
      className="corners relative pointer-events-none w-full h-[85vh] my-10 flex flex-col justify-center items-center gap-5">
      <div className="top left"></div>
      <div className="top right"></div>
      <div className="bottom right"></div>
      <div className="bottom left"></div>
      <div className="cut font-semibold text-white flex flex-col md:flex-row relative overflow-hidden w-[90%] md:w-[80%] pointer-events-none">
          <div className="h-full bg-[#1A1E21] p-7 md:p-0 md:w-96 flex justify-center items-center">
            <p className={`block md:hidden text-4xl tracking-wider heading relative uppercase italic text-[#ccc] `} style={{fontFamily:"Russo One, sans-serif"}}>About Me</p>
            <div className="hidden md:block" id="container" style={{ perspective: "15px",pointerEvents:"auto" }}>
              <div id="inner" ref={innerRef}>
                <a href="#" className="photo">
                  <div
                    className="demo-img  m-10 rounded-3xl shadow-lg"
                    style={{ position: "relative", perspective: "1000px" }}
                  >
                    <Image
                      src={Portrait}
                      alt="Self"
                      style={{
                        borderRadius: "1rem",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    ></Image>
                    <div className="glow-wrap">
                      <i className="glow"></i>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-7 md:gap-10 w-full py-8 md:py-10 px-10 relative">
            <p className={`text-6xl hidden md:block tracking-wider heading relative uppercase italic text-[#ccc] `} style={{fontFamily:"Russo One, sans-serif"}}>About Me</p>
            <p className="text-base hidden md:block md:text-xl text-[#ccc]"><i className="fa-solid fa-angle-right mr-3 text-[#ffd474]"></i>Welcome! My name is <span className="gold-text">Akshat Jaiswal </span>AKA <span className="gold-text">Zethyst.</span> I am a Software Engineer based in Bhubaneswar, India.  I am also a Computer Science undergraduate from KIIT. </p>
            <p className="text-base block md:hidden md:text-xl text-[#ccc]"><i className="fa-solid fa-angle-right mr-3 text-[#ffd474]"></i>Welcome! My name is <span className="gold-text">Akshat Jaiswal </span>AKA <span className="gold-text">Zethyst.</span> I am a Software Engineer based in Bhubaneswar, India.</p>
            <p className="text-base md:text-xl text-[#ccc]"><i className="fa-solid fa-angle-right mr-3 text-[#ffd474]"></i>Starting in 2021, taking on the challenge of creating the best timetable website for my class I became obsessed with the world of web development. Poring through resources such as Scrimba, w3schools, and YouTube I developed the necessary skills for becoming a full stack developer..</p>
            <div className="flex flex-col md:flex-row md:gap-64 ">
            <p className="text-base hidden md:block md:text-xl text-[#ffd474] absolute left-10 source-code-pro"><i className="fa-solid fa-angle-right mr-3"></i>Let's work together!</p>
            <a onClick={handleDownload}  href="https://drive.google.com/file/d/10oBO9snEpW8trxUaaXW-1rulBLn-O81w/view?usp=sharing" target="_blank" className="absolute md:left-64 pointer-events-auto hover:scale-105 transition-all duration-200 ease-in button">
              <button className="text-3xl font-semibold text-black"> Resume</button>
            </a>
            </div>
          </div>
      </div>
    </Element>
  );
};

export default About;
