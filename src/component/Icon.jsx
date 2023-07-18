import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs';

const Icon = () => {
  return (
    <div className='Container flex flex-row space-x-10 text-4xl text-white cursor-pointer '>
      <BsInstagram className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...'/>
      <BsLinkedin className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...'/>
      <BsGithub className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...'/>
      <BsTwitter className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...'/>

    </div>
  )
}

export default Icon
