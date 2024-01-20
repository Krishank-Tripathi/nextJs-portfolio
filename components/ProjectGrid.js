import React from 'react';

const ProjectGrid = ({ projects }) => {
  const openProjectLink = (link) => {
    console.log("link =>", link)
    window.open(link, '_blank');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="cursor-pointer p-4 border border-gray-300 rounded-md">
          <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
          <img
            src={project.imgUrl || 'public/Github-Mar-32.px.png'} // Use github.png if no imgUrl is provided
            alt={project.title}
            className="w-full h-32 object-cover mb-2"
            onClick={() => openProjectLink(project.link)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
