import React from 'react'

type GallerycellsTypes = {
  src: string
}

function Gallerycells({src}: GallerycellsTypes){
  return (
    <div className={`flex w-[18rem] h-[300px] ${src} m-3 border-1 :*` }>

    </div>
  )
}

export default Gallerycells