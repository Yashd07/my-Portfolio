import React from 'react'

import InfoIcon from '@mui/icons-material/Info';
import Icon from './Icon.jsx';




const Home = () => {
  return (
    <>
      <div className='sm:py-3 lg:py-9 overflow-hidden '>
      <div className='flex items-center flex-col space-y-3 justify-center text-white h-auto'>
    
      <h1 className='text-[40px] '>I'm</h1>
        <h1 className='text-[64px]  font-bold'>Yash Desai</h1>
        <h1 className='text-[18px] mx-7 pb-5'>Aspiring Front-End Developer</h1>
        <a href='/About'>   
          <div className='flex flex-row border p-4 my-5 rounded-lg space-x-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...'>
            <InfoIcon/>
            <h1>More About Me</h1>
          </div>
        </a>
      <div className='py-10' >
        <Icon/>
      </div>
      </div>
      </div>
    
    </>
  )
}

export default Home
