import React from 'react'

const Transactions = ({orderid,orderdate,orderamont,transactionfee}) => {
  return (
    <>
      <div className='flex w-11/12 rounded-md h-12 items-center justify-between p-2'>
        <div className='text-blue-600 font-semibold'>#{orderid}</div>
        <div>{orderdate}</div>
        <div>₹{orderamont}</div>
        <div>₹{transactionfee}</div>
      </div>
    </>
  )
}

export default Transactions
