"use client"

import Link from 'next/link'
import './globals.css'
import Image from 'next/image'
import {BsWallet2}   from 'react-icons/bs';
import {AiFillBuild, AiOutlinePieChart} from 'react-icons/ai';
import {RiFundsLine}   from 'react-icons/ri';





export const metadata = {
  title: 'DefiFunds',
  description: 'DefiFunds',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <nav className='bg-white flex absolute z-20 w-full h-14 items-center justify-between pr-10 pl-10' >
        <div className='flex gap-8'>
          <Link className='text-black font-semibold flex gap-2 items-center text-lg' href='/'>
            <Image src='/LogoDefiFunds.png' alt='Logo' width="400" height = "400" className='h-7 w-7'/>
            DefiFunds
          </Link>
          <div className='flex gap-4 items-center'>
            <Link className='text-gray-600 text-sm flex items-center justify-center gap-2' href='/DiscoverFunds'>
              <RiFundsLine/>
              Discover Funds 
            </Link>
            <Link className='text-gray-600 text-sm flex items-center justify-center gap-2' href='/Investments'>
              <AiOutlinePieChart/>
              My Investments
            </Link>
          </div>
        </div>

          <div className='flex gap-4 items-center'>
            <Link className='text-black text-sm flex items-center justify-center gap-2' href='/Investments'>
              <AiFillBuild/>
              Manage Fund
            </Link>
            <Link className='text-white bg-primary rounded-md w-40 h-10 flex items-center justify-center gap-2' href='/Investments'>
              <BsWallet2 />
              Connect wallet
            </Link>
          </div>
          
      </nav>
      <div className='z-0 bg-white'>
        {children}
      </div>
        </body>
    </html>
  )
}
