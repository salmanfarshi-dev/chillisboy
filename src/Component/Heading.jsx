import React from 'react'

function Heading({tittle, className}) {
  return (
   <h2 className={`text-[24px] lg:text-[42px] font-bold leading-[100%] text-primary text-center ${className}`}>{tittle}</h2>
  )
}

export default Heading