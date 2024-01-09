import React from 'react'
import Box from '@mui/material/Box';
import MailIcon from '@mui/icons-material/Mail';
import Mic from "./microphone.png"
import Pin from './pin.png'
import action from './category.png'
import send from "./send.png"
import './Coffee.css'
import chart from "./chart.png"
// import ChartBar from '../../components/ChartBar/ChartBar';

const Coffee = () => {
  return (
    <>
      <Box height={100} />
   
    
      <div className='coffee-container my-5 '>

        <div className='h-1/3 border-2 rounded-3xl  bg-white me-4 mb-6 ' style={{width: "430px", height: "485px"}}>
          <div className='bg-gray-200 py-2 px-6 text-left	position: relative'>
        <MailIcon />  <span className='font-bold '>Coffee?</span> <span className='text-gray-700'> Mail from 
         Marisa Lu</span>
        <img src={Mic} className='h-3.5	position: absolute right-8 top-3 ' />
        </div>

        <div className='text-left p-6'>
        <p className='text-right text-gray-800 text-sm me-3'>Just now</p>
        <p className='text-2xl my-2'>Marisa Lu</p>
        <h1 className='font-bold text-2xl mb-4'>Coffee?</h1>
      
      <p className='mb-3'>Hey Jason,</p>

      <p className='my-5'>Was wondering if you'd be interested in meeting my team at Philz Coffee at 11 AM today. No pressure if you can't make it, althought I think you guys would really get along !</p>

      <p className='my-4'>Marisa</p> <hr/>

      <button type='button' className='rounded-2xl border-2 me-3 mt-3 py-1 px-5 bg-gray-200 text-sm'>Reply</button>
      <button type='button'  className='rounded-2xl border-2 me-3 py-1 px-5 bg-gray-200 text-sm'>Forward</button>
      <button type='button'  className='rounded-2xl border-2 me-3 py-1 px-5 bg-gray-200 text-sm'>Delete</button>

      <div className='flex mt-5 '>
      <img src={action} className='h-3 m-1 ' /> 
      <p className=' text-gray-700  text-sm ms-1 '>  More actions</p>
      </div>

      </div>

        </div>

        <div className='h-1/3 border-2 rounded-3xl  bg-white mb-6 mx-2' style={{width: "430px"}}>
          <div className='bg-gray-200 p-2 text-left	position: relative'>
         <span className='font-bold  ms-6'>See my availability : today</span>
        <img src={Mic} className='h-3.5	position: absolute right-8 top-3 ' />
        </div>

        <div className='text-left p-6'>
       
        <h1 className='font-bold text-2xl mb-3'>Available until 1 PM</h1>

      <p>Would you like to create an event for Coffee with Marisa at 11 AM?</p>

      <img src={chart} className='w-full h-48 my-6 rounded-lg' />
      
     <hr/>

      <button type='button' className='rounded-2xl border-2 me-2 mt-3 py-1 px-2 bg-gray-200 text-sm'>Create Event</button>
      <button type='button'  className='rounded-2xl border-2 me-2 py-1 px-2 bg-gray-200 text-sm'>Edit Event</button>
      <button type='button'  className='rounded-2xl border-2 me-2 py-1 px-2 bg-gray-200 text-sm'>Full Calender</button>
      <button type='button'  className='rounded-2xl border-1 me-2 py-1 px-1  text-sm'>Dismiss</button>

      <div className='flex mt-5 '>
      <img src={action} className='h-3 m-1 ' /> 
      <p className=' text-gray-700  text-sm ms-1 '>  More actions</p>
      </div>

      </div>

        </div>

        <div className=' border-2 rounded-3xl bg-white mb-6 mx-4' style={{width: "430px", height: "485px"}}>
          <div className='bg-gray-200 py-2 px-6 	position: relative text-left '>
          <img src={Pin} className='h-4	position: absolute top-3 ' />
         <span className='font-bold ms-6'>Philz Coffee</span> <span className='text-gray-700'>. Location</span>
        <img src={Mic} className='h-3.5	position: absolute right-8 top-3 ' />
        </div>
     <div className='p-1'>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55908569.77857281!2d-12.272493600000024!3d31.2099701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c5a777f9a75d%3A0xa89ec96a0e40fbeb!2sPhilz%20Coffee!5e0!3m2!1sen!2sin!4v1704784377508!5m2!1sen!2sin" width="100%" height="180"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
     </div>
        <div className='text-left px-4 py-4'>
        
      
        <h1 className='font-bold text-2xl mb-2'>Philz Coffee</h1>
      
      <p className='my-3 font-semibold'>Custom-blended java in a casual setting.</p>

      <p className='font-light mb-2'>20686 Stevens Creek Blvd
        <br/>
        Cupertino, CA 95014
      </p>

       <hr/>

      <button type='button' className='rounded-2xl border-2 me-2 mt-3 py-1  bg-gray-200 text-sm position: relative' style={{width: "122px"}}> <img src={send} 
       className='h-3  position: absolute top-1.5 px-1'/>  Get directions</button>
      <button type='button'  className='rounded-2xl border-2 me-2 py-1 px-2 bg-gray-200 text-sm'>See details</button>
      <button type='button'  className='rounded-2xl border-2 me-1 py-1 px-1 bg-gray-200 text-sm'>Find more cafes nearby</button>
      

      <div className='flex mt-5 '>
      <img src={action} className='h-3 m-1 ' /> 
      <p className=' text-gray-700  text-sm ms-1 '>  More actions</p>
      </div>

      </div>

        </div>

      </div>
    </>
  )
}

export default Coffee
