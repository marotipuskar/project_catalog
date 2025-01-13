// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
    
//     </>
//   )
// }

// export default App

import React from "react";

const projects = [
  { name: "FashMash", link: "https://face-mash1.vercel.app/" },
  { name: "Amrutam", link: "https://amrutam-task-git-main-marotipuskars-projects.vercel.app/" },
  { name: "YT MUSIC", link: "https://marotipuskar.github.io/ytmusic/" },
  { name: "Desktop Notifier App (source code)", link: "https://github.com/marotipuskar/Desktop-notifier-App" },
  { name: "BG Changer", link: "https://marotipuskar.github.io/BG_Changer/" },
  { name: "Student attendance management s/t (code)", link: "https://github.com/marotipuskar/student_attendance_management_system" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex flex-col items-center">
          {/* Replace this with a suitable GIF */}
          <img
            src="7efs.gif"
            alt="Success GIF"
            className=" h-32 mb-3"
          />
          {/* <div class="tenor-gif-embed" data-postid="20632980" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/gif-gif-20632980">Gif Sticker</a>from <a href="https://tenor.com/search/gif-stickers">Gif Stickers</a></div>  */}
          {/* <script type="text/javascript" async src="https://tenor.com/embed.js"></script> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 700" width="700" height="700" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">…</svg> */}
          <h1 className="text-2xl font-bold text-center mb-2">
            Maroti's All Projects
          </h1>
          <p className="text-gray-500 text-center mb-4">
            Check out my live project links below!
          </p>
        </div>
        <ul className="divide-y divide-gray-300">
          {projects.map((project, index) => (
            <li key={index} className="flex items-center justify-between py-3">
              <span className="font-medium text-gray-800">{project.name}</span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white text-sm font-semibold py-1 px-3 rounded-md shadow hover:bg-blue-600"
              >
                Visit Link
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
