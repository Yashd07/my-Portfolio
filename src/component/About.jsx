import React from 'react'
import Miles from '../img/miles.png'
import Icon from './Icon.jsx';
import {ImNewspaper} from 'react-icons/im';
import {FaUserCircle} from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <div className="py-7 max-w-md mx-auto text-white overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className=" flex justify-center items-center md:shrink-0 ">
            <img className="h-[200px] w-[200px] object-cover md:h-full md:w-full" src={Miles} alt="My Img" />
          </div>
          <div className="p-8 flex flex-col justify-center items-center">
            <div className="uppercase tracking-wide text-[64px] font-bold">Intro</div>
            <p className="mt-2 text-center">Hi, I'm Yash, an ambitious Front-end Developer with a knack for creating stunning web experiences.
              Dive into my world and discover how I can make your digital dreams come true!</p>
          </div>
        </div>

        <div className='flex justify-center py-5 text-xl space-x-7'>

          {/* CV Button */}
          <a href='https://drive.google.com/file/d/19mEAUw4wyYOQ0G83wIBjpbXzZa54_NVF/view?usp=sharing'> 
          <div className='flex flex-row justify-center border  rounded-lg p-4 my-5 space-x-3 w-[200px] h-[60px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...'>
            <ImNewspaper className='mt-1'/>
            <h1>Download CV</h1>
          </div>
          </a>

          {/* Portfolio Button */}
          <a href='/Portfolio'>
          <div className='flex flex-row border rounded-lg justify-center p-4 my-5 space-x-3 w-[200px] h-[60px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...'>
            <FaUserCircle className='mt-1'/>
            <h1>My Portfolio</h1>
          </div>
          </a>
        </div>
        <div className='flex justify-center py-5'>
        <Icon/>
        </div>
      </div>
    </div>
  )
}

export default About





