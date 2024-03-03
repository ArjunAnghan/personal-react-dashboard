import React from 'react';
import Typewriter from 'typewriter-effect'; // Import Typewriter effect library
import ProjectCard from './ProjectCard'; // Import ProjectCard component
import {education,projects,workExp} from './Constant' //import UserProfile details
import Profile from '../images/Profile.jpg'


function UserProfile() {
  return (
    <div className="bg-gray-100 text-white">
  <div className="container mx-auto py-8">
    <div className="text-center">
      <img className="mx-auto w-32 h-32 rounded-full mb-4"  alt="Profile" src={Profile}/>
      <h2 className="text-2xl font-bold text-[#F6B17A] mb-2">Arjun Anghan</h2>
      <p className="text-lg text-blue-400 mb-4">
        <Typewriter
          options={{
            strings: ['Software Engineer', 'Web Developer', 'Tech Enthusiast'],
            autoStart: true,
            loop: true,
          }}
        />
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-800 text-white p-4 rounded-md">
        <h3 className="text-lg font-semibold mb-2 text-[#F6B17A]">Education</h3>
        {education.map((item, index) => (
          <div key={index} className="mb-2">
            <p className="text-sm text-blue-300">{item.institution}</p>
            <p className="text-xs text-gray-300">{item.degree}</p>
            <p className="text-xs text-gray-300">{item.year}</p>
          </div>
        ))}
      </div>
      <div className="bg-gray-800 text-white p-4 rounded-md">
        <h3 className="text-lg font-semibold mb-2 text-[#F6B17A]">Work Experience</h3>
        {workExp.map((item, index) => (
          <div key={index} className="mb-2">
            <p className="text-sm text-blue-300">{item.company}</p>
            <p className="text-xs text-gray-300">{item.year}</p>
            <p className="text-xs text-gray-300">{item.role}</p>
            <ul className="text-xs text-gray-300 list-disc">
              {item.points.map((point, index) => (
                <li key={index}>{point.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-gray-800 text-white p-4 rounded-md">
        <h3 className="text-lg font-semibold mb-2 text-[#F6B17A]">Projects</h3>
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} url={project.url} />
        ))}
      </div>
    </div>
  </div>
</div>

  
  )
}

export default UserProfile

