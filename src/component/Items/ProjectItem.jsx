import React from 'react';

const ProjectItem = ({ project }) => {
  const { title, description, link } = project;

  return (
    <div className='text-center border rounded-lg mx-4 p-5' >
      <h3 className='text-xl text-blue-light-1'>{title}</h3>
      <p className='text-blue-light-2'>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className='border rounded-lg mt-3 py-2 hover:bg-blue-dark hover:text-white hover:translate-y-1 hover:scale-110 hover: duration-300 ...' >
          View Project
        </div></a>

    </div>
  );
};

export default ProjectItem;
