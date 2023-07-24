import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs';

const Icon = () => {
  return (
    <div className='Container flex flex-row space-x-10 text-4xl text-[#7895CB] cursor-pointer '>

      
      <a href='https://www.instagram.com/desaiyash_07/' target="_blank" rel="noopener noreferrer">
      <BsInstagram className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...'/>
      </a>
      <a href='https://www.linkedin.com/in/yashd0712/' target="_blank" rel="noopener noreferrer">
      <BsLinkedin className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...'/>
      </a>
      <a href='https://github.com/Yashd07' target="_blank" rel="noopener noreferrer">
      <BsGithub className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...'/>
      </a>
      <a href='https://twitter.com/YashDesai0712' target="_blank" rel="noopener noreferrer">
      <BsTwitter className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...'/>
      </a>
    </div>
  )
}

export default Icon
