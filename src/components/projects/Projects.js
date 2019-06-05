import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

function Projects({ projects }) {
  const projectList = projects.map(project => (
    <li key={project.id}>
      <Project project={project} />
    </li>
  ));

  return (
    <ul>
      {projectList}
    </ul>
  );
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired
};

export default Projects;
