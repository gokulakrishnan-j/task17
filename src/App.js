
import './App.css';
import AddDetails from './task/AddDetails';
import DataBoard from './task/DataBoard';
import NavBar from './task/NavBar';
import EditDetails from './task/EditDetails';
import { useState } from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
function App() {
  const [userdata,setuserData]=useState([
    {
        name : "gokul",
        age:"15",
        dob:"12.09.2001",
        standard:"10"
    },

    {
      name : "vasu",
      age:"15",
      dob:"08.04.1997",
      standard:"10"
  }
])
  return (
    <div>
      <BrowserRouter>
          <NavBar/>
          <Routes>
      <Route path='/databoard'element={<DataBoard data={{userdata,setuserData}}/>}/>
    
      <Route path='/add-details'element={ <AddDetails data={{userdata , setuserData}}/>}/>
      <Route path='*'element={<Navigate to='/databoard'/>}/>
      <Route path='/edit-user/:id' element={<EditDetails data={{userdata , setuserData}}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
