"use client"

import React from 'react'

import {Autoplay , Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link';
import Gallerycells from './Gallerycells';



const Projectssec = () => {
  return (
    <>
    
        <h1  className='text-lg font-bold font-sans test-black text-center bg-white pt-5'>
            بعض أعمالنا
        </h1>
    
    <div className="flex w-full justify-center items-center overflow-hidden bg-white py-[40px] px-[15%] md:px-[5%]">
                
        
                <Swiper
                modules={[Autoplay, Pagination , Scrollbar]}
                pagination={true}
                slidesPerView={1}
                breakpoints={
                    {
                      800: {
                        slidesPerView: 4
                      }
                    }
                  }
                  
                scrollbar
                loop={true}
                autoplay={{delay: 2500 ,
                    disableOnInteraction: false
                }}
                spaceBetween={100}
                 className='flex justify-center items-center ' >

                    <SwiperSlide><Gallerycells src={'image1'} /></SwiperSlide>
                    <SwiperSlide><Gallerycells src={'image2'} /></SwiperSlide>
                    <SwiperSlide><Gallerycells src={'image3'} /></SwiperSlide>
                    <SwiperSlide><Gallerycells src={'image4'} /></SwiperSlide>
                    <SwiperSlide><Gallerycells src={'image5'} /></SwiperSlide>
                    <SwiperSlide><Gallerycells src={'image6'} /></SwiperSlide>
                    <SwiperSlide><Gallerycells src={'image8'} /></SwiperSlide>
                    <SwiperSlide><Gallerycells src={'image9'} /></SwiperSlide>

                 </Swiper>
        
        
        
        
    </div>
    <div className="flex w-full justify-center items-center bg-white pb-[50px]">
      <Link href={'/Projectspage'}>
      <button className='px-8 py-3 bg-blue-400 rounded-4xl md:text-lg text-md font-sans font-bold text-center text-white md:mt-4 mb-14 transition-[0.3s] hover:opacity-80 cursor-pointer ' >
            <h1 className='text-white font-bold text-xl'>
                جميع الأعمال  
            </h1>
        </button>
        </Link>
    </div>
    </>
  )
}

export default Projectssec