import React from 'react';
import Header from './Header';
import EmployeeList from './EmployeeList';
import EmployeeListItem from './EmployeeListItem';
import EmployeeInfo from './EmployeeInfo';

function EmployeePage (props) {

  return (
    <div className='EmployeePage'>
      <Header txt={'employee'} />
      {/* <EmployeeList employees={props.employees} /> */}
      <EmployeeInfo/>
    </div>
  );
}

export default EmployeePage;