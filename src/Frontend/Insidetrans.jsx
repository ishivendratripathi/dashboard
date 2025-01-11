import React from 'react'

const Insidetrans = () => {
  return (
    <div className='h-10 flex items-center p-4 justify-between'>
        <span className='gap-4 border rounded-lg w-1/4 bg-white '><input type="text" placeholder=' 🔍 Search by order ID...'/></span>
     <span className='space-x-2'> 
        <button className='px-4 border rounded-md'>Sort</button>
      <button className='px-4 border rounded-md'>⬇︎</button>
      </span>
       </div>
  )
}

export default Insidetrans
