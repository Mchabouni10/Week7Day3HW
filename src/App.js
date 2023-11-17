
import Homepage from './components/Homepage';
import Infolist from './models/Infolist'
import EmployeePage from './components/EmployeePage';

import { useState } from 'react';

import './App.css';

function App() {
  const [data, setData] = useState(Infolist)
  return (
    <div className="App">
     <Homepage employees={data}/><EmployeePage employees={data}/>
    </div>
  );
}

export default App;
