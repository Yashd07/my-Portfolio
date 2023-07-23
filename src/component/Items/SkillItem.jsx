import React from 'react';


const SkillItem = ({ skill, icon, description }) => {
  const IconComponent = icon;
  return (
    
    <li className='border rounded-lg mx-4'>
      <div className='flex flex-row justify-center items-center '>
      <IconComponent className='m-3 text-6xl'/>
      <h1 className='text-xl'>{skill}</h1>
      </div>
      <p className='px-4 pb-4 text-center'>{description}</p>

    </li>
    
  );
};

export default SkillItem;
