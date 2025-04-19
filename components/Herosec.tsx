"use client"

import { easeInOut } from 'motion'
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'

const Herosec = () => {
  return (
    <>
    <div className="flex justify-center items-center w-full md:h-[600px] h-[450px] HeroBackground">
        
       
    </div>
        <motion.div initial={{translateY: 30, opacity: 0}} animate={{translateY: 0, opacity: 100}} transition={{duration: 0.8, ease: easeInOut}} className="flex justify-center items-center flex-col w-full h-[600px] absolute top-0 left-0">
            <h1 className='md:text-lg text-lg font-sans font-bold text-center text-white md:my-12 my-8  w-1/2'>
            صدى النور | لوازم الأفراح و المناسبات 
            </h1>
            <Link href={'/profile.pdf'} target='_blank' rel='noopener npreferrer'>
                <button className='px-8 py-3 bg-blue-400 rounded-4xl md:text-lg text-md font-sans font-bold text-center text-white md:m-0 mb-14 transition-[0.3s] hover:opacity-80 cursor-pointer ' >
                    تعرف على خدماتنا
                </button>
            </Link>
        </motion.div>
</>
  )
}

export default Herosec