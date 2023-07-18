import React from 'react';

const ProjectItem = ({ project }) => {
  const { title, description, link } = project;

  return (
    <div className='text-center border rounded-lg mx-4 p-5' >
      <h3 className='text-xl'>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className='border rounded-lg mt-3 py-2 hover:bg-white hover:text-black' >
          View Project
        </div></a>

    </div>
  );
};

export default ProjectItem;
