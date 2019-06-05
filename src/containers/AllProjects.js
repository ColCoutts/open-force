import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import {
  getProjectList,
  getProjectsError,
  getProjectsLoading
} from '../selectors/projectSelectors';
import Projects from '../components/projects/Projects';
import Buttons from '../components/buttons/Buttons';
import { AllProjectsContainer } from './styled-containers/StyledContainers';
//import fetchProjects once have service

class AllProjects extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
  }

  render() {
    const { loading } = this.props;
    if(loading) return <h1>Loading</h1>;

    const projectData = [
      {
        title: 'Test',
        url: './fakepath',
        imgUrl: 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        id: 'blah'
      },
      {
        title: 'Test',
        url: './fakepath',
        imgUrl: 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
        summary: 'test summ',
        id: 'blah'
      },
      {
        title: 'Test',
        url: './fakepath',
        imgUrl: 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
        summary: 'test summ',
        id: 'blah'
      },
      {
        title: 'Test',
        url: './fakepath',
        imgUrl: 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
        summary: 'test summ',
        id: 'blah'
      },
      {
        title: 'Test',
        url: './fakepath',
        imgUrl: 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
        summary: 'test summ',
        id: 'blah'
      }
    ];

    return (
      <>
      <Buttons />
      <AllProjectsContainer>
        <Projects projects={projectData} />
      </AllProjectsContainer>
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: getProjectsLoading(state),
  projects: getProjectList(state),
  error: getProjectsError(state)
});

const mapDispatchToProps = () => ({
// fetch dispatch fetchProjects 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProjects);
