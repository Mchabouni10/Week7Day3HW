import React from 'react';
import EmployeeListItem from './EmployeeListItem';
import Infolist from '../models/Infolist'; // Update the import path accordingly

function EmployeeList() {
  return (
    <div>
      {Infolist.map((employee, index) => (
        <EmployeeListItem key={index} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;