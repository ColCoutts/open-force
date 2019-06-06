import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { postUser } from '../../actions/signUpActions';
import { connect } from 'react-redux';
import { getUserLoading, getUserError } from '../../selectors/userSelectors';
import { StyledSignUpSection } from './StyledForms/StyledSignUp';

export class SignUpForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    history: PropTypes.object
  };

  state = {
    username: '',
    password: '',
    email: ''
  }

  postUser = () => {
    return this.props.onSubmit({ username: this.state.username, email: this.state.email, password: this.state.password });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.postUser()
      .then(() => {
        return this.props.history.push('/');
      });
    this.setState({ username: '', password: '', email: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { username, password, email } = this.state;

    return (
      <StyledSignUpSection>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="username" name="username" type="text" value={username} onChange={this.handleChange}></input>
          <input placeholder="email" name="email" type="text" value={email} onChange={this.handleChange}></input>
          <input placeholder="password" name="password" type="text" value={password} onChange={this.handleChange}></input>
          <button>JOIN</button>
        </form>
      </StyledSignUpSection>
    );
  }
}

const mapStateToProps = state => ({
  loading: getUserLoading(state),
  error: getUserError(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit(username, password, email) {
    const action = postUser(username, password, email);
    dispatch(action);
    return action.payload;
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
