"use client"
import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import HighlightProject from './HighlightProject';
import { Project as ProjectType } from './types';

import {
  inotebookProjectData,
    newsappProjectData,
    musicappProjectData,
    mergerProjectData,
  } from "./ProjectData";
import ImageModal from '../Modal/ImageModal';


function Project() {


    const [hoveredIndex, setHoveredIndex] = useState(null);
    const audioRef = React.createRef<HTMLAudioElement>();

    const handleMouseEnter = (index:any) => {
      setHoveredIndex(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredIndex(null);
    };

    const _projects:ProjectType[] = [
      inotebookProjectData,
    newsappProjectData,
    musicappProjectData,
    mergerProjectData,
      ];
      const [active, setActive] = useState(false);
      // true: all projects, false: single project
      const [content, setContent] = useState(true);

      const [proj, setProj] = useState<ProjectType>(_projects[0]);

      const [imageModalProject, setImageModalProject] = useState<ProjectType>(_projects[0]);
      const [imageModalSrc, setImageModalSrc] = useState(0);
      const [showImageModal, setShowImageModal] = useState(false);

        const playAudio = () => {
          if (audioRef.current) {
            audioRef.current.play();
          }
        };
    
      const handleDetails = (project:ProjectType) => {
        playAudio();
        setActive(true);
        setProj(project);
        setTimeout(() => {    
          setActive(false);
          setContent(!content);
        }, 800);
      };

  return (<>
    <ImageModal imageModalProject={imageModalProject}
            setShowImageModal={setShowImageModal}
            showImageModal={showImageModal}
            imageModalSrc={imageModalSrc}
            setImageModalSrc={setImageModalSrc}/>

    <Element id="project" name="project" className="corners relative pointer-events-none w-full h-[87vh] my-8 flex flex-col justify-center items-center gap-5">
      <div className="top left"></div>
      <div className="top right"></div>
      <div className="bottom right"></div>
      <div className="bottom left"></div>
      <div id='trigger' className="cut font-semibold text-white flex flex-col relative overflow-hidden w-[90%] md:w-[80%] ">
        <div className="h-full bg-[#1A1E21] w-full p-6 md:p-8 flex justify-center items-center">
          <p
            className="text-4xl md:text-6xl tracking-wider heading relative uppercase italic text-[#ccc]"
            style={{ fontFamily: "Russo One, sans-serif" }}
          >
            Projects
          </p>
          <div className='hidden md:flex flex-col justify-center items-start gap-3 absolute right-8'>
          <span className='flex justify-center items-center gap-3 text-[#ccc] font-normal'><i className={`fa-solid ${content?"fa-up-right-and-down-left-from-center":"fa-down-left-and-up-right-to-center"}`}></i>{content?"Expand Details":"Close Details"}</span>
          <span className='flex justify-center items-center gap-3 text-[#ccc] font-normal'><i className="fa-solid fa-globe"></i>Live Site</span>
          <span className='flex justify-center items-center gap-3 text-[#ccc] font-normal'><i className="fa-solid fa-code"></i>Code Repo</span>
          </div>
        </div>
        <audio ref={audioRef} src="/audio.mp3" />
        <div className={`${content?"flex":"hidden"} ${active ? "close" : "open"} flex-wrap justify-center items-center gap-4 md:gap-10 w-full p-7 md:p-10 relative`}>
          {content && _projects.map((project, index) => (
            <div
              key={index}
              className={`${
                hoveredIndex === index ? 'smallcut2' : 'smallcut'
              } font-semibold text-white flex  relative overflow-hidden w-full md:w-[45%] h-24 md:h-40`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                onClick={() => handleDetails(project)}
                className="cursor-pointer h-full w-36 md:w-64 flex justify-center items-center text-black"
                style={{
                  background: project.bg,
                }}
              >
                <span className={`scale-125`}>
                  {project.icon}
                </span>
              </div>
              <div className="flex flex-col justify-start items-start gap-3 w-full p-3 relative">
                <div className='flex flex-col md:flex-row w-full  gap-5 justify-center items-center'>
                <p
                  className="text-lg md:text-2xl tracking-wider smallHeading relative uppercase italic text-[#ccc]"
                  style={{ fontFamily: "Russo One, sans-serif" }}
                  >
                  {project.title}
                </p>
                <div className='flex justify-center items-center gap-5' >
                <i onClick={() => handleDetails(project)} className={`fa-solid fa-up-right-and-down-left-from-center text-[#a2a0a0] cursor-pointer hover:text-[#FFD474]`}></i>
                <a href={project.live} target='_blank' rel="noopener noreferrer"><i className="fa-solid fa-globe text-[#a2a0a0] cursor-pointer hover:text-[#FFD474]"></i></a>
                <a href={project.repository} target='_blank' rel="noopener noreferrer"><i className="fa-solid fa-code text-[#a2a0a0] cursor-pointer hover:text-[#FFD474]"></i></a>
                    </div>
                </div>
                <p className="hidden md:block text-md text-[#ccc]">
                  <i className="fa-solid fa-angle-right mr-3 text-[#ffd474]"></i>{project.preview}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={`pt-3 py-5 relative px-6 transition-all ease-linear duration-500 ${active ? "close" : "open"} ${content ? "all" : "highlight"}`}>
          {!content && (
            <HighlightProject
              project={proj}
              handleDetails={handleDetails}
              setImageModalProject={setImageModalProject}
              setShowImageModal={setShowImageModal}
              setImageModalSrc={setImageModalSrc}
            />
          )}
        </div>
    </div>
      </Element>
      </>
  );
}

export default Project;
