import React from 'react'
import { Outlet } from 'react-router-dom'
import { SwipeCarousel } from '../home/SwipeCarousel'
import Slider from '../home/Slider'
import DiamondBox from '../home/DiamondBox'
import TabComponent from '../home/TabComponent'
import Solution from '../home/Solution'



const Home = () => {
  return (
    <div className='mt-[5rem]'>
     <div className='h-[38.7rem] '>
     <SwipeCarousel/>
     </div>
     
    <div className='mt-[4rem]'>
    <h1 className='text-4xl text-blue-500 text-center font-bold uppercase mb-6'>Our Partner</h1>
    <Slider/>
    </div>
    <div className='mt-[4rem]'>
      <h1 className='font-bold uppercase text-4xl text-center text-blue-500'>Why MediCare ?</h1>
      <DiamondBox/>
    </div>
    <div className='mt-[4rem]'>
      <h1 className='font-bold text-center text-4xl capitalize text-blue-500 mb-[3rem]'>hipaa cloud Hosted, trusted, provider focused platform</h1>
      <TabComponent/>
    </div>
    <div className='mt-4 mb-6'>
      <h1 className='font-bold text-4xl text-center text-blue-500 mb-[2rem]'>our solutions</h1>
      <Solution/>
    </div>
      
      <Outlet/>
    </div>
  )
}

export default Home
