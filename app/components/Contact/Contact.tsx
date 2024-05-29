"use client"
import React, { useRef, useState } from 'react';
import { Element } from 'react-scroll';
import emailjs from "@emailjs/browser";

function Contact() {
  const [message, setMessage] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);
  const [nameCheck, setNameCheck] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [subjectCheck, setSubjectCheck] = useState("");
  const [messageCheck, setMessageCheck] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const email = "21052646@kiit.ac.in";
  const [active, setActive] = useState("email");
  const [contactInfo, setContactInfo] = useState(email);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleButtonClick();
    if (nameCheck === "") {
      setMessage("Include your name!");
      setMessageVisible(true);
      setTimeout(() => {
        setMessageVisible(false);
      }, 3300);
    } else if (emailCheck === "") {
      setMessage("Include your email!");
      setMessageVisible(true);
      setTimeout(() => {
        setMessageVisible(false);
      }, 3300);
    } else if (subjectCheck === "") {
      setMessage("Include a subject!");
      setMessageVisible(true);
      setTimeout(() => {
        setMessageVisible(false);
      }, 3300);
    } else if (messageCheck === "") {
      setMessage("Include a message!");
      setMessageVisible(true);
      setTimeout(() => {
        setMessageVisible(false);
      }, 3300);
    } else {
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
            formRef.current as HTMLFormElement,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
          )
          .then(
            (result) => {
              console.log(result.text);
              setMessage("Message Sent!");
              setMessageVisible(true);
              setTimeout(async function () {
                setMessageVisible(false);
              }, 3300);
            },
            (error) => {
              console.log(error.text);
              setMessage("An error occured :(");
              setMessageVisible(true);
              setTimeout(async function () {
                setMessageVisible(false);
              }, 3300);
            })
    }
  };

  const handleInfo = (variable: string, str: string) => {
    setActive(str);
    setContactInfo(variable);
  };

  const handleButtonClick = () => {
    // Check if the Vibration API is supported
    if (navigator.vibrate) {
      // Vibrate for 200 milliseconds
      navigator.vibrate(200);
    } else {
      console.log("Vibration API is not supported on this device.");
    }
  };

  return (
    <Element id="contact" name="contact" className="corners relative pointer-events-none w-full h-[85vh] my-6 flex flex-col justify-center items-center gap-5">
      <div className="top left"></div>
      <div className="top right"></div>
      <div className="bottom right"></div>
      <div className="bottom left"></div>
      <div className="cut text-[#ccc] flex relative overflow-hidden md:w-[60%]">
        <div className="h-full bg-[#1a1e21] w-[100%] flex flex-col justify-center items-center gap-2 md:gap-4 p-5 pointer-events-auto">
          <p className='text-xl md:text-3xl pt-5 md:pt-1'>Let's get in touch</p>
          <p className='block md:hidden text-[#b2b0b0c5] text-sm'>I'll reply, I promise ;)</p>
          <form className='flex flex-col items-center justify-around w-full md:w-80 my-2' onSubmit={handleSubmit} ref={formRef}>
            <input type="text" placeholder='Name' name='user_name' onChange={(e) => setNameCheck(e.target.value)} />
            <input type="email" placeholder='Email' name='user_email' onChange={(e) => setEmailCheck(e.target.value)} />
            <input type="text" placeholder='Subject' name='user_subject' onChange={(e) => setSubjectCheck(e.target.value)} />
            <textarea name="message" placeholder='Message' id="" onChange={(e) => setMessageCheck(e.target.value)}></textarea>
            <button type="submit" className='submit text-black translate-y-4'>Send</button>
          </form>
        </div>
        <div className="flex flex-col justify-start items-start gap-1 md:w-full p-5 md:p-10 relative">
        <p className='hidden md:block text-3xl'>Contact Info</p>
        <p className='hidden md:block text-md text-[#969696] pb-2' style={{borderBottom:"2px solid #1A1E21"}}>Feel free to contact me or check me out on other platforms </p>
        <div className='flex flex-col justify-center items-start gap-6 md:gap-3 py-3'>

        <a href="https://wa.link/y7e6yz" target='_blank'>
        <div className='flex justify-center items-center gap-2 group pointer-events-auto'>
            <div className='flex justify-center items-center p-3 rounded-full bg-[#1A1E21] group-hover:bg-[#FFD474] group-hover:text-black text-[#ccc]'>
            <i className="fa-solid fa-phone cursor-pointer scale-125"></i>
            </div>
            <p className='text-[#969696] hidden md:block'>
                <span className='text-[#ccc]'>Phone: </span>91+8318876136
            </p>
        </div>
        </a>
        <a href="https://t.me/Vengix" target='_blank'>
        <div className='flex justify-center items-center gap-2 group pointer-events-auto'>
            <div className='flex justify-center items-center p-4 rounded-full bg-[#1A1E21] group-hover:bg-[#FFD474] group-hover:text-black text-[#ccc]'>
            <i className="fa-brands fa-telegram scale-150"></i>
            </div>
            <p className='text-[#969696] hidden md:block'>
            <span className='text-[#ccc]'>Telegram: </span>Vengix
            </p>
        </div>
            </a>
            <a href="https://github.com/Zethyst" target='_blank'>
        <div className='flex justify-center items-center gap-2 group pointer-events-auto'>
            <div className='flex justify-center items-center p-4 rounded-full bg-[#1A1E21] group-hover:bg-[#FFD474] group-hover:text-black text-[#ccc]'>
            <i className="fa-brands fa-github scale-125"></i>
            </div>
            <p className='text-[#969696] hidden md:block'>
                <span className='text-[#ccc]'>Github: </span>github.com/Zethyst
            </p>
        </div>
        </a>
        <a href="https://www.linkedin.com/in/akshat-jaiswal-4664a2197/" target='_blank'>
        <div className='flex justify-center items-center gap-2 group pointer-events-auto'>
        <div className='flex justify-center items-center p-4 rounded-full bg-[#1A1E21] group-hover:bg-[#FFD474] group-hover:text-black text-[#ccc]'>
            <i className="fa-brands fa-linkedin scale-125"></i>
        </div>
        <p className='text-[#969696] max-w-[270px] truncate hidden md:block'>
            <span className='text-[#ccc]'>LinkedIn: </span>linkedin.com/in/akshat-jaiswal-4664a2197/
        </p>
        </div>
        </a>
        <div className='flex justify-center items-center gap-2 group pointer-events-auto'>
            <div className='flex justify-center items-center p-4 rounded-full bg-[#1A1E21] group-hover:bg-[#FFD474] group-hover:text-black text-[#ccc]'>
          <svg className='cursor-pointer translate-y-0' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5.0 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"/>
          </svg></div>
            <p className='text-[#969696] hidden md:block'>
                <span className='text-[#ccc]'>Leetcode: leetcode/zethyst</span>
            </p>
            </div>
      
        </div>
        </div>
      </div>
      <div className={`mt-0 h-0 transition-all duration-300 ease-in overflow-y-hidden bottom-14 z-20 ${messageVisible ? "activeMessage" : ""}`}>
        <div className="message">{message}
        </div>
      </div>
    </Element>
  )
}

export default Contact;
