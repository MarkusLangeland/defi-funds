"use client";

import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import { AiFillBuild, AiOutlinePieChart } from "react-icons/ai";
import { RiFundsLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { rdt } from "public/radixConnect.js";
import { motion, AnimatePresence } from "framer-motion";

import { getFundManagerFunds } from "public/manageFundFunctions.js";
import { updateAll1 } from "public/apiDataFetcher.js";
import { accountAddress } from "public/radixConnect.js";
import { useEffect } from "react";

// export const metadata = {
//   title: "DefiFunds",
//   description: "DefiFunds",
// };

// await updateAll(accountAddress);
// console.log("asdasdasdasdasd");
// console.log(getFundManagerFunds().size);

export default function RootLayout({ children }) {
  const pathname = usePathname();

  function Footer() {
    return (
      <div className="bg-gray-100 h-fit flex align-middle justify-around">
        <div>
          <h3 className="text-xl">ShortCuts</h3>
          <ul>
            <li>
              <Link href="/">s</Link>
            </li>
            <li>
              <Link href="/">d</Link>
            </li>
            <li>
              <Link href="/">d</Link>
            </li>
            <li>
              <Link href="/">d</Link>
            </li>
            <li>
              <Link href="/">s</Link>
            </li>
            <li>
              <Link href="/">s</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl">Info</h3>
          <ul>
            <li>
              <Link href="/">s</Link>
            </li>
            <li>
              <Link href="/">d</Link>
            </li>
            <li>
              <Link href="/">d</Link>
            </li>
            <li>
              <Link href="/">d</Link>
            </li>
            <li>
              <Link href="/">s</Link>
            </li>
            <li>
              <Link href="/">s</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl">Support</h3>
          <ul>
            <li>
              <Link href="/">s</Link>
            </li>
            <li>
              <Link href="/">d</Link>
            </li>
            <li>
              <Link href="/">d</Link>
            </li>
            <li>
              <Link href="/">d</Link>
            </li>
            <li>
              <Link href="/">s</Link>
            </li>
            <li>
              <Link href="/">s</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl">Socials:</h3>
          <ul>
            <li>
              <Link href="/">s</Link>
            </li>
            <li>
              <Link href="/">d</Link>
            </li>
            <li>
              <Link href="/">d</Link>
            </li>
            <li>
              <Link href="/">d</Link>
            </li>
            <li>
              <Link href="/">s</Link>
            </li>
            <li>
              <Link href="/">s</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <html lang="en">
      <body>
        <nav className="bg-white flex absolute z-20 w-full h-14 items-center justify-between pr-10 pl-10">
          <div className="flex gap-8">
            <Link
              className="text-black font-semibold flex gap-2 items-center text-lg"
              href="/"
            >
              <Image
                src="/LogoDefiFunds.png"
                alt="Logo"
                width="400"
                height="400"
                className="h-7 w-7"
              />
              DefiFunds
            </Link>
            <div className="flex gap-4 items-center">
              <Link
                className={
                  pathname === "/DiscoverFunds"
                    ? "text-black text-base md:flex items-center justify-center gap-2 transition-all bg-blue-100 rounded-md p-2 hidden"
                    : "text-gray-600 text-sm md:flex items-center justify-center gap-2 transition-all hidden"
                }
                href="/DiscoverFunds"
              >
                <RiFundsLine />
                Discover Funds
              </Link>

              <Link
                className={
                  pathname === "/Investments"
                    ? "text-black text-base md:flex items-center justify-center gap-2 transition-all bg-blue-100 rounded-md p-2 hidden"
                    : "text-gray-600 text-sm md:flex items-center justify-center gap-2 transition-all  hidden"
                }
                href="/Investments"
              >
                <AiOutlinePieChart />
                My Investments
              </Link>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <Link
              className={
                pathname === "/ManageFund"
                  ? "text-black text-base md:flex items-center justify-center gap-2 transition-all bg-blue-100 rounded-md p-2 hidden"
                  : "text-gray-600 text-sm md:flex items-center justify-center gap-2 transition-all  hidden"
              }
              href="/ManageFund"
            >
              <AiFillBuild />
              Manage Fund
            </Link>
            <div className="md:block hidden">
              <radix-connect-button />
            </div>
          </div>
        </nav>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.75,
            }}
            className="z-0 bg-white"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
