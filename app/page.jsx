"use client";

import { useEffect } from "react";
import "./globals.css";
import Link from "next/link";


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
    <main className=" overflow-y-hidden h-screen">
      <div id="blur">
        <div className="flex items-center justify-center mt-40 w-screen flex-col p-10">
          <div>
            <h1 className=" text-5xl font-semibold tracking-wider">
              DefiFunds
            </h1>
            <p className="mt-10 mb-5">
              Crypto investing made easy. Let fundmangers do the trading for
              you.
            </p>
            <Link
              className="bg-primary p-2 rounded-md text-white"
              href="DiscoverFunds"
            >
              Discover Funds
            </Link>
            <Link
              className=" p-2 rounded-md border border-primary ml-2"
              href="NewFund"
            >
              Create your own Fund
            </Link>
          </div>
          {/* <div className="flex justify-center items-center mt-60">
            <div>asd</div>
          </div> */}
        </div>
      </div>
      <div id="blob"></div>
    </main>
  );
}
