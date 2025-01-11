import React from 'react'
import Hamburger from './Hamburger'

const Nav = () => {
  return (
    <>
    <div className='border shadow-xl h-12 border-black w-full'>
    <div className='flex gap-4 mt-2'>
      <div className='ml-4'>Payments</div>
      <div >? How it works</div>
<input className='ml-40 w-1/4 bg-gray-100 rounded-lg' type="text" placeholder=' 🔍 Search feature,tutorial,etc'/>
<button className='ml-20 '>💬</button>
<button>🔽</button>
</div>
</div>
</>
  )
}

export default Nav
