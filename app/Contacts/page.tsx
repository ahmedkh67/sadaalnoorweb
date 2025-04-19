"use client"

import React from 'react'
import Image from 'next/image'
import Email from '@/public/gmail.svg'
import Location from '@/public/location.svg'
import Phone from '@/public/Whatsapp Icon.svg'
import { useState } from 'react'


const Page = () => {


    
  const [Address , setAddress] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d907.7952546027304!2d39.68722047281492!3d24.47918408271607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bd95d1eb150c83%3A0x27675fb84d025a88!2z2LXYr9mJINin2YTZhtmI2LEg2YTYqtij2KzZitixINmE2YjYp9iy2YUg2KfZhNij2YHYsdin2K0g2YjYp9mE2YXZhtin2LPYqNin2Ko!5e0!3m2!1sar!2ssa!4v1741713980659!5m2!1sar!2ssa") ;
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => { setAddress(e.target.value) }

  return (
    <>
    <div className="flex flex-col justify-end items-center w-full h-[300px] bg-white">
        <h1 className='text-3xl text-black font-bold font-sans text-center mb-10'>
            بإمكانك التواصل معنا بأحد الطرق التالية
        </h1>
        
    </div>
    <div className="flex justify-center overflow-hidden">
        <div className="greentriangle">

        </div>
    </div>

    <div className="flex md:flex-row flex-col-reverse bg-blue-400  w-full py-10 ">
        <div className="flex w-full ">
            <form action="" method="post" className=' flex flex-col justify-start items-end p-4 w-full px-10 md:px-5 md:my-3 md:ml-30'>

                <h1 className='text-md text-white font-bold font-sans text-end'>
                    الإسم الكريم *
                </h1>
                <input type="text" name="name" id="nameinput" className='h-8 w-full bg-white text-black text-md my-3 md:mb-8 ' />

                <h1 className='text-md text-white font-bold font-sans text-end'>
                     رقم الجوال *
                </h1>
                <input type="text" name="name" id="nameinput" className='h-8 w-full bg-white text-black text-md my-3 md:mb-8 ' />

                <h1 className='text-md text-white font-bold font-sans text-end'>
                    البريد الالكتروني *
                </h1>
                <input type="text" name="name" id="nameinput" className='h-8 w-full bg-white text-black text-md my-3 md:mb-8 ' />

                <h1 className='text-md text-white font-bold font-sans text-end'>
                    الرسالة *
                </h1>
                <input type="text" name="name" id="nameinput" className='h-35 w-full bg-white text-black text-md my-3 md:mb-8 ' />

                <button className=' px-6 bg-white py-2 text-center text-cyan-900 md:m-0 mt-10 md:w-28 w-full font-sans  '>
                    ارسال
                </button>   
            </form>
        </div>


        <div className="flex flex-col w-full justify-center items-center">


                <div className="flex flex-row-reverse justify-end items-center p-4 w-full md:w-110 bg-yellow- px-10 md:px-5 md:my-3 ">
                    <div className="flex flex-row-reverse w-1/6 ml-7 ">
                        <Image src={Email} alt={''} width={60} height={50} />
                    </div>
                    <div className="flex w-full flex-col justify-end items-end">
                        <h1 className='text-md text-white font-bold font-sans text-end'>
                            البريد الالكتروني
                        </h1>
                        <h1 className='text-md text-white font-bold font-sans text-end'>
                            @gmail.com
                        </h1>
                    </div>
                </div>

                <div className="flex flex-row-reverse justify-center items-center p-4 w-full md:w-110 bg-yellow- px-10 md:px-5 md:my-3 ">
                    <div className="flex flex-row-reverse w-1/6 ml-7 ">
                        <Image src={Phone} alt={''} width={70} height={50} />
                    </div>
                    <div className="flex w-full flex-col justify-end items-end">
                        <h1 className='text-md text-white font-bold font-sans text-end'>
                            الهاتف
                        </h1>
                        <h1 className='text-md text-white font-bold font-sans text-end'>
                            059 002 9919
                        </h1>
                    </div>
                </div>

                <div className="flex flex-row-reverse justify-end items-center p-4 w-full md:w-110 bg-yellow- px-10 md:px-5 md:my-3 ">
                    <div className="flex flex-row-reverse w-1/6 ml-7 ">
                        <Image src={Location} alt={''} width={60} height={50} />
                    </div>
                    <div className="flex w-full flex-col justify-end items-end">
                        <h1 className='text-md text-white font-bold font-sans text-end'>
                            الموقع
                        </h1>
                        <h1 className='text-md text-white font-bold font-sans text-end'>
                        المدينة المنورة

                        </h1>
                    </div>
                </div>
               
                <div className="flex h-110 flex-col p-4 w-full justify-end items-end md:w-full bg-yellow- px-5 md:px-15 md:pr-45 my-3 ">
                    <select value={Address} onChange={handleChange} name='Nameeinput' id='Nameeinput'   className=' px-3 bg-white py-2 text-center text-cyan-900 md:mb-3 mb-3 mt-10 md:w-38 w-full font-sans '>
                            <option value={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d907.7952546027304!2d39.68722047281492!3d24.47918408271607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bd95d1eb150c83%3A0x27675fb84d025a88!2z2LXYr9mJINin2YTZhtmI2LEg2YTYqtij2KzZitixINmE2YjYp9iy2YUg2KfZhNij2YHYsdin2K0g2YjYp9mE2YXZhtin2LPYqNin2Ko!5e0!3m2!1sar!2ssa!4v1741713980659!5m2!1sar!2ssa"}
                                > فرع باقدو </option>
                                <option value={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9683.27374686831!2d39.61545654190413!3d24.399234513144897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdc0f8b7a92d5b%3A0x4c96cc785e49839!2z2KfZhNmG2YjYsSDZhNiq2KPYrNmK2LEg2YTZiNin2LLZhSDYp9mE2KfZgdix2KfYrSDZiNin2YTZhdmG2KfYs9io2KfYqg!5e0!3m2!1sar!2ssa!4v1741714259570!5m2!1sar!2ssa"}
                                > فرع شوران </option>
                                
                            </select> 
                    
                    
                    <iframe src={Address}
                    width="100%" height="100%">

                    </iframe>
                </div>


                


        </div>
        
    </div>

    </>
  )
}

export default Page