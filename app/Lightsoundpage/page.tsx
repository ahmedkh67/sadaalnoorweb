import { Numsec, Paragraph } from '@/components'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="flex justify-center items-center w-full md:h-[550px] h-[450px] HeroBackground">
        
       
        </div>
            <div className="flex justify-center items-center flex-col w-full h-[550px] absolute top-0 left-0">
                <h1 className='md:text-lg text-lg font-sans font-bold text-center text-white md:my-12 my-8  w-3/4'>
                تأجير معدات الصوت والأضاءة
                </h1>
                <Link href={'https://wa.me/+966590029919'}>
                <button className='px-8 py-3 bg-blue-400 rounded-4xl md:text-lg text-md font-sans font-bold text-center text-white md:m-0 mb-14 transition-[0.3s] hover:opacity-80 cursor-pointer ' >
                    طلب الخدمة
                </button>
            </Link>
            </div>
    
    
            <div className="flex bg-white pt-10 px-5 md:px-10  flex-col items-center justify-center">
                <div className="flex justify-center items-center text-white ">
                    <Paragraph title='' dis='   سواء كان حفل او محاضرة , نوفر لك احدث انظمة الصوت و الاضاءة التي تضمن لك تجربة مميز   ' />
    
                </div>
    
            </div>
            <div className="flex justify-center overflow-hidden">
                <div className="greentriangle">
    
                </div>
            </div>




            <div className="flex md:flex-row flex-col bg-blue-400  justify-center items-center px-4 pt-10 flex-wrap">       
                <div className="flex flex-col bg-[#ededed] p-8 w-full md:w-90 h-90 md:m-4 my-3 justify-center items-end cart1 "> 

                    
                </div>
                <div className="flex flex-col bg-[#ededed] p-8 w-full md:w-90 h-90 md:m-4 my-3 justify-center items-end cart2"> 

                    
                </div>
                <div className="flex flex-col bg-[#ededed] p-8 w-full md:w-90 h-90 md:m-4 my-3 justify-center items-end cart3"> 

                    
                </div>
                <div className="flex flex-col bg-[#ededed] p-8 w-full md:w-90 h-90 md:m-4 my-3 justify-center items-end cart4"> 

                    
                </div>
               
               
                <div className="flex flex-col bg-[#ededed] p-8 w-full md:w-90 h-90 md:m-4 my-3 justify-center items-end cart8"> 

                    
                </div>
                <div className="flex flex-col bg-[#ededed] p-8 w-full md:w-90 h-90 md:m-4 my-3 justify-center items-end cart9"> 

                    
                </div>
                
            </div>

            <Numsec />
    </>
  )
}

export default page