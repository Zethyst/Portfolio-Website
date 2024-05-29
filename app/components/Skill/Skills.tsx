"use client"
import React, { useEffect, useState } from 'react'
import { Element } from "react-scroll";
import { languages, techData, otherSkills } from "./SkillsData";
import { StaticImageData } from 'next/image';
import  Image  from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

interface Skill{
    name:string;
    icon:StaticImageData;
    exp:string
}

function Skills() {
    const [showAll,setShowAll]=useState<boolean>(false);
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    
    
  useEffect(() => {
    let tl=gsap.timeline();
    tl.to("#skill0", {
      scrollTrigger: ".corners",
      scale: 1,
      duration: 0.5,
    });

    tl.to("#skill1", {
      scale: 1,
      duration: 0.5,
      
    });

    tl.to("#skill2", {
      scale: 1,
      duration: 0.5,
  
    });

    tl.to("#skill3", {
      scale: 1,
      duration: 0.5,
      
    });
    tl.to("#skill4", {
      scale: 1,
      duration: 0.5,
      
    });

    tl.to("#skill5", {
      scale: 1,
      duration: 0.5,
  
    });

    tl.to("#skill6", {
      scale: 1,
      duration: 0.5,
      
    });
    tl.to("#skill7", {
      scale: 1,
      duration: 0.5,
      
    });
      }, []); 


    const mapSkills = (skills:Skill[]) => {
        return skills.map((skill,index) => (
            <div
            id={`skill${index}`}
            key={index}
            onMouseLeave={() => setHoveredSkill(null)}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            className={`scale-0 skill-container ${hoveredSkill === skill.name ? skill.name.toLowerCase() : ''} ${showAll?skill.name.toLowerCase() : ''} pointer-events-auto lowercase z-20 flex md:justify-center md:items-center py-0 md:px-4 font-bold bg-[#1a1e21] overflow-hidden cursor-pointer transition-all ease-in duration-150  w-full md:min-w-customWidth`}
          >
                <div className={`img-container ${skill.name.toLowerCase()} lowercase max-w-[60px] min-w-[60px] min-h-[50px] max-h-[50px] flex justify-center items-center`}>
                <Image src={skill.icon}  alt="Skill Icon" className='w-8'/>
                </div>
                <div  className={`skill  flex flex-col items-start justify-center pl-3 min-w-[110px] max-w-[110px]`}>
                    <div className='lowercase text-md leading-5 min-w-[110px] max-w-[110px]'>{skill.name}</div>
                    <div className='lowercase text-sm'>{skill.exp} {typeof(skill.exp)=="number" && skill.exp > 1 ? "years" : "year"} exp</div>
                </div>
            </div>
        ));
    }
  return (
    <Element id="skill" name="skill"
      className="corners relative pointer-events-none  w-full h-[85vh] my-10 flex flex-col justify-center items-center gap-5">
      <div className="top left"></div>
      <div className="top right"></div>
      <div className="bottom right"></div>
      <div className="bottom left"></div>
      <div id='trigger' className="cut font-semibold text-white flex flex-col md:flex-row relative overflow-hidden w-[80%]  pointer-events-none">
          <div className="md:h-full bg-[#1A1E21] md:w-96 flex flex-col gap-7 p-7 md:p-10 justify-center items-center">
          <p onMouseLeave={() => setShowAll(false)}
            onMouseEnter={() => setShowAll(true)} className={`text-4xl md:text-6xl pointer-events-auto tracking-wider heading relative uppercase italic text-[#ccc] `} style={{fontFamily:"Russo One, sans-serif"}}>Skills</p>
          <p className="hidden md:block text-lg text-[#ccc]"><i className="fa-solid fa-angle-right mr-3 text-[#ffd474]"></i> Through my career in software development I have learned many languages and technologies that I am comfortable with. Programming aside, I have valuable skills with other software</p>
        <p className=" hidden md:block text-lg text-[#ccc]"><i className="fa-solid fa-angle-right mr-3 text-[#ffd474]"></i>Continuous improvement is important to me. Although I am proficient in certain languages and frameworks I will continue to learn and add to my skillset</p>
          </div>
          {/* RIGHT */}
          <div className="flex flex-col overflow-y-scroll pointer-events-auto md:pointer-events-none justify-start items-start gap-5 p-7 relative">
              {/* LANGUAGES */}
            <div className='section-container flex flex-col items-start px-3 w-full'>
                <p className={`text-xl tracking-wider smallHeading relative uppercase italic text-[#ccc] `} style={{fontFamily:"Russo One, sans-serif"}}>Languages</p>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 items-center justify-center  py-5 px-0 md:px-5 z-20 w-full'>
                {mapSkills(languages)}
                </div>
            </div>
            {/* TECHNOLOGIES */}
            <div className='section-container flex flex-col items-start px-3 w-full'>
                <p className={`text-xl tracking-wider smallHeading relative uppercase italic text-[#ccc] `} style={{fontFamily:"Russo One, sans-serif"}}>Technologies</p>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5  items-center justify-center  py-5 px-0 md:px-5 z-20 w-full'>
                {mapSkills(techData)}
                </div>
            </div>
                {/* OTHER SOFTWARE */}
            <div className='section-container flex flex-col items-start px-3 w-full'>
                <p className={`text-xl tracking-wider smallHeading relative uppercase italic text-[#ccc] `} style={{fontFamily:"Russo One, sans-serif"}}>Other Software</p>
                <div className='grid  grid-cols-1 md:grid-cols-4 gap-5  items-center justify-center  py-5 px-0 md:px-5 z-20 w-full'>
                {mapSkills(otherSkills)}
            </div>
            </div>
        </div>
        </div>
    </Element>
  )
}

export default Skills