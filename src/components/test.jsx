import React, { Component } from 'react';

class Test extends Component {
  state = {  }
  render() { 
    return <table className="table">
      <thead>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Term</th>
          <th>Class</th>
        </tr>
      </thead>
    </table>;
  }
}
 
export default Test;