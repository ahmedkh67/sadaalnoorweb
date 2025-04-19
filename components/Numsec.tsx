"use client"


import React from 'react'
import { motion } from 'motion/react'



const Numsec = () => {

  return (
    <div className="flex md:flex-row flex-col md:justify-evenly items-center bg-white w-full py-30">

        
        <div className="flex justify-center items-center flex-col my-9">
            <motion.pre initial={{translateY: 10}} whileInView={{translateY: 0}} className='text-4xl font-boldd font-sans text-[#005053] text-center'>
                900 +
            </motion.pre>
            <p className='text-xl font-bold font-sans text-[#484848] text-center my-5'>
                عميل
            </p>
        </div>

        <div className="flex justify-center items-center flex-col my-9">
            <h1 className='text-6xl font-boldd font-sans text-[#005053] text-center'>
                7 +
            </h1>
            <p className='text-2xl font-bold font-sans text-[#484848] text-center my-5'>
                سنوات خبرة
            </p>
        </div>


        <div className="flex justify-center items-center flex-col my-9">
            <h1 className='text-4xl font-boldd font-sans text-[#005053] text-center'>
                100 +
            </h1>
            <p className='text-xl font-bold font-sans text-[#484848] text-center my-5'>
                فريق العمل
            </p>
        </div>



    </div>
  )
}

export default Numsec