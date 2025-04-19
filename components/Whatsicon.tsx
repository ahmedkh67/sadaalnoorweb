import React from 'react'
import Image from 'next/image'
import whatsappIcon from '@/public/Whatsapp Icon.svg'
import Link from 'next/link'

const Whatsicon = () => {
  return (
    <>
    <Link href={'https://wa.me/+966590029919'}>
    <div className="flex z-40 w-25 h-12 rounded-full p-2 bg-green-500 justify-center items-center fixed bottom-8 left-8">
        <Image src={whatsappIcon} alt={'whatsapps icon'} width={50} height={60} />
    </div>
    </Link>
    </>
  )
}

export default Whatsicon