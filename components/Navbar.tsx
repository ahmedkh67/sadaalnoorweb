"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import MenuIcon from '@/public/Menu 2 Icon.svg'
import Image from 'next/image'
import CloseIcon from '@/public/Closeicon.svg'
import { Navlist } from '@/Constants'

const Navbar = () => {
  const [open , setopen] = useState(false) ;

  return (
    <>
    <div className="flex flex-row-reverse bg-[#ffffff] w-full h-[70px] md:pl-8 fixed md:justify-center justify-between items-center transition-[0.4s] z-40 md:h-[110px] md:px-8 px-2">
    
     <div className="LogoContainer w-full h-[98%] overflow-hidden flex justify-center items-center z-40">
     <Link href={'././'} className='w-full h-full' />
     </div>
    

     <ul className='NavlistContainer md:w-1/2 w-full hidden flex-row-reverse justify-center items-center text-black md:flex'>
      {Navlist.map((item) => (
        <Link href={item.link} key={item.title} className='text-black'>
          <h1 className='Navlist-li font-bold transition-[0.3] text-md text-black font-sans ' >
            {item.title}
          </h1>        
        </Link>
      ))}
     </ul>

      
      <Image src={MenuIcon} alt='Menu list icon ' width={50} height={50} className='md:hidden flex'
      onClick={() => {setopen(!open)}}
        />
      

    </div>
    


0
    <div className={`flex w-full bg-white h-full top-0 right-0 fixed z-50 

      px-6 flex-col justify-start  pt-12 ${open? 'Menuinactive' : 'Menuactive'} *:`}>
        <div className="flex w-full justify-between items-center ">
          <Image src={CloseIcon} alt={"close icon"} width={25} height={25} onClick={() => {setopen(!open)}}  />
        </div>
        <div className="flex flex-col justify-start items-end">
          <Link href={'././'} className='w-full' onClick={() => {setopen(!open)}} >
            <div className="flex w-full py-1 justify-end ">
              <h1 className='text-xl text-end my-2 text-black font-sans' >
              الرئيسية
              </h1>
            </div>
          </Link>
          <Link href={'/Servicespage'} className='w-full' onClick={() => {setopen(!open)}} >
            <div className="flex w-full py-1 justify-end ">
              <h1 className='text-xl text-end my-2 text-black font-sans' >
              خدماتنا
              </h1>
            </div>
          </Link>
          <Link href={'/Projectspage'} className='w-full' onClick={() => {setopen(!open)}} >
            <div className="flex w-full py-1 justify-end ">
              <h1 className='text-xl text-end my-2 text-black font-sans' >
              أعمالنا
              </h1>
            </div>
          </Link>
          <Link href={'/Contacts'} className='w-full' onClick={() => {setopen(!open)}} >
            <div className="flex justify-end w-full py-1">
              <h1 className='text-xl text-end my-2 text-black font-sans' >
              تواصل معنا
              </h1>
            </div>
          </Link>
          
          
        </div>
    </div> 
        
    </>
  )
}

export default Navbar