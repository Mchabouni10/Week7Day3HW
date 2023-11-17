import React from "react";

function EmployeeListItem({ employee }) {
  if (!employee) {
    return null;
  }

  return (
    <div className="EmployeeListItem">
      {employee.image && (
        <img
          src={employee.image}
          alt={employee.name}
          style={{ width: "40px", height: "40px" }}
        />
      )}
      <h3>{employee.name}</h3>
      <p>{employee.position}</p>
    </div>
  );
}

export default EmployeeListItem;
