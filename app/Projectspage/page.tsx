import { Gallerycells } from '@/components'
import React from 'react'

const page = () => {
  return (
   <>
        <div className="flex flex-col justify-end items-center w-full h-[300px] bg-white">
            <h1 className='text-3xl text-black font-bold font-sans text-center mb-10'>
                بعض من اعمالنا و تجاربنا مع العملاء
            </h1>
            
        </div>
        <div className="flex justify-center overflow-hidden">
            <div className="greentriangle">

            </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse bg-blue-400 flex-wrap justify-evenly items-center  w-full py-20 ">
            <Gallerycells src={'image1'} />
            <Gallerycells src={'image1'} />
            <Gallerycells src={'image1'} />
            <Gallerycells src={'image1'} />
            <Gallerycells src={'image1'} />
            <Gallerycells src={'image1'} />
            <Gallerycells src={'image1'} />
            <Gallerycells src={'image1'} />

        </div>
   </>
  )
}

export default page