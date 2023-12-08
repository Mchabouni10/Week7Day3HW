import React from 'react'
import Header from './Header';
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'
import EmployeeListItem from './EmployeeListItem'

function Homepage(props) {
  return (
    <div className='Homepage'>
      <Header txt={'Employee Directory'}/>
      <SearchBar />
      <EmployeeList employees={props.employees} />
      <EmployeeListItem />
    </div>
  )
}

export default Homepage