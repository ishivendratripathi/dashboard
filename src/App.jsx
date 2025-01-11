import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Frontend/Cards'
import Nav from './Frontend/Nav'
import Transactions from './Frontend/Transactions'
import TransactionNav from './Frontend/TransactionNav'
import Insidetrans from './Frontend/Insidetrans'
import Hamburger from './Frontend/Hamburger'


function App() {

  return (
    <>
      <div className='flex'>
        <div className='w-58 min-h-screen bg-[#1E2640]'>
          <Hamburger />
        </div>
        <div className='flex-1 p-8'>
          <Nav />
          <div className='flex justify-between items-center mt-8 mb-6'>
            <div className='font-semibold text-lg'>Overview</div>
            <select className='px-4 py-2 border rounded-md bg-white' name="" id="1">
              <option value="">Last Month</option>
              <option value="">This Month</option>
            </select>
          </div>
          <div className='flex gap-8 mb-8'>
            <Cards heading="Online Orders" number="231" />
            <Cards heading="Amount received" number="₹23,92,312.19" />
          </div>
          <div className='flex items-center font-semibold text-xl gap-2 mb-6'>
            <div>Transaction</div>
            <div>|</div>
            <div>This Month</div>
          </div>
          <div className='bg-white rounded-lg'>
            <Insidetrans />
            <TransactionNav
              orderid="Order ID"
              orderdate="Order Date"
              orderamount="Order Amount"
              transactionfees="Transaction fees"
            />
            <Transactions orderid="281209" orderdate="7 july,2023" orderamont="1278.23" transactionfee="22" />
            <Transactions orderid="281209" orderdate="7 july,2023" orderamont="1278.23" transactionfee="22" />
            <Transactions orderid="281209" orderdate="7 july,2023" orderamont="1278.23" transactionfee="22" />
            <Transactions orderid="281209" orderdate="7 july,2023" orderamont="1278.23" transactionfee="22" />
            <Transactions orderid="281209" orderdate="7 july,2023" orderamont="1278.23" transactionfee="22" />
            <Transactions orderid="281209" orderdate="7 july,2023" orderamont="1278.23" transactionfee="22" />
            <Transactions orderid="281209" orderdate="7 july,2023" orderamont="1278.23" transactionfee="22" />
            <Transactions orderid="281209" orderdate="7 july,2023" orderamont="1278.23" transactionfee="22" />
            <Transactions orderid="281209" orderdate="7 july,2023" orderamont="1278.23" transactionfee="22" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

