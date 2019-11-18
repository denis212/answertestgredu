import React, { Component } from 'react';
import Joi from 'joi-browser';

class LoginForm extends Component {
  state = {
    account: {
      username: '',
      password: ''
    },
    errors: {}
  }

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
  }

  validate = () => {
    const options = { abortEarly: false }; // prevent early stop
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    
    this.setState({ errors: errors || {} }); //Never be null
    if (errors) return;
  };

  handleChange = (e) => {
    const account = {...this.state.account};
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { username, password } = this.state.account;
    const { errors } = this.state;

    return (
      <div onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <form>
          <div style={{margin: 0}} className="form-group">
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
          <div style={{margin: 0}} className="form-group">
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
          <button style={{marginTop: 10}} className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
