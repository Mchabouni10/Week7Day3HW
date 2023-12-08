
import Homepage from './components/Homepage';
import Infolist from './models/Infolist'
import EmployeePage from './components/EmployeePage';

import { useState } from 'react';

import './App.css';

function App() {
  const [data, setData] = useState(Infolist)
  return (
    <div className="App">
     <Homepage />
     <EmployeePage />
    </div>
  );
}

export default App;
