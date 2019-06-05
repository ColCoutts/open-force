import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import { StyledProjects } from './styled-components/StyledProjects';

function Projects({ projects }) {
  const projectList = projects.map(project => (
    <StyledProjects key={project.id}>
      <Project project={project} />
    </StyledProjects>
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
