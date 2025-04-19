import { Numsec, Projectssec, ServiceCard } from '@/components'
import React from 'react'


const page = () => {
  return (
    <>
    <div className="flex flex-col justify-end items-center w-full h-[300px] bg-blue-400">
            <h1 className='text-3xl text-white font-bold font-sans text-center mb-10'>
                تعرف على خدماتنا
            </h1>
            
        </div>
        <div className="flex justify-center overflow-hidden">
            <div className="bluetriangle">

            </div>
        </div>



    <div className="flex md:flex-row flex-col bg-white justify-center items-center px-4 pt-10 ">       
    <ServiceCard title={' تأجير أدوات الزينة و الديكور '} dis={'  من الطاولات والكراسي , الى الاضاءة والزينة  '} linko={"/Decorativepage"} src={'decorbg'} />
    <ServiceCard title={' تأجير أدوات الصوت و الاضاءة  '} dis={'  تأجير معدات الصوت والاضاءة  '} linko={"/Lightsoundpage"} src={'soundbg'} />
    <ServiceCard title={' تأجير الأواني و القطع الفاخرة  '} dis={'  تأثيث الطاولات بأواني مميزة و انيقة  '} linko={"/Luxurypage"} src={'luxurybg'} />
    </div>

    <div className="flex md:flex-row flex-col bg-white justify-center items-center px-4 ">       
    
        <ServiceCard title={' تأجير الأثاث و المعدات الخاصة '} dis={' خيارات متنوعة تتناسب مع ذوقك و احتياجاتك  '} linko={"/Specialeqpage"} src={'specialbg'} />
        <ServiceCard title={'  خدمة التوصيل و التركيب '} dis={' نضمن ان كل شيء جاهز قبل موعد الحدث  '} linko={"/Deliverypage"} src={'deliverybg'} />
        
    </div>
     <Projectssec />

    <Numsec />

    </>
  )
}

export default page