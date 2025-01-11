import React from 'react'

const TransactionNav = ({orderid,orderdate,orderamount,transactionfees}) => {
  return (
    <>
      <div className='flex rounded-md bg-gray-200 items-center h-8 justify-between p-2 font-medium'>
        <div>{orderid}</div>
        <div>{orderdate}</div>
        <div>{orderamount}</div>
        <div>{transactionfees}</div>
      </div>
    </>
  )
}

export default TransactionNav
