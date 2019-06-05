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
    const { projects, loading, error } = this.props;
    if(loading) return <h1>Loading</h1>;

    return (
      <>
      <Projects />
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
