import React, { Component } from 'react';
import Pagination from '../commons/pagination';
import StudentsTable from './studentsTable';
import { paginate } from '../utils/paginate';

class Students extends Component {
  state = {
    students: [
      {
        number: 1234,
        name: 'Mikael',
        program: 'Technology',
      },
      {
        number: 2345,
        name: 'Sally',
        program: 'Art',
      },
      {
        number: 3421412356,
        name: 'John',
        program: 'Letters',
      },
      {
        number: 451412367,
        name: 'Xena',
        program: 'Language',
      },
      {
        number: 121312334,
        name: 'Nona',
        program: 'Technology',
      },
      {
        number: 231231245,
        name: 'Bekir',
        program: 'Art',
      },
      {
        number: 34512356,
        name: 'Akrab',
        program: 'Letters',
      },
      {
        number: 41321567,
        name: 'Aleyna',
        program: 'Language',
      }
    ],
    pageSize: 5,
    currentPage: 1
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  }
  
  render() {
    const { length: count } = this.state.students;
    const { pageSize, currentPage, students: allStudents } = this.state;

    if (count === 0) return <p>There are no students registered.</p>;

    const students = paginate(allStudents, currentPage, pageSize);

    return (
      <React.Fragment>
        <p>There are {count} students registered.</p>
        <StudentsTable students={students}/>
        <Pagination itemsCount={count} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange}/>
      </React.Fragment>
    );
  }
}

export default Students;
