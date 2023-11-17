import React from 'react';
import Header from './Header';
import EmployeeList from './EmployeeList';
import EmployeeListItem from './EmployeeListItem';

function EmployeePage (props) {

  return (
    <div>
      <Header />
      <EmployeeList employees={props.employees} />
    </div>
  );
}

export default EmployeePage;