"use client"

import React, { useState } from 'react'
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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {BsThreeDots}   from 'react-icons/bs';
import {FaChevronDown}   from 'react-icons/fa';
import {AiFillEdit}   from 'react-icons/ai';

import Image from 'next/image'

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

export default function ManageFunds() {
  const [week, setWeek] = useState(true);
  const [month, setMonth] = useState(false);
  const [threeMonths, setThreeMonths] = useState(false);
  const [year, setYear] = useState(false);
  const [threeYears, setThreeYears] = useState(false);

  const [choseFundOpen, setChoseFundOpen] = useState(false)
  const [choseCurrencyOpen, setChoseCurrencyOpen] = useState(false)
  const [choseTokenOpen, setChoseTokenOpen] = useState(false)
  // const numberFormat = new Intl.NumberFormat('en-US', options);


  // const ctx = canvas.getContext("2d");
  // const gradient = ctx.createLinearGradient(0, 0, 0, height);
  // gradient.addColorStop(0, 'rgba(250,174,50,1)');   
  // gradient.addColorStop(1, 'rgba(250,174,50,0)');


   const options = {
    responsive: true,
    elements: {
      point:{
        radius: 0
      },
      line: {
          tension: 0.4
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    },

    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
      },
      
    },
  }
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
   const data = {
    type: "area",
    labels,
    datasets: [
      {
        fill: 'start',
        fill: true,
        // label: 'Dataset 2',
        data: [5000,6000,4000,5000,3500,5500,7000],
        borderColor: 'rgba(53,99,233,0.75)',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 250);
          gradient.addColorStop(0, "rgba(53,99,233,0.45)");
          gradient.addColorStop(1, "rgba(53,99,233,0.1)");
          return gradient;
      }, //background gradient color,
      },
    ],
  };
    // throw new Error("failed to load data")
  function handleClickTimeFrame(timeFrame) {
    switch (timeFrame) {
      case "1W":
        setWeek(true)
        setMonth(false)
        setThreeMonths(false)
        setYear(false)
        setThreeYears(false)
        break
      case "1M":
        setWeek(false)
        setMonth(true)
        setThreeMonths(false)
        setYear(false)
        setThreeYears(false)
        break
      case "3M":
        setWeek(false)
        setMonth(false)
        setThreeMonths(true)
        setYear(false)
        setThreeYears(false)
        break
      case "1Y":
        setWeek(false)
        setMonth(false)
        setThreeMonths(false)
        setYear(true)
        setThreeYears(false)
        break
      case "3Y":
        setWeek(false)
        setMonth(false)
        setThreeMonths(false)
        setYear(false)
        setThreeYears(true)
        break
    }
  }

  return (
    <div className='w-screen pt-20'>
        <div className=' flex items-center justify-evenly'>
          <div className='w-5/12'>
          <div className='flex items-center justify-between mb-5'>
            <div className='dropdown'>
              <button className='flex gap-2 justify-center items-center  border border-gray-100 p-3 rounded-lg' onClick={() => setChoseFundOpen(!choseFundOpen)}>
              <Image src='/LogoDefiFunds.png' alt='Logo' width="400" height = "400" className='h-7 w-7'/>
              <p>Sale Fund</p>
              <FaChevronDown/></button>
              <div className={choseFundOpen ? 'menu border border-gray-100' : 'hidden border border-gray-100'}>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
              </div>
            </div>
            <div className='w-fit border border-gray-200 flex items-center justify-around rounded-md h-fit gap-1 p-1'>
              <button onClick={() => handleClickTimeFrame("1W")} className={ week ? "shadow-md border border-gray-100 rounded-sm p-1 text-xs" : "text-xs"}>1W</button>
              <button onClick={() => handleClickTimeFrame("1M")} className={ month ? "shadow-md border border-gray-100 rounded-sm p-1 text-xs" : "text-xs"}>1M</button>
              <button onClick={() => handleClickTimeFrame("3M")} className={ threeMonths ? "shadow-md border border-gray-100 rounded-sm p-1 text-xs" : " text-xs"}>3M</button>
              <button onClick={() => handleClickTimeFrame("1Y")} className={ year ? "shadow-md border border-gray-100 rounded-sm p-1 text-xs" : " text-xs"}>1Y</button>
              <button onClick={() => handleClickTimeFrame("3Y")} className={ threeYears ? "shadow-md border border-gray-100 rounded-sm p-1 text-xs" : " text-xs"}>3Y</button>
            </div>
          </div>
          <div className='max-h-full'>
          <Line options={options} data={data} id="chart" />;
          </div>
          <div className='flex justify-evenly items-center mb-10'>
            <div className='text-center'>
              <h3 className='text-gray text-sm'>Your Share</h3>
              <p className=' font-semibold text-lg'>10M</p>
            </div>
            <div className='text-center'>
              <h3 className='text-gray text-sm'>Value Managed</h3>
              <p className=' font-semibold text-lg'>$2000</p>
            </div>
          </div>
          </div>
          <div className='sm:w-4/12  rounded-xl '>
            <div className='flex items-center justify-between mr-4 ml-4 mb-6 h-fit'>
              <h2 className='font-semibold text-xl'>Trade</h2>
              <div className='h-full'>
                <BsThreeDots/>
              </div>
            </div>
            <div className='w-11/12 border border-gray-200 rounded-md mb-5 flex items-center justify-between p-6'>
              <input type="text" placeholder='22'/>
              <div className='dropdown'>
              <button className='flex items-center justify-center h-fit gap-2 bg-gray-100 rounded-3xl pr-3 pl-3 pt-1 pb-1' onClick={() => setChoseCurrencyOpen(!choseCurrencyOpen)}><FaChevronDown/> BTC</button>
              <div className={choseCurrencyOpen ? 'menu border border-gray-100' : 'hidden border border-gray-100'}>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
              </div>
            </div>

            </div>
            <div className='w-11/12 border border-gray-200 rounded-md flex items-center justify-between p-6'>
              <input type="text" placeholder='22'/>
              <div className='dropdown'>
              <button className='flex items-center justify-center h-fit gap-2 bg-blue-100 rounded-3xl pr-3 pl-3 pt-1 pb-1' onClick={() => setChoseTokenOpen(!choseTokenOpen)}><FaChevronDown/> Select Token</button>
              <div className={choseTokenOpen ? 'menu border border-gray-100' : 'hidden border border-gray-100'}>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
              </div>
            </div>

            </div>
            <button className='w-11/12 text-white bg-primary rounded-md h-10 mt-5'>
              Trade
            </button>
          </div>
        </div>
        <div className='w-screen flex items-center justify-center'>
        <div className='w-11/12'>
          <h2 className='font-semibold text-lg'>Portfolio</h2>
          <div>
            <div className=' flex justify-center items-center'>
              <p className='w-1/12'>#</p>
              <p className='flex w-2/12'>Assets</p>
              <p className='w-2/12'>Amount</p>
              <p className='w-2/12'>USD Value</p>
              <p className='w-3/12'>Percentage %</p>
            </div>
             {/* .... Map..... */}
             <div className=' flex justify-center items-center'>
              <p className='w-1/12 font-semibold'>1</p>
              <p className='flex w-2/12 font-semibold'>Bitcoin</p>
              <p className='w-2/12 font-semibold'>100</p>
              <p className='w-2/12 font-semibold'>$ 4M</p>
              <div className='w-3/12 z-0 rounded-xl bg-blue-100 h-fit'>
                <div className=' z-10 w-4/12 bg-primary text-white pl-2 rounded-xl text-sm'> 28%</div>
              </div>
            </div>
            <div className=' flex mt-4 justify-center items-center'>
              <p className='w-1/12 font-semibold'>1</p>
              <p className='flex w-2/12 font-semibold'>Bitcoin</p>
              <p className='w-2/12 font-semibold'>100</p>
              <p className='w-2/12 font-semibold'>$ 4M</p>
              <div className='w-3/12 z-0 rounded-xl bg-blue-100 h-fit'>
                <div className=' z-10 w-4/12 bg-primary text-white pl-2 rounded-xl text-sm'> 28%</div>
              </div>
            </div>
             <div className='flex justify-around items-center mt-5'>
            
              <div className='flex gap-2'><p className='font-semibold'>Edit</p><AiFillEdit className="text-primary"/></div>
              <div className='flex gap-2'><p className='font-semibold'>Pool Strategy </p><AiFillEdit className="text-primary"/></div>
              <div className='flex gap-2'><p className='font-semibold'>Deposit Fee</p><AiFillEdit className="text-primary"/></div>
              <div className='flex gap-2'><p className='font-semibold'>Website Link</p><AiFillEdit className="text-primary"/></div>
              <div className='flex gap-2'><p className='font-semibold'>Logo</p><AiFillEdit className="text-primary"/></div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
