import React from 'react';
import PropTypes from 'prop-types';
import { StyledProjectSection, StyledProjectText } from './styled-components/StyledProjects';

//bring in Link to get to Project Detail page (Link to={project.id})

function Project({ project }) {
  return (
    <StyledProjectSection>
      <StyledProjectText>
        <h1>{project.title}</h1>
        <a href={project.url}>{project.url}</a>
        <p>{project.summary}</p>
      </StyledProjectText>
      <img src={project.imgUrl}/>
    </StyledProjectSection>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
};

export default Project;
