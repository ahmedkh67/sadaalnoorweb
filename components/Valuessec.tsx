"use client "

import React from 'react'
import Value from './Value'
import quality from '@/public/QualityIcon.svg'
import test from '@/public/TestIcon.svg'
import person from '@/public/Person.svg'
import time from '@/public/TimeIcon.svg'
import money from '@/public/money.svg'


function Valuessec () {
  return (
    <>
    <div className="flex bg-blue-400 md:pb-20 pb-10 pt-5 justify-center ">
        <h1  className='text-lg font-bold font-sans test-black text-center'>
            مميزاتنا
        </h1>
    </div>
    <div className="flex md:flex-row flex-col bg-blue-400 justify-center items-center px-4 ">       
        <Value title={' خدمة ممتازة '} dis={' فريقنا المدرب جاهز للاجابة على اي استفسار و تقديم المشورة و المساعدة في اختيار اللوازم الانسب لاحتياجك '} src={test} />   
        <Value title={' اسعار تنافسية '} dis={' نقدم اسعارا معقولة تتناسب مع جميع الميزانيات مع الحفاظ على اعلى مستويات الجودة '} src={money} />
        <Value title={' جودة عالية '} dis={' نحرص على توفير افضل المنتجات ذات الجودة الممتازة لضمان رضا العملاء في كل مرة '} src={quality} />
    </div>
    <div className="flex md:flex-row flex-col bg-blue-400 justify-center items-center px-4 ">       
     
        <Value title={' مرونة التوقيت '} dis={' نوفر لك خدمات مرنة تناسب مواعيدك مع ضمان ان كل شيء جاهز قبل موعد الحدث ' } src={time} />
        <Value title={' رضا العملاء '} dis={' تحقيق اعلى مستويات الرضا من خلال خدمات متكاملة '} src={person} />
        {/*    <Value title={'الاستدامة '} dis={'الالتزام باستخدام تقنيات صديقة للبيئة'} src={global} />    */}
    </div>
    <div className="flex justify-center overflow-hidden">
        <div className="bluetriangle">

        </div>
    </div>
    </>
  )
}

export default Valuessec