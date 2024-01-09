import React from 'react'
import Box from '@mui/material/Box';
import MailIcon from '@mui/icons-material/Mail';
import Mic from "./microphone.png"

const Coffee = () => {
  return (
    <>
      <Box height={100} />
      <div className='flex justify-between mx-0 '>

        <div className='h-1/3 border-2 rounded-lg w-1/3 bg-white me-4'>
          <div className='bg-gray-200 p-2 	position: relative'>
        <MailIcon />  <span>Coffee?</span> <span className='text-gray-700'> Mail from Marisa Lu</span>
        <img src={Mic} className='h-3.5	position: absolute right-8 top-3 ' />
        </div>

        <div className='text-left p-6'>
        <p className='text-right text-gray-800 text-sm me-3'>Just now</p>
        <p className='text-2xl my-3'>Marisa Lu</p>
        <h1 className='font-bold text-2xl mb-3'>Coffee?</h1>
      
      <p className='mb-3'>Hey Jason,</p>

      <p>Was wondering if you'd be interested in meeting my team at Philz Coffee at 11 AM today. No pressure if you can't make it, althought I think you guys would really get along !</p>

      <p className='my-3'>Marisa</p> <hr/>

      <button type='button' className='rounded-2xl border-2 me-3 mt-3 py-1 px-5 bg-gray-200'>Reply</button>
      <button type='button'  className='rounded-2xl border-2 me-3 py-1 px-5 bg-gray-200'>Forward</button>
      <button type='button'  className='rounded-2xl border-2 me-3 py-1 px-5 bg-gray-200'>Delete</button>

      <p className='mt-5 text-gray-700 text-sm'>More actions</p>
      </div>

        </div>

       

      

      </div>
    </>
  )
}

export default Coffee
