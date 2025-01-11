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
  <div className='flex flex-col'>
    <div className='flex'>
  <Hamburger/>
  <Nav />
  </div>
  </div>
  </>
  )
}

export default App

{/* <div className='flex flex-col'>
    <div className='flex gap-4'>
  <Cards heading="Online orders" number="231"/> 
  <Cards heading="Amount Received" number="₹23,92,312.19"/> 
  </div>
   </div>
  <div className='border-2 h-full border-black w-9/12'>
  <Insidetrans/>
  <TransactionNav orderid="Order ID" orderdate="Order date" orderamount="Order Amount" transactionfees="Transaction fees"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  <Transactions orderid="281209" orderdate="7 July,2023" orderamont="1278.23" transactionfee="22"/>
  </div>
  </div> */}