import React from 'react';
import Joi from 'joi-browser';
import Form from '../commons/form';

class RegisterForm extends Form {
    state = {
        data: { username: "", password: "", name: "" },
        errors: {}
    }

    schema = {
        username: Joi.string().required().email().label('Username'),
        password: Joi.string().required().min(5).label('Password'),
        name: Joi.string().required().label('Name')
    }

    doSubmit = () => {

    }

    handleChange = (e) => {
        const data = { ...this.state.data };
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ data });
    };

    render() {
        const { username, password, name } = this.state.data;
        const { errors } = this.state;

        return (
            <div onSubmit={this.handleSubmit}>
                <h1>Register User</h1>
                <form>
                    <div style={{ margin: 0 }} className="form-group">
                        <label htmlFor="username">Username (E-mail)</label>
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
                    <div style={{ margin: 0 }} className="form-group">
                        <label htmlFor="password">Name</label>
                        <input
                            id="password"
                            value={name}
                            onChange={this.handleChange}
                            name="password"
                            type="text"
                            className="form-control"
                            error={errors.name}
                        />
                    </div>
                    {errors.name && <div className="alert alert-danger">
                        {errors.name}
                    </div>}
                    <button
                        disabled={this.validate()}
                        style={{ marginTop: 10 }}
                        className="btn btn-primary">
                        Register
                    </button>
                </form>
            </div>
        );
    }
}

export default RegisterForm;