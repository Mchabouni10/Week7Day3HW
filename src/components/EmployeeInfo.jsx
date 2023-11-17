import React from 'react'
import EmployeeListItem from './EmployeeListItem'
import Infolist from '../models/Infolist'
function EmployeeInfo() {
  return (
    <div>
        <EmployeeListItem employee={Infolist[0]} />
        <div>
            <h4>
                call office
            </h4>
            <h6>{Infolist[0].office}</h6>
        </div>
    

    </div>
  )
}

export default EmployeeInfo