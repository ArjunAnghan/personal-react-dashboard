// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, url }) => {
  return (
    <div className="mb-2">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm">{description}</p>
      <a href={url} className="text-blue-200 hover:text-white text-xs">{url}</a>
    </div>
  );
};

export default ProjectCard;
