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
import {SiBitcoinsv}   from 'react-icons/si';
import {AiOutlineArrowDown}   from 'react-icons/ai';



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
  
  const [labels, setLabels] = useState(getDaysArray(new Date(new Date().setDate(new Date().getDate() - 6)),new Date()))
  

  const [choseFundOpen, setChoseFundOpen] = useState(false)
  const [choseCurrencyOpen, setChoseCurrencyOpen] = useState(false)
  const [choseTokenOpen, setChoseTokenOpen] = useState(false)

  const [tokenToCurrency, setTokenToCurrency] = useState(false)



   const options = {
    responsive: true,
    maintainAspectRatio: false,
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
        // ticks: { color: 'black', beginAtZero: true },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10
      },
        grid: {
          display: false
        }
      },
      y: {
        ticks: { color: 'black', beginAtZero: true },
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
  

  
  function getDaysArray(start, end) {
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const secInAWeek = 518400000
    const secInAMonth = 2419200000
    const secIn3Months = 7776000000
    const secInAYear = 31536000000
    const secIn3Years = 94608000000

    let TimeDiffInSec = new Date(end).getTime() - new Date(start).getTime()
  
    if(TimeDiffInSec >= secIn3Years) { 
      for(var arr=[],dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
        let temp = monthNames[dt.getMonth()] + "-" + dt.getFullYear()
          arr.push(temp)
      }
      return arr
    }
    else if(TimeDiffInSec >= secInAYear) { 
      for(var arr=[],dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
        let temp = dt.getDate() + "-" + monthNames[dt.getMonth()] + "-" + dt.getFullYear()
          arr.push(temp)
      }
      return arr
    }
    else if(TimeDiffInSec >= secIn3Months) { 
      for(var arr=[],dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
        let temp = dt.getDate() + "-" + monthNames[dt.getMonth()]
          arr.push(temp)
      }
      return arr
    }
    else if(TimeDiffInSec >= secInAMonth) { 
      for(var arr=[],dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
        let temp = dt.getDate() + "-" + monthNames[dt.getMonth()]
          arr.push(temp)
      }
      return arr
    }
    else if (TimeDiffInSec >= secInAWeek) {
      for(var arr=[],dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
        let temp = days[dt.getDay()]
          arr.push(temp)
      }
      return arr
    }

  }

  

   const data = {
    type: "area",
    labels,
    datasets: [
      {
        fill: 'start',
        fill: true,
        borderWidth: 2,
        // label: 'Dataset 2',
        data: [5000,6000,4000,5000,3500,5500,7000,5000,6000,4000,5000,3500,5500,7000,5000,6000,4000,5000,3500,5500,7000],
        borderColor: 'rgba(53,99,233,0.75)',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(53,99,233,0.45)");
          gradient.addColorStop(1, "rgba(53,99,233,0.0)");
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
        let lastWeek = getDaysArray(new Date(new Date().setDate(new Date().getDate() - 6)),new Date())
        setLabels(lastWeek)
        break
      case "1M":
        setWeek(false)
        setMonth(true)
        setThreeMonths(false)
        setYear(false)
        setThreeYears(false)
        let lastMonth = getDaysArray(new Date(new Date().setMonth(new Date().getMonth() - 1)),new Date())
        setLabels(lastMonth)
        break
      case "3M":
        setWeek(false)
        setMonth(false)
        setThreeMonths(true)
        setYear(false)
        setThreeYears(false)
        let last3Months = getDaysArray(new Date(new Date().setMonth(new Date().getMonth() - 3)),new Date())
        setLabels(last3Months)
        break
      case "1Y":
        setWeek(false)
        setMonth(false)
        setThreeMonths(false)
        setYear(true)
        setThreeYears(false)
        let lastYear = getDaysArray(new Date(new Date().setFullYear(new Date().getFullYear() - 1)),new Date())
        setLabels(lastYear)

        break
      case "3Y":
        setWeek(false)
        setMonth(false)
        setThreeMonths(false)
        setYear(false)
        setThreeYears(true)
        let last3Year = getDaysArray(new Date(new Date().setFullYear(new Date().getFullYear() - 3)),new Date())
        setLabels(last3Year)
        break
    }
  }

  function currencyDropDown() {
    return (
      <div className='w-11/12 border border-gray-200 rounded-md flex items-center justify-between p-4'>
              <input type="text" placeholder='22' pattern="^[0-9,.-]*$" className='xs:w-1/2 w-1/3'/>
              <div>
              <div className='dropdown'>
              <button className='flex items-center justify-center h-fit gap-2 bg-gray-100 rounded-3xl pr-3 pl-3 pt-1 pb-1 text-sm' onClick={() => setChoseCurrencyOpen(!choseCurrencyOpen)}><FaChevronDown/> <SiBitcoinsv className=' text-orange-400'/> BTC</button>
              <div className={choseCurrencyOpen ? 'menu border border-gray-100' : 'hidden border border-gray-100'}>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
              </div>
            </div>
              <p className='text-sm text-gray-400 mt-2'>Balance: 0.2</p>
              </div>
            </div>
    )
  }

  function tokenDropdown() {
    return (
      <div className='w-11/12 border border-gray-200 rounded-md flex items-center justify-between p-4 pt-5 pb-5'>
              <input type="text" placeholder='22' pattern="^[0-9,.-]*$" className='xs:w-1/2 w-1/3'/>
              <div className='dropdown'>
              <button className='flex items-center justify-center h-fit gap-2 bg-gray-100 rounded-3xl pr-3 pl-3 pt-1 pb-1 text-sm ' onClick={() => setChoseTokenOpen(!choseTokenOpen)}><FaChevronDown/> Select Token</button>
              <div className={choseTokenOpen ? 'menu border border-gray-100' : 'hidden border border-gray-100'}>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
                <button className='w-full border-b-2 border-gray-100 p-1 text-sm'>Create New Fund</button>
              </div>
            </div>

            </div>
    )
  }

  return (
    <div className='w-screen pt-20 flex justify-center items-center pb-10'>
      <div className=' 3xl:w-2000 w-full'>
        <div className=' flex xl:flex-row flex-col items-center justify-evenly'>
          <div className='xl:w-5/12 w-10/12'>
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
          <div className='w-full xs:h-80 h-52' >
          <Line options={options} data={data} id="chart"/>
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
          <div className='w-10/12 xl:w-4/12  rounded-xl '>
            <div className='flex items-center justify-between mr-4 ml-4 mb-6 h-fit'>
              <h2 className='font-semibold text-xl'>Trade</h2>
              <div className='h-full'>
                <BsThreeDots/>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
            {tokenToCurrency ? currencyDropDown() : tokenDropdown()}
            <button className='border border-gray-200 p-2 m-1 rounded-md shadow-md' onClick={() => setTokenToCurrency(!tokenToCurrency)}> <AiOutlineArrowDown/> </button>
            {!tokenToCurrency ? currencyDropDown() : tokenDropdown()}

            <button className='w-11/12 text-white bg-primary rounded-md h-10 mt-5'>
              Trade
            </button>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-center mt-10'>
        <div className='w-11/12'>
          <h2 className='font-semibold text-xl'>Portfolio</h2>
          <div>
            <div className=' flex justify-center items-center mt-8'>
              <p className='w-1/12 text-gray-400 text-sm'>#</p>
              <p className='sm:w-2/12 w-3/12 text-gray-400 text-sm'>Assets</p>
              <p className='w-2/12 text-gray-400 text-sm'>Amount</p>
              <p className='w-2/12 text-gray-400 text-sm'>Value</p>
              <p className='sm:w-3/12 2/12 text-gray-400 text-sm'> %</p>
            </div>
             {/* .... Map..... */}
             <div className=' flex  justify-center items-center mt-8'>
              <p className='w-1/12 font-semibold'>4</p>
              <p className='flex sm:w-2/12 w-4/12 font-semibold justify-start items-center gap-2'><Image src='/LogoDefiFunds.png' alt='Logo' width="400" height = "400" className='h-7 w-7'/> BTC</p>
              <p className='w-2/12 font-semibold'>100</p>
              <p className='w-2/12 font-semibold'>$ 4M</p>
              <div className='sm:w-3/12 2/12 flex items-center gap-2'>
              <div className=' z-0 w-full md:flex hidden rounded-xl bg-blue-100 h-fit'>
                <div className=' z-10 w-4/12 bg-primary text-white pl-2 rounded-xl h-2'></div>
              </div>
              <p className='font-semibold'>28%</p>
              </div>
              
            </div> 
            <div className=' flex  justify-center items-center mt-8'>
              <p className='w-1/12 font-semibold'>4</p>
              <p className='flex sm:w-2/12 w-4/12 font-semibold justify-start items-center gap-2'><Image src='/LogoDefiFunds.png' alt='Logo' width="400" height = "400" className='h-7 w-7'/> BTC</p>
              <p className='w-2/12 font-semibold'>100</p>
              <p className='w-2/12 font-semibold'>$ 4M</p>
              <div className='sm:w-3/12 2/12 flex items-center gap-2'>
              <div className=' z-0 w-full md:flex hidden rounded-xl bg-blue-100 h-fit'>
                <div className=' z-10 w-4/12 bg-primary text-white pl-2 rounded-xl h-2'></div>
              </div>
              <p className='font-semibold'>28%</p>
              </div>
              
            </div>
            <div className=' flex  justify-center items-center mt-8'>
              <p className='w-1/12 font-semibold'>4</p>
              <p className='flex sm:w-2/12 w-4/12 font-semibold justify-start items-center gap-2'><Image src='/LogoDefiFunds.png' alt='Logo' width="400" height = "400" className='h-7 w-7'/> BTC</p>
              <p className='w-2/12 font-semibold'>100</p>
              <p className='w-2/12 font-semibold'>$ 4M</p>
              <div className='sm:w-3/12 2/12 flex items-center gap-2'>
              <div className=' z-0 w-full md:flex hidden rounded-xl bg-blue-100 h-fit'>
                <div className=' z-10 w-4/12 bg-primary text-white pl-2 rounded-xl h-2'></div>
              </div>
              <p className='font-semibold'>28%</p>
              </div>
              
            </div>
            <div className=' flex  justify-center items-center mt-8'>
              <p className='w-1/12 font-semibold'>4</p>
              <p className='flex sm:w-2/12 w-4/12 font-semibold justify-start items-center gap-2'><Image src='/LogoDefiFunds.png' alt='Logo' width="400" height = "400" className='h-7 w-7'/> BTC</p>
              <p className='w-2/12 font-semibold'>100</p>
              <p className='w-2/12 font-semibold'>$ 4M</p>
              <div className='sm:w-3/12 2/12 flex items-center gap-2'>
              <div className=' z-0 w-full md:flex hidden rounded-xl bg-blue-100 h-fit'>
                <div className=' z-10 w-4/12 bg-primary text-white pl-2 rounded-xl h-2'></div>
              </div>
              <p className='font-semibold'>28%</p>
              </div>
              
            </div>

             <div className='flex justify-around items-center mt-5'>
            
              <div className='flex gap-2 pt-10'><p className='font-semibold text-sm'>Edit fund</p><AiFillEdit className="text-primary"/></div>
            </div>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}
