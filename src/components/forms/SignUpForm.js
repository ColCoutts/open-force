import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { postUser } from '../../actions/signUpActions';
import { connect } from 'react-redux';
import { getUserLoading, getUserError } from '../../selectors/userSelectors';


export class SignUpForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired,
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
    this.props.fetch({ username: this.state.username, email: this.state.email, password: this.state.password });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, password, email } = this.state;
    this.props.onSubmit(username, password, email);

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
      <section>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="username" name="username" type="text" value={username} onChange={this.handleChange}></input>
          <input placeholder="email" name="email" type="text" value={email} onChange={this.handleChange}></input>
          <input placeholder="password" name="password" type="text" value={password} onChange={this.handleChange}></input>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loading: getUserLoading(state),
  error: getUserError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(json) {
    dispatch(postUser(json));
  },
  onSubmit(username, password, email) {
    dispatch(postUser(username, password, email));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
