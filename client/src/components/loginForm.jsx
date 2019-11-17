import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    account: {
      username: '',
      password: ''
    },
    errors: {

    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.validate();
  };

  handleChange = (e) => {
    const account = {...this.state.account};
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { username, password } = this.state.account;

    return (
      <div onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              id="username"
              value={username}
              onChange={this.handleChange}
              name="username" 
              type="text" 
              className="form-control" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              id="password" 
              value={password}
              onChange={this.handleChange}
              name="password"
              type="text" 
              className="form-control" 
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
