import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StudentsTable extends Component {
  state = { }
  
  render() { 
    const { students } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Program</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.number}>
              <td>{student.number}</td>
              <td>{student.name}</td>
              <td>{student.program}</td>
              <td>
                <button 
                  onClick={() => console.log(`student details displayed for ${student.name}`)} 
                  className='btn btn-sm'>
                    <Link to={`/students/${student.number}`}>Details</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default StudentsTable;
