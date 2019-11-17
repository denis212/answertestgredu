import React, { Component } from 'react';

class StudentDetails extends Component {
  state = {}

  handleReturn() {
    // Return to all students
  }

  render() {
    return (
      <div>
        <h1>Details for {this.props.match.params.number}</h1>
        <button onClick={this.handleReturn}>
          Return
        </button>
      </div>
    );
  }
}

export default StudentDetails;