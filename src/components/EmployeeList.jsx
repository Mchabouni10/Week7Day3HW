import React from 'react';
import EmployeeListItem from './EmployeeListItem';
import Infolist from '../models/Infolist'; // Update the import path accordingly
import { useContext } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';

function EmployeeList() {
  let {stuff} = useContext(EmployeeContext)
  return (
    <div>
      {stuff.map((employee, index) => (
        <EmployeeListItem key={index} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;