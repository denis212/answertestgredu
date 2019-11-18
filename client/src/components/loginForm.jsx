import React from 'react';
import Joi from 'joi-browser';
import Form from '../commons/form';

class LoginForm extends Form {
  state = {
    data: {
      username: '',
      password: ''
    },
    errors: {}
  }

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
  }

  doSubmit = () => {

  }

  handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };

  render() {
    const { username, password } = this.state.data;
    const { errors } = this.state;

    return (
      <div onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <form>
          <div style={{ margin: 0 }} className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={username}
              onChange={this.handleChange}
              name="username"
              type="text"
              className="form-control"
              error={errors.username}
            />
          </div>
          {errors.username && <div className="alert alert-danger">
            {errors.username}
          </div>}
          <div style={{ margin: 0 }} className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={password}
              onChange={this.handleChange}
              name="password"
              type="text"
              className="form-control"
              error={errors.password}
            />
          </div>
          {errors.password && <div className="alert alert-danger">
            {errors.password}
          </div>}
          <button
            disabled={this.validate()}
            style={{ marginTop: 10 }}
            className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
