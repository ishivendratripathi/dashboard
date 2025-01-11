import React from 'react';
import Navitems from './Navbar';

const Hamburger = () => {
  return (
    <div className=" border-black w-[20%] h-fit bg-[#1e2640] p-2">
      <div className="flex flex-row items-center text-white">
        <img 
          className="h-12 border-2 border-black rounded-lg m-4 w-1/4" 
          src="https://dukaan-payment.netlify.app/assets/logo-FHwkGUKu.png" 
          alt="Logo" 
        />
        <div>
          <h4 className="mt-4 font-semibold">Nishyan</h4>
          <a href="#" className="font-thin text-lg underline underline-offset-1">
            Visit store
          </a>
        </div>
        <div className="ml-6 mt-6 text-xl">↓</div>
      </div>

      {Navitems.map((item, index) => (
        <button 
          key={index} 
          className="flex gap-2 m-6 text-white"
        >
          <div>{item.icon}</div>
          <div>{item.name}</div>
        </button>
      ))}

      <div className="inline-flex border rounded-xl border-black gap-2 w-full bg-[#353c53] p-4">
        <div className="border w-[25%] rounded-lg bg-[#353c53] text-white flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" 
            />
          </svg>
        </div>
        <div className="text-white font-semibold">
          <span>Available Credit</span>
          <div>224.10</div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
