"use client";

import { useEffect } from "react";
import "./globals.css";

export default function Home() {
  //Mouse Tracking:
  useEffect(() => {
    const blob = document.getElementById("blob");
    const updateMousePosition = (ev) => {
      blob.animate(
        {
          left: `${ev.clientX}px`,
          top: `${ev.clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <main>
      <div id="blur">
        <div className="flex align-middle justify-center mt-40 w-screen">
          <div>
            <h1 className=" text-5xl font-semibold tracking-wider">
              DefiFunds
            </h1>
            <p>sdasdasd</p>
            <button className="bg-primary rounded-md h-10 w-40 text-white">
              Get started Now
            </button>
          </div>
        </div>
      </div>
      <div id="blob"></div>
    </main>
  );
}
