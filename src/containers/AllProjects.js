import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import {
  getProjectList,
  getProjectsError,
  getProjectsLoading
} from '../selectors/projectSelectors';
import Projects from '../components/projects/Projects';
//import fetchProjects once have service

class AllProjects extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
  }

  render() {
    const { projects, loading } = this.props;
    if(loading) return <h1>Loading</h1>;

    const projectData = [
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
      <Projects projects={projectData} />
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
