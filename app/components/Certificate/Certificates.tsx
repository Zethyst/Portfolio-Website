// Certificates.tsx
import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { certificateData } from './CertificateData';
import { StaticImageData } from 'next/image';
import Image from "next/image";

interface Certificate {
  src: StaticImageData;
}

function Certificates() {
  const [imageSrc, setImageSrc] = useState<number>(0);

  const handleImgChange = (dir: "fwd" | "bwd") => {
    const totalImages = certificateData.imgs.length - 1;

    if (dir === "fwd") {
      setImageSrc((prevSrc) => (prevSrc === totalImages ? 0 : prevSrc + 1));
    } else {
      setImageSrc((prevSrc) => (prevSrc === 0 ? totalImages : prevSrc - 1));
    }
  };

  return (
    <Element
      id="certificate"
      name="certificate"
      className="corners relative pointer-events-none w-full h-[87vh] my-8 flex flex-col justify-center items-center gap-5"
    >
      <div className="top left"></div>
      <div className="top right"></div>
      <div className="bottom right"></div>
      <div className="bottom left"></div>

      <div className="cut font-semibold text-white flex flex-col relative overflow-hidden w-[90%] md:w-[80%]">
        <div className="h-full bg-[#1A1E21] w-full p-6 md:p-7 flex flex-col justify-center items-center">
          <p
            className="text-4xl md:text-5xl tracking-wider heading relative uppercase italic text-[#ccc]"
            style={{ fontFamily: "Russo One, sans-serif" }}
          >
            Bonafides
          </p>
          <p className='text-[#ccc] text-xs md:text-sm translate-y-5 py-2'>Here are some of the certificates I have recieved from completing courses online and attending bootcamps.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-7 md:gap-7 w-full px-10 relative">
                {/* ARROW LEFT */}
            <div  onClick={() => handleImgChange("bwd")} className='arrow-left pointer-events-auto absolute z-50 left-3 md:left-10 text-[#ccc] top-[40%] translate-y-[-50%] cursor-pointer opacity-60 hover:opacity-100 scale-[2]'></div>
        {/* <i
            onClick={() => handleImgChange("bwd")}
            className="fa-solid fa-chevron-left pointer-events-auto absolute z-50 left-3 md:left-10 top-[50%] translate-y-[-50%] cursor-pointer text-[#ccc] opacity-60 hover:opacity-100 scale-[2]"
        ></i> */}
          {/* ARROW RIGHT */}
        <div  onClick={() => handleImgChange("fwd")} className='arrow-right pointer-events-auto absolute z-50 right-3 md:right-10 text-[#ccc] top-[40%] translate-y-[-50%] cursor-pointer opacity-60 hover:opacity-100 scale-[2]'></div>
          {/* <i
            onClick={() => handleImgChange("fwd")}
            className="fa-solid fa-chevron-right pointer-events-auto absolute z-50 right-3 md:right-10 text-[#ccc] top-[50%] translate-y-[-50%] cursor-pointer opacity-60 hover:opacity-100 scale-[2]"
          ></i> */}

          <div  className="flex md:h-full w-80 md:w-[700px] m-4 bg-[#1a1e21] ImageContainerNotch ">
            <div className="h-full pointer-events-auto inner m-4 flex  items-start justify-center ImageInnerNotch">
              <div className=" md:h-96 w-full object-cover flex">
                {certificateData.imgs.map((src,i)=>{
                    return (
                        // <div className='w-full h-full'>
                            <Image
                            key={i}
                            className="w-full block flex-shrink-0 flex-grow-0 transition-transform duration-300 ease-in-out"
                            src={src}
                            height={380}
                            alt="Certificate Image"
                            style={{ transform: `translateX(${-100 * imageSrc}%)` }}
                            />
                        // </div>
                    )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Certificates;
