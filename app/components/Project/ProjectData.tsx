import { Project } from "./types";

// language icon images
import reactIcon from "../../assets/languages/react.png";
import typescriptIcon from "../../assets/languages/typescript.png";
import nextjsIcon from "../../assets/languages/nextjs.png";
import cssIcon from "../../assets/languages/css.png";
import firebaseIcon from "../../assets/languages/firebase.png";
import javascriptIcon from "../../assets/languages/javascript.png";
import tailwindIcon from "../../assets/languages/tailwind.png";
import HTMLIcon from "../../assets/languages/html.png";
import sqlIcon from "../../assets/languages/sql.png";
import sassIcon from "../../assets/languages/sass.png";
import nodeIcon from "../../assets/languages/node.png";
import pythonIcon from "../../assets/languages/python.png";
import flaskIcon from "../../assets/languages/flask.png";
import dockerIcon from "../../assets/languages/docker.png";
import expressIcon from "../../assets/languages/node.png";
import mongodbIcon from "../../assets/languages/mongodb_11zon.png";
import awsIcon from "../../assets/languages/aws.png";
import herokuIcon from "../../assets/languages/heroku.png";
import jwtIcon from "../../assets/languages/jwt.png";
import reduxIcon from "../../assets/languages/redux.png";
import socketIcon from "../../assets/languages/socket.png";

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

// Sketchio project images
import WhiteboardImg1 from "../../assets/projects/Sketchio/Home.png";
import WhiteboardImg3 from "../../assets/projects/Sketchio/collab.png";
import WhiteboardImg2 from "../../assets/projects/Sketchio/chat.png";
import WhiteboardImg4 from "../../assets/projects/Sketchio/room.png";

//BlueprintAI project images
import BlueprintImg1 from "../../assets/projects/BlueprintAI/home.png";
import BlueprintImg2 from "../../assets/projects/BlueprintAI/generate.png";
import BlueprintImg3 from "../../assets/projects/BlueprintAI/view.png";
import BlueprintImg4 from "../../assets/projects/BlueprintAI/workspace.png";
import BlueprintImg5 from "../../assets/projects/BlueprintAI/login.png";
import BlueprintImg6 from "../../assets/projects/BlueprintAI/user.png";

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
  icon: <i className="fa-solid fa-book-open fa-2xl"></i>,
  bg: "linear-gradient(62deg, #ae8625 0%, #f7e58a 75%, #d2ac47 100%)",
  scale: 2,
};

export const newsappProjectData: Project = {
  id: "4",
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
  repository: "https://github.com/Zethyst/NewsApp-2.0",
  live: "https://news-app-2-0.vercel.app",
  icon: <i className="fa-solid fa-newspaper fa-2xl"></i>,
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
  icon: <i className="fa-solid fa-music  fa-2xl"></i>,
  bg: "linear-gradient(24deg, #fc5c7d, #6a82fb)",
  scale: 4,
};

export const mergerProjectData: Project = {
  id: "2",
  technologies: [
    { icon: nextjsIcon, color: "nextjs" },
    { icon: typescriptIcon, color: "typescript" },
    { icon: tailwindIcon, color: "tailwind" },
    { icon: reactIcon, color: "react" },
    { icon: reduxIcon, color: "redux" },
    { icon: nodeIcon, color: "node" },
    { icon: expressIcon, color: "express" },
    { icon: socketIcon, color: "socket" },
  ],
  title: "Sketchio",
  preview:
    "Enjoy a sleek UI, robust chat system, and a variety of drawing options including pen, line, and shapes.",
  desc: "Sketchio is a cutting-edge, real-time collaborative whiteboard application designed to boost teamwork and creativity across various settings. It's the perfect tool for brainstorming, teaching, and project planning. Key features include an integrated chat system, versatile drawing options like pens, lines, and shapes, customizable color and thickness controls, and essential undo/redo functionality.",
  imgs: [
    { src: WhiteboardImg1 },
    { src: WhiteboardImg2 },
    { src: WhiteboardImg3 },
    { src: WhiteboardImg4 },
  ],
  repository: "https://github.com/Zethyst/Real-Time-WhiteBoard-Sharing-App",
  live: "https://real-time-white-board-sharing-app.vercel.app/",
  // icon: <i className="fa-solid fa-chalkboard-user fa-2xl"></i>,
  icon: <i className="fa-solid fa-compass-drafting fa-2xl"></i>,
  bg: "linear-gradient(62deg, #ae8625 0%, #f7e58a 75%, #d2ac47 100%)",
  scale: 3.5,
};

export const blueprintProjectData: Project = {
  id: "1",
  technologies: [
    { icon: nextjsIcon, color: "nextjs" },
    { icon: typescriptIcon, color: "typescript" },
    { icon: tailwindIcon, color: "tailwind" },
    { icon: pythonIcon, color: "python" },
    { icon: flaskIcon, color: "flask" },
    { icon: mongodbIcon, color: "mongo" },
    { icon: jwtIcon, color: "jwt" },
    { icon: dockerIcon, color: "docker" },
  ],
  title: "Blueprint.Ai",
  preview:
    "Automatic SRS Generator App. Say goodbye to time-consuming, manual SRS writing.",
  desc: "Blueprint.AI's UI and powerful AI capabilities, helps you effortlessly generate comprehensive SRS documents in seconds. Whether you're starting a new project from scratch or refining an existing one, Blueprint.AI empowers you to capture all the essential details and create a clear, well-defined roadmap for your software development journey",
  imgs: [
    { src: BlueprintImg1 },
    { src: BlueprintImg2 },
    { src: BlueprintImg3 },
    { src: BlueprintImg4 },
    { src: BlueprintImg5 },
    { src: BlueprintImg6 },
  ],
  repository: "https://github.com/Zethyst/Blueprint.AI",
  live: "https://blueprint-ai-zethysts-projects.vercel.app/",
  // icon: <i className="fa-solid fa-chalkboard-user fa-2xl"></i>,
  icon: <i className="fa-solid fa-hexagon-nodes fa-2xl"></i>,
  bg: "radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% )",
  scale: 3.5,
};
