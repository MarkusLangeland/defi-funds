import Link from 'next/link'
import './globals.css'
import Image from 'next/image'

export const metadata = {
  title: 'DefiFunds',
  description: 'DefiFunds',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-gray-800'>
      <body>
      <nav className='h-auto mb-5 bg-white flex absolute z-20 w-full'>
          <Image src='/Logo.PNG' alt='Logo' width="64" height = "64"/>
          <Link className='text-black m-4' href='/'>
            Home
          </Link>
          <Link className='text-black m-4' href='/DiscoverFunds'>
            DiscoverFunds 
          </Link>
          <Link className='text-black m-4' href='/Investments'>
          Investments
          </Link>
          
      </nav>
      <div className='z-0 pt-14'>
        {children}
      </div>
        </body>
    </html>
  )
}
