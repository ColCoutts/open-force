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
import Footer from '../components/footer/Footer';
import { fetchProjects } from '../actions/projectActions';


class AllProjects extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
  }

  fetchProjects = () => {
    this.props.fetch(this.props.projects);
  }

  componentDidMount() {
    this.fetchProjects();
  }

  render() {
    const { loading, projects } = this.props;
    if(loading) return <h1>Loading</h1>;

    return (
      <>
        <Buttons />
        <AllProjectsContainer>
          <Projects projects={projects} />
        </AllProjectsContainer>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: getProjectsLoading(state),
  projects: getProjectList(state),
  error: getProjectsError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchProjects());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProjects);
