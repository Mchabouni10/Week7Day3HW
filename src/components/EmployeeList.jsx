import React from 'react';

function EmployeeList({ employees }) {
  return (
    <li>
     {employees.map((el)=>{return <h1>{el.name}</h1>}) }
    </li>
  );
}

export default EmployeeList;