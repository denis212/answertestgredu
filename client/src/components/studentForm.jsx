import React from 'react';
import Form from '../commons/form';
import Joi from 'joi-browser';

class StudentForm extends Form {
  state = {
    data: {
      number: '',
      name: '',
      enrolledAt: Date.now,
      credits: 0,
      program: ''
    },
    programs: [],
    course: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    number: Joi.string().label('Number'),
    name: Joi.string().required().label('Name'),
    enrolledAt: Joi.date(),
    credits: Joi.number().min(1).max(20),
    program: Joi.string().label('Program')
  }


  componentDidMount() {
    const programs = ['x', 'y', 'z']
    this.setState({ programs });

    /* const studentId = this.props.match.params.id;
    if (studentId === "new") return; */

    /* const student = getStudent(studentId);
    if (!student) return this.props.history.replace("/not-found"); */

    // this.setState({ data: this.mapToViewModel(student) })
  }

  mapToViewModel(student) {
    return {
      _id: student._id,
      number: student.number,
      name: student.name,
      endrolledAt: student.enrolledAt,
      credits: student.credits,
      program: student.program
    }
  }

  handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };

  doSubmit = () => {
    /* saveStudent(this.state.data); */

    this.props.history.push("/students");
  }

  render() {
    const { name } = this.state.data;
    const { errors, programs } = this.state;

    return (
      <div onSubmit={this.handleSubmit}>
        <h1>New Student</h1>
        <form>
          <div style={{ margin: 0 }} className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={name}
              onChange={this.handleChange}
              name="name"
              type="text"
              className="form-control"
              error={errors.name}
            />
          </div>
          {errors.name && <div className="alert alert-danger">
            {errors.name}
          </div>}
          <div style={{ margin: 0 }} className="form-group">
            <label htmlFor="program">Study Program</label>
            <select name="select" id="select" className="form-control">
              <option value="" />
              {programs.map(program => (
                <option key={program._id} value="program._id">
                  {program.title}
                </option>
              ))}
            </select>
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

export default StudentForm;