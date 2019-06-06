import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class SignUpForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    username: '',
    password: '',
    email: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    const { username, password, email } = this.state;
    this.props.onSubmit(username, password, email);
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
