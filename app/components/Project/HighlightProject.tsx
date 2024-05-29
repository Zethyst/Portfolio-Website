import React, { useState } from "react";
import { StaticImageData } from 'next/image';
import Image from "next/image";
export interface Technology {
    icon: string | StaticImageData;
    color: string;
  }
  
  export interface Image {
    src: string | StaticImageData;
  }
  
  export interface Project {
    id: string;
    technologies: Technology[];
    title: string;
    preview: string;
    desc: string;
    imgs: Image[];
    repository: string;
    live: string;
    icon: React.ReactElement;
    bg: string;
    scale: number;
  }

interface HighlightProjectProps {
  project: Project;
  handleDetails: (project: Project) => void;
  setImageModalProject: (project: Project) => void;
  setShowImageModal: (value: boolean) => void;
  setImageModalSrc: (src: number) => void;
}

const HighlightProject: React.FC<HighlightProjectProps> = ({
  project,
  handleDetails,
  setImageModalProject,
  setImageModalSrc,
  setShowImageModal,
}) => {
  const [mainImgIndex, setMainImgIndex] = useState(0);

  const handleMainImg = (i: number) => {
    setImageModalProject(project);
    setImageModalSrc(i);
    setShowImageModal(true);
  };
  // map project technologies
  const mapTech = (techArr: Technology[]) => {
    return techArr.map((tech, index) => (
      <div className="flex pointer-events-auto" key={index}>
        <div
          className={`${tech.color} techBox flex items-center justify-center m-1 p-1 text-black font-bold overflow-hidden cursor-pointer transition-all ease-in duration-200`}
          style={{flex:2}}
        >
          <div className="min-w-6 max-w-6 min-h-6 max-h-6 flex justify-center items-center mr-1 overflow-hidden">
            <Image
              src={tech.icon}
              alt="Tech Icon"
              className="min-w-4 max-w-4 min-h-4 max-h-4"
            />
          </div>
          <div className="text-lg leading-6 mr-2 px-1">{tech.color}</div>
        </div>
      </div>
    ));
  };

  return (
    <div className="highlightWrapper pointer-events-auto md:pointer-events-none overflow-scroll flex flex-col pr-6 md:pr-0 mix-blend-overlay md:flex-row">
         {/* LEFT */}
      <div className="flex flex-col" style={{flex:"2"}}>
        <div className="pointer-events-auto title-container flex flex-col md:flex-row items-center gap-3">
            {/* PROJECT LOGO */}
          <div
          onClick={() => handleDetails(project)}
            className="h-full cursor-pointer w-20 p-4 rounded-2xl flex justify-center items-center text-black"
            style={{
              background: project.bg,
            }}
          >
            <span className={`scale-125 translate-y-1`}>{project.icon}</span>
          </div>
          {/* TITLE */}
          <div className="flex gap-5 md:gap-7  justify-center items-center">
            <p
              className="text-xl md:text-2xl tracking-wider smallHeading relative uppercase italic text-[#ccc]"
              style={{ fontFamily: "Russo One, sans-serif" }}
              onClick={() => handleDetails(project)}
            >
              {project.title}
            </p>
              {/* CLOSE DETAILS */}
            <span
              className="material-symbols-outlined text-[#a2a0a0] cursor-pointer translate-y-1 hover:text-[#FFD474]"
              onClick={() => handleDetails(project)}
            >
              close_fullscreen
            </span>
            {/* LIVE LINK */}
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-[#a2a0a0] cursor-pointer translate-y-1 hover:text-[#FFD474]">
                language
              </span>
            </a>
              {/* REPO */}
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[#a2a0a0] cursor-pointer translate-y-1 hover:text-[#FFD474]">
                code
              </span>
            </a>
          </div>
        </div>
        {/* DESCRIPTION */}
        <div className="text-sm md:text-lg font-semibold tracking-wide p-3 my-1 z-20">
        <p className="text-[#ccc]">
            <i className="fa-solid fa-angle-right mr-3 text-[#ffd474]"></i>{project.desc}
        </p>
        </div>
          {/* TECH */}
        <div className="flex flex-wrap justify-start items-start">
            {mapTech(project.technologies)}
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex m-6 bg-[#1a1e21] ImageContainerNotch" style={{flex:"2"}}>
        <div className="pointer-events-auto inner my-4 mx-3 overflow-y-scroll w-full flex items-start justify-center ImageInnerNotch">
            <div className="gallery flex flex-col">
            {project.imgs.map((img, i) => {
              return (
                <div className="min-w-full max-w-full p-5 m flex justify-center items-center" onClick={() => handleMainImg(i)}>
                  <Image
                    src={img.src}
                    className={`object-contain max-w-full max-h-80 cursor-pointer ${mainImgIndex === i && "current"}`}
                    alt="Project Image"
                    style={{border:"7px solid #2b2f33"}}
                  />
                </div>
              );
            })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightProject;
