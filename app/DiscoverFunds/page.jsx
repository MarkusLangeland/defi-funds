"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { IoTrendingUpOutline } from "react-icons/io5";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// export const metadata = {
//   title: "Discover Funds",
//   description: "DefiFunds",
// };

export default function DiscoverFunds() {
  // throw new Error("failed to load data")
  const [choseFundOpen, setChoseFundOpen] = useState(false);
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <div className="w-screen pt-20 flex justify-center items-center pb-10 flex-col">
      <div className=" flex justify-between items-center w-11/12">
        <h1 className=" font-bold text-lg">Top Funds</h1>
        <div className="flex items-center justify-center gap-5 w-2/4">
          <input type="text" placeholder="Search fund" className="w-3/5" />
          <div className="dropdown">
            <button
              className="flex gap-2 justify-center items-center  border border-gray-100 p-3 rounded-lg"
              onClick={() => setChoseFundOpen(!choseFundOpen)}
            >
              <p>Time Scale</p>
              <FaChevronDown />
            </button>
            <div
              className={
                choseFundOpen
                  ? "menu border border-gray-100"
                  : "hidden border border-gray-100"
              }
            >
              <button className="w-full border-b-2 border-gray-100 p-1 text-sm">
                Last week
              </button>
              <button className="w-full border-b-2 border-gray-100 p-1 text-sm">
                Last Month
              </button>
              <button className="w-full border-b-2 border-gray-100 p-1 text-sm">
                Last 3 months
              </button>
              <button className="w-full border-b-2 border-gray-100 p-1 text-sm">
                Last Year
              </button>
              <button className="w-full border-b-2 border-gray-100 p-1 text-sm">
                Last 3 Years
              </button>
              <button className="w-full border-b-2 border-gray-100 p-1 text-sm">
                All time
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mt-10">
        <div className="w-full flex justify-center items-center pl-10 mb-5">
          <p className="w-1/12 text-gray-400">#</p>
          <p className="w-4/12 text-gray-400">Fund</p>
          <p className="w-3/12 text-gray-400">Value Managed</p>
          <p className="w-4/12 text-gray-400">Change</p>
        </div>

        {test.map((currElement, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="w-full flex justify-center items-center border border-gray-100 h-16 rounded-lg shadow-md pl-10 mb-3"
            >
              <p className="w-1/12">{index}</p>
              <p className="w-4/12">Degen Fund</p>
              <p className="w-3/12">$ 200M</p>
              <div className="w-4/12 flex items-center gap-2">
                <p className=" text-green-300 font-semibold h-full">2%</p>
                <IoTrendingUpOutline
                  size={28}
                  className="text-green-300 font-semibold"
                />
                <div className="w-3/5 h-32 mt-4">
                  <Line
                    data={{
                      labels: [
                        "wqwe",
                        "wqwe",
                        "wqwe",
                        "wqwe",
                        "wqwe",
                        "wqwe",
                        "wqwe",
                        "wqwe",
                        "wqwe",
                        "wqwe",
                        "wqwe",
                        "wqwe",
                        "wqwe",
                      ],
                      datasets: [
                        {
                          label: "My First Dataset",
                          data: [
                            65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55,
                            40,
                          ],
                          fill: false,
                          borderColor: "rgb(134 239 172)",
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      elements: {
                        point: {
                          radius: 0,
                        },
                        line: {
                          tension: 0.4,
                        },
                      },
                      scales: {
                        x: {
                          ticks: {
                            color: "rgb(255,255,255,0.0)",
                            beginAtZero: true,
                          },
                          grid: {
                            display: false,
                          },
                          border: {
                            display: false,
                          },
                        },
                        y: {
                          ticks: {
                            color: "rgb(255,255,255,0.0)",
                            beginAtZero: true,
                          },
                          grid: {
                            display: false,
                          },
                          border: {
                            display: false,
                          },
                        },
                      },
                      plugins: {
                        legend: {
                          display: false,
                        },
                        title: {
                          display: false,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
