import React from 'react'
import Image from 'next/image'

type Valueparams = {
    title: string, 
    dis: string , 
    src: string
}

function Value({title, dis, src}: Valueparams ) {
  return (
    <>
    <div className="flex flex-row-reverse bg-[#ededed] p-4 w-full md:w-90 h-36 m-4 justify-end items-start ">
        <Image className="flex w-1/7 justify-end items-start h-full" src={src} alt={'icon values'} />
        
        <div className="flex flex-col justify-center items-end pr-2">
            <h1 className='text-md font-sans font-bold text-black text-end my-1'>
                {title}
            </h1>
            <p className='text-md font-bold font-sans text-[#484848] text-end my-1 '>
                {dis}
            </p>
        </div>
    </div>
    </>
  )
}

export default Value