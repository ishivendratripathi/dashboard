import React from 'react'

const Cards = ({heading,number}) => {
  return (
    <div className='flex flex-col border-black w-3/12  h-32 p-2 rounded-lg shadow-xl'>
      <div className='text-2xl'>{heading}</div>
      <div className='font-bold text-2xl mt-2'>{number}</div>
    </div>
  )
}

export default Cards
