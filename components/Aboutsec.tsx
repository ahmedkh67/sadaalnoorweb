"use client "

import React from 'react'
import { Paragraph } from '.'

const Aboutsec = () => {
  return (
    <>
    <div className="flex bg-white pt-10 px-5 md:px-10  flex-col items-center justify-center">
        <div className="flex justify-center items-center ">
            
            <Paragraph title=' من نحن؟ ' dis= " نحن متخصصون في تأجير لوازم الحفلات والمناسبات بجودة عالية وبأسعار تنافسية. سواء كنت تخطط لحفل زفاف، أو عيد ميلاد، أو مناسبة خاصة، فإننا نقدم لك كل ما تحتاجه لجعل يومك مميزاً ومختلفاً"  />

        </div>
        <div className="flex md:flex-row flex-col justify-center items-center  ">
            <Paragraph title=' رسالتنا' dis='' />
            <Paragraph title=' رؤيتنا' dis=' ' />
        </div>
     
    </div>
    <div className="flex justify-center overflow-hidden">
        <div className="greentriangle">

        </div>
    </div>
    </>
  )
}

export default Aboutsec