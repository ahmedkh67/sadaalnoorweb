import React from 'react'
import Link from 'next/link'


type ServiceCardparams = {
    title: string, 
    dis: string , 
    linko: string, 
    src: string
}


function ServiceCard({title, dis, linko, src}: ServiceCardparams ) {
  return (
    <>
    <Link href={linko} className='flex md:w-90 w-full md:m-4 justify-center items-center bg-[#ededed] my-2 '>
    
    <div className={` flex-col bg-black p-8 w-30 h-30  justify-center items-end ml-4 ${src} :* `}>

    </div>  


    <div className="flex flex-col bg-[#ededed] p-4 w-full md:w-90 h-30 md:m-2 my-3 justify-center items-end ">        
      
                <h1 className='text-md font-sans font-bold text-black text-end my-1'>
                    {title}
                </h1>
                <p className='text-md font-bold font-sans text-[#222222] text-end my-1 '>
                    {dis}
                </p>

        </div>
    </Link>
    </>
    
  )
}

export default ServiceCard