import React from 'react'

import InfoIcon from '@mui/icons-material/Info';
import Icon from './Icon.jsx';




const Home = () => {
  return (
    <>
      

        <div className='flex items-center flex-col space-y-3 mt-14' >
          <h1 className='text-[40px] text-blue-light-1 '>I'm</h1>
          <h1 className='text-[64px] text-blue-dark font-bold'>Yash Desai</h1>
          <h1 className='text-xl text-center text-blue-light-2 mx-7 pb-5'>Aspiring Front-End Developer | UI/UX Dessigner</h1>
        </div>


        <div className='flex items-center justify-center py-9'>
          <a  href='/About'>
            <div className='flex  text-white flex-row content-center justify-center border  rounded-lg p-4 my-5 space-x-3 w-[200px] h-[60px] transition ease-in-out delay-150 hover:bg-blue-dark hover:text-white hover:translate-y-1 hover:scale-110 hover: duration-300 ...'>
              <InfoIcon />
              <h1>More About Me</h1>
            </div>
          </a>
          </div>
        

        <div className='py-5 flex items-center justify-center' >
          <Icon />
        </div>


     

    </>
  )
}

export default Home
