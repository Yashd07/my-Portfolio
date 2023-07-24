import React from 'react'; 
import SkillItem from './Items/SkillItem';
import ProjectItem from './Items/ProjectItem';
import { FaHtml5, FaCss3, FaJs, FaReact, FaCss3Alt } from 'react-icons/fa';

const skills = [
  { skill: 'HTML', icon: FaHtml5 ,description:"Experienced in crafting well-structured and semantically rich HTML5 code to create responsive and user-friendly web interfaces." },
  { skill: 'CSS', icon: FaCss3, description:"Adept in designing visually appealing and responsive user interfaces using CSS3."},
  { skill: 'JavaScript', icon: FaJs, description: "Proficient in JavaScript programming, adept at building interactive and dynamic web applications." },
  { skill: 'React.js', icon: FaReact ,description:  "Highly skilled in building dynamic and interactive web applications using React.js."},
  { skill: 'Tailwind CSS', icon: FaCss3Alt ,description:"Experienced in utilizing Tailwind CSS to rapidly create modern and customized user interfaces."},
];

const projects = [
  {
    title: 'E-commerce Website',
    description: 'React Js | fakeStore API | Tailwind CSS',
    link: 'https://myclothingstorewebsite.netlify.app',
  },
  {
    title: 'Portfolio Website',
    description: 'React JS | Tailwind CSS',
    link: '/',
  },
  {
    title: 'Text Manipulation System',
    description: 'Android Studio | Java',
    link: 'https://github.com/Yashd07/Textify',
  },
  {
    title: 'Recipe Recommendation App',
    description: 'React JS | Tailwind CSS',
    link: 'https://edamamrecipeapp.netlify.app/',
  },
  
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div className='flex justify-center items-center flex-col text-white py-5' >
      <h1 className='text-[64px] font-bold text-blue-dark text-center'>My Portfolio</h1>
      <div className='py-4 flex  items-center flex-col space-y-4'>
      <h2 className='text-3xl pb-4 text-blue-light-1 text-center'>Unleashing my boundless creativity through digital enchantments.</h2>
      <ul className='grid md:grid-cols-2 gap-7  text-blue-light-2 sm:grid-col-1'>
        {skills.map((skill, index) => (
           <SkillItem key={index} skill={skill.skill} icon={skill.icon} description={skill.description} />
        ))}
      </ul>
      </div>
      <h2 className='text-3xl text-blue-light-1 text-center py-7'>Crafting Web magic through Projects</h2>
      <div className=' grid md:grid-cols-2 gap-7 sm:grid-col-1'>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
