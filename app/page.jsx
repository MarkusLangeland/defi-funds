"use client"

import { useEffect } from "react";
import './globals.css'


export default function Home() {
  //Mouse Tracking:
  useEffect(() => {
    const blob = document.getElementById("blob");
    const updateMousePosition = ev => {
      blob.animate({
        left: `${ev.clientX}px`,
        top: `${ev.clientY}px`
      }, { duration: 3000, fill: "forwards" })
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => { 
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);


  return (
    <main>
      
      <div id="blur" ><h1 className=" text-6xl text-white ">Landing Page</h1></div>
      <div id="blob"></div>
    </main> 
  )
}


