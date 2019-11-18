import { Component } from 'react';
import Joi from 'joi-browser';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    validate = () => {
        const options = { abortEarly: false }; // prevent early stop
        const { error } = Joi.validate(this.state.data, this.schema, options);
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

        this.doSubmit();
    };

    validateProperty = () => {
        Joi.validate = ({ name, value }) => {
            const obj = { [name]: value };
            const schema = { [name]: this.schema[name] }
            const { error } = Joi.validate(obj, schema);

            return error ? error.details[0].message : null;
        }
    }
}

export default Form;