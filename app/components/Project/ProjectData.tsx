import { IonIcon } from "react-ion-icon";
import { Project } from "./types";

// language icon images
import reactIcon from "../../assets/languages/react.png";
import cssIcon from "../../assets/languages/css.png";
import firebaseIcon from "../../assets/languages/firebase.png";
import javascriptIcon from "../../assets/languages/javascript.png";
import tailwindIcon from "../../assets/languages/tailwind.png";
import HTMLIcon from "../../assets/languages/html.png";
import sqlIcon from "../../assets/languages/sql.png";
import sassIcon from "../../assets/languages/sass.png";
import nodeIcon from "../../assets/languages/node.png";
import expressIcon from "../../assets/languages/node.png";
import mongodbIcon from "../../assets/languages/mongodb_11zon.png";
import awsIcon from "../../assets/languages/aws.png";
import herokuIcon from "../../assets/languages/heroku.png";
import jwtIcon from "../../assets/languages/jwt.png";
import reduxIcon from "../../assets/languages/redux.png";

// iNotebook Project images
import iNotebookImg5 from "../../assets/projects/iNotebook/Empty.png";
import iNotebookImg6 from "../../assets/projects/iNotebook/Home.png";
import iNotebookImg7 from "../../assets/projects/iNotebook/OTP.png";
import iNotebookImg8 from "../../assets/projects/iNotebook/addnote.png";
import iNotebookImg9 from "../../assets/projects/iNotebook/ForgotPassword.png";

// Newsapp Project images
import newsappImg1 from "../../assets/projects/Newsapp/home.png";

// MusicApp project images
import musicImg1 from "../../assets/projects/Musicapp/SongPlay.png";
import musicImg2 from "../../assets/projects/Musicapp/SongPause.png";
import musicImg3 from "../../assets/projects/Musicapp/Albums.png";
import musicImg4 from "../../assets/projects/Musicapp/Lyrics.png";

// PDF Merger Express project images
import MergerImg1 from "../../assets/projects/Merger/Home.png";

export const inotebookProjectData: Project = {
  id: "1",
  technologies: [
    { icon: mongodbIcon, color: "mongo" },
    { icon: tailwindIcon, color: "tailwind" },
    { icon: expressIcon, color: "express" },
    { icon: reactIcon, color: "react" },
    { icon: reduxIcon, color: "redux" },
    { icon: nodeIcon, color: "node" },
    { icon: jwtIcon, color: "jwt" },
  ],
  title: "iNotebook",
  preview:
    "A fully functional and responsive notes saving app built with MongoDB, Express, React, NodeJS, and more.",
  desc: "Introducing iNoteBook – a beautifully crafted web app designed to keep your notes organized, secure, and accessible from anywhere. iNoteBook is a secure cloud-based note storage solution. Organize effortlessly with our user-friendly interface. Start your journey with iNotebook today!",
  imgs: [
    { src: iNotebookImg5 },
    { src: iNotebookImg6 },
    { src: iNotebookImg7 },
    { src: iNotebookImg8 },
    { src: iNotebookImg9 },
  ],
  repository: "https://github.com/Zethyst/iNotebook",
  live: "https://inotebook-gold.onrender.com/",
  icon: <IonIcon name="book" size="large" />,
  bg: "linear-gradient(62deg, #ae8625 0%, #f7e58a 75%, #d2ac47 100%)",
  scale: 2,
};

export const newsappProjectData: Project = {
  id: "2",
  technologies: [
    { icon: tailwindIcon, color: "tailwind" },
    { icon: expressIcon, color: "express" },
    { icon: reactIcon, color: "react" },
    { icon: nodeIcon, color: "node" },
  ],
  title: "NewsApp",
  preview:
    "NewsRadar is a sleek and modern news website built to deliver the latest and most relevant news to users",
  desc: "With a user-friendly interface and a wide range of categories, NewsRadar keeps you informed on everything that matters. Developed with React.js, this project showcases responsive design, efficient user interactions, and seamless navigation. Stay updated with NewsRadar, your go-to news destination!",
  imgs: [{ src: newsappImg1 }],
  repository: "https://github.com/Zethyst/NewsApp",
  live: "https://zethyst.github.io/NewsApp/",
  icon: <IonIcon name="newspaper" size="large" />,
  bg: "linear-gradient(24deg, #6157FF, #EE49FD)",
  scale: 2,
};

export const musicappProjectData: Project = {
  id: "3",
  technologies: [
    { icon: HTMLIcon, color: "html" },
    { icon: cssIcon, color: "css" },
    { icon: javascriptIcon, color: "javascript" },
  ],
  title: "Tunetron",
  preview:
    "Tunetron is a feature-rich and visually stunning music player website that aims to deliver an immersive and enjoyable music listening experience",
  desc: "Tunetron is a feature-rich and visually stunning music player website that aims to deliver an immersive and enjoyable music listening experience. Immerse yourself in a visually captivating interface designed to enhance your music listening journey. The sleek and modern design elements, coupled with smooth animations, create an aesthetically pleasing experience.",
  imgs: [
    { src: musicImg1 },
    { src: musicImg2 },
    { src: musicImg3 },
    { src: musicImg4 },
  ],
  repository: "https://github.com/Zethyst/Tunetron-Music-Player",
  live: "https://tunetron.vercel.app/",
  icon: <i className="fa-solid fa-music scale-150"></i>,
  bg: "radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% )",
  scale: 4,
};

export const mergerProjectData: Project = {
  id: "4",
  technologies: [
    { icon: HTMLIcon, color: "html" },
    { icon: cssIcon, color: "css" },
    { icon: javascriptIcon, color: "javascript" },
    { icon: nodeIcon, color: "node" },
  ],
  title: "Merge Express",
  preview:
    "A sleek and user-friendly PDF utility application designed to merge multiple PDF files into a single document",
  desc: "Welcome to PDF Merge Express, a sleek and user-friendly PDF merger application designed to streamline the process of merging multiple PDF files into a single cohesive document. With its intuitive interface and powerful functionality, this application simplifies the task of combining PDF files while providing an exceptional user experience.",
  imgs: [{ src: MergerImg1 }],
  repository: "https://github.com/Zethyst/PDF-Merge-Express",
  live: "https://pdf-merger-zethyst.onrender.com/",
  icon: <i className="fa-solid fa-file-pdf scale-150"></i>,
  bg: "linear-gradient(24deg, #33001b, #ff0084)",
  scale: 3.5,
};
